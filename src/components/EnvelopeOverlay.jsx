import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Asegúrate de importar la imagen correctamente según dónde la guardaste
import sobreImg from '../assets/sobre-cerrado.png';

const EnvelopeOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleOpen = () => {
        setIsOpen(true);
        // Esperamos a que termine la animación de abrir (1s) + un poco de pausa 
        // antes de quitar todo el sobre de la pantalla
        setTimeout(() => {
            setIsVisible(false);
        }, 800);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-boda-crema overflow-hidden">

            {/* CONTENEDOR DEL SOBRE (Centrado) */}
            <motion.div
                initial={{ scale: 1 }}
                animate={isOpen ? { scale: 1.1, opacity: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }} // El sobre baja y desaparece DESPUÉS de abrirse
                className="relative shadow-2xl"
                style={{
                    '--seal-size': '30vmin',
                    width: '100vmax',
                    height: '100vmax',
                    maxWidth: 'none',
                    maxHeight: 'none'
                }}
            >

                {/* 1. PARTE INFERIOR (BOLSILLO) 
            Usamos clip-path para recortar todo MENOS el triángulo de la solapa.
            Y usamos mask-image para hacer un agujero en el centro donde va el sello.
            Ángulo de 30 grados: tan(30) ≈ 0.57735
        */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${sobreImg})`,
                        clipPath: 'polygon(0% calc(50% - (50% - var(--seal-size)/2) * 0.57735), calc(50% - var(--seal-size)/2) 50%, calc(50% + var(--seal-size)/2) 50%, 100% calc(50% - (50% - var(--seal-size)/2) * 0.57735), 100% 100%, 0% 100%)',
                        maskImage: 'radial-gradient(circle at center, transparent calc(var(--seal-size) / 2), black calc(var(--seal-size) / 2 + 1px))',
                        WebkitMaskImage: 'radial-gradient(circle at center, transparent calc(var(--seal-size) / 2), black calc(var(--seal-size) / 2 + 1px))'
                    }}
                />

                {/* 2. SOLAPA SUPERIOR (MÓVIL)
            Contenedor que rota. Incluye el triángulo de la solapa Y el sello.
        */}
                <motion.div
                    className="absolute inset-0 w-full h-full origin-top pointer-events-none"
                    style={{ zIndex: 20 }}
                    animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {/* El triángulo de la solapa */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${sobreImg})`,
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(50% - (50% - var(--seal-size)/2) * 0.57735), calc(50% + var(--seal-size)/2) 50%, calc(50% - var(--seal-size)/2) 50%, 0% calc(50% - (50% - var(--seal-size)/2) * 0.57735))'
                        }}
                    />

                    {/* El reverso de la solapa (transparente) */}
                    <div className="absolute inset-0 bg-transparent opacity-0"
                        style={{ backfaceVisibility: 'visible', transform: 'rotateX(180deg)' }}
                    />

                    {/* 3. EL SELLO (BOTÓN)
                Está dentro del contenedor que rota, así que se mueve con la solapa.
                Usamos un truco para que el fondo coincida con la imagen principal.
            */}
                    <button
                        onClick={handleOpen}
                        disabled={isOpen}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-full cursor-pointer hover:scale-105 transition-transform shadow-2xl pointer-events-auto overflow-hidden"
                        style={{ width: 'var(--seal-size)', height: 'var(--seal-size)' }}
                        aria-label="Abrir invitación"
                    >
                        {/* Fondo del sello que coincide con el fondo global */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-cover bg-center"
                            style={{ backgroundImage: `url(${sobreImg})` }}
                        />
                    </button>
                </motion.div>



            </motion.div>
        </div>
    );
};

export default EnvelopeOverlay;