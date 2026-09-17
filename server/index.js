const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const ExcelJS = require('exceljs');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'database.sqlite');
const CSV_PATH = process.env.CSV_PATH || path.join(__dirname, 'data', 'invitados.csv');
const API_SECRET_KEY = process.env.API_SECRET_KEY || '';

if (!fs.existsSync(path.dirname(CSV_PATH))) {
    fs.mkdirSync(path.dirname(CSV_PATH), { recursive: true });
}
if (!fs.existsSync(CSV_PATH)) {
    fs.writeFileSync(CSV_PATH, 'nombre,telefono,alergias,autobus_catedral_parador,autobus_parador_albacete,mensaje,timestamp\n');
}

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:80', 'http://127.0.0.1', 'https://bodajuanjoylaura.com', 'https://www.bodajuanjoylaura.com/'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Boda API',
            version: '1.0.0',
            description: 'API Boda Laura & Juanjo',
        },
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'authorization',
                    description: 'Introduzca la clave secreta de la API aquí',
                }
            }
        },
    },
    apis: [__filename],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database ' + DB_PATH, err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS invitados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            telefono TEXT,
            alergias TEXT,
            autobus_catedral_parador TEXT,
            autobus_parador_albacete TEXT,
            mensaje TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Error creating table', err.message);
            }
        });
    }
});


app.post('/api/rsvp', (req, res) => {
    if (req.headers.authorization !== API_SECRET_KEY) {
        return res.status(401).json({ error: "No autorizado" });
    }

    const data = req.body;
    console.log('Received RSVP:', data);

    if (!data.guestDetails || !data.guestDetails[0] || !data.guestDetails[0].name || !data.guestDetails[0].phone) {
        return res.status(400).json({ error: 'Nombre y teléfono son obligatorios para el invitado principal' });
    }

    if (data.guestCount > 1) {
        if (!data.guestDetails[1] || !data.guestDetails[1].name || !data.guestDetails[1].phone) {
            return res.status(400).json({ error: 'Nombre y teléfono son obligatorios para el acompañante' });
        }
    }

    const message = data.message || '';
    const stmt = db.prepare(`INSERT INTO invitados (nombre, telefono, alergias, autobus_catedral_parador, autobus_parador_albacete, mensaje) VALUES (?, ?, ?, ?, ?, ?)`);

    data.guestDetails.forEach((guest, index) => {
        // En caso de que el companion details se haya llenado, solo iteramos
        // hasta el guestCount
        if (index >= data.guestCount) return;

        const nombre = guest.name || '';
        const telefono = guest.phone || '';

        let alergias = guest.allergies ? guest.allergies.join(', ') : '';
        if (guest.allergyOther) {
            alergias += alergias ? ` (${guest.allergyOther})` : guest.allergyOther;
        }

        let autobusCatedralParador = 'No';
        let autobusParadorAlbacete = 'No';

        if (guest.needsTransport === 'yes' && guest.transportRoutes) {
            if (guest.transportRoutes.includes('Catedral-Parador')) {
                autobusCatedralParador = 'Sí';
            }
            if (guest.transportRoutes.includes('Parador-Albacete')) {
                autobusParadorAlbacete = 'Sí';
            }
        }

        stmt.run(nombre, telefono, alergias, autobusCatedralParador, autobusParadorAlbacete, message, function (err) {
            if (err) {
                console.error('Error inserting row', err.message);
            } else {
                const sanitize = (str) => `"${String(str || '').replace(/"/g, '""')}"`;
                const csvRow = `${sanitize(nombre)},${sanitize(telefono)},${sanitize(alergias)},${sanitize(autobusCatedralParador)},${sanitize(autobusParadorAlbacete)},${sanitize(message)},${new Date().toISOString()}\n`;
                fs.appendFile(CSV_PATH, csvRow, (err) => {
                    if (err) console.error('Error writing CSV', err);
                });
            }
        });
    });

    stmt.finalize();
    res.json({ message: 'RSVP received' });
});

/**
 * @swagger
 * /api/rsvps/csv:
 *   get:
 *     summary: Descargar lista de invitados en formato CSV
 *     tags: [Invitados]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: CSV file download
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *       401:
 *         description: No autorizado
 */
app.get('/api/rsvps/csv', (req, res) => {
    if (req.headers.authorization !== API_SECRET_KEY) {
        return res.status(401).json({ error: "No autorizado" });
    }

    db.all("SELECT * FROM invitados", [], (err, rows) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }

        let csv = 'id,nombre,telefono,alergias,autobus_catedral_parador,autobus_parador_albacete,mensaje,timestamp\n';
        const sanitize = (str) => `"${String(str || '').replace(/"/g, '""')}"`;

        rows.forEach(r => {
            csv += `${r.id},${sanitize(r.nombre)},${sanitize(r.telefono)},${sanitize(r.alergias)},${sanitize(r.autobus_catedral_parador)},${sanitize(r.autobus_parador_albacete)},${sanitize(r.mensaje)},${r.timestamp}\n`;
        });

        res.header('Content-Type', 'text/csv');
        res.attachment('invitados.csv');
        return res.send(csv);
    });
});

/**
 * @swagger
 * /api/rsvps/excel:
 *   get:
 *     summary: Descargar lista de invitados en formato Excel (XLSX)
 *     tags: [Invitados]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Archivo Excel descargado
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *       401:
 *         description: No autorizado
 */
app.get('/api/rsvps/excel', (req, res) => {
    if (req.headers.authorization !== API_SECRET_KEY) {
        return res.status(401).json({ error: "No autorizado" });
    }

    db.all("SELECT * FROM invitados", [], async (err, rows) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Invitados');

        worksheet.columns = [
            { header: 'ID', key: 'id', width: 5 },
            { header: 'Nombre', key: 'nombre', width: 25 },
            { header: 'Teléfono', key: 'telefono', width: 15 },
            { header: 'Alergias', key: 'alergias', width: 30 },
            { header: 'Catedral-Parador', key: 'autobus_catedral_parador', width: 20 },
            { header: 'Parador-Albacete', key: 'autobus_parador_albacete', width: 20 },
            { header: 'Mensaje', key: 'mensaje', width: 40 },
            { header: 'Fecha', key: 'timestamp', width: 20 }
        ];

        rows.forEach(r => {
            worksheet.addRow(r);
        });

        res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.attachment('invitados.xlsx');

        await workbook.xlsx.write(res);
        res.end();
    });
});


app.get('/api/rsvps', (req, res) => {
    if (req.headers.authorization !== API_SECRET_KEY) {
        return res.status(401).json({ error: "No autorizado" });
    }

    db.all("SELECT * FROM invitados", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
