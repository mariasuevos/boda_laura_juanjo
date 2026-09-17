import React from 'react';
import { Send, AlertTriangle } from 'lucide-react';

const RSVPForm = () => {
    const [guestCount, setGuestCount] = React.useState(1);
    const [guestDetails, setGuestDetails] = React.useState([{
        name: '',
        phone: '',
        allergies: [],
        allergyOther: '',
        needsTransport: 'no',
        transportRoutes: []
    }]);
    const [message, setMessage] = React.useState('');
    const [popupStatus, setPopupStatus] = React.useState(null);

    const handleCompanionChange = (hasCompanion) => {
        const count = hasCompanion ? 2 : 1;
        setGuestCount(count);

        setGuestDetails(prev => {
            const newDetails = [...prev];
            if (count > prev.length) {
                newDetails.push({
                    name: '',
                    phone: '',
                    allergies: [],
                    allergyOther: '',
                    needsTransport: 'no',
                    transportRoutes: []
                });
            } else {
                newDetails.splice(count);
            }
            return newDetails;
        });
    };

    const updateGuestDetail = (index, field, value) => {
        setGuestDetails(prev => {
            const newDetails = [...prev];
            newDetails[index] = { ...newDetails[index], [field]: value };
            return newDetails;
        });
    };

    const handleAllergyChange = (index, allergy) => {
        setGuestDetails(prev => {
            const newDetails = [...prev];
            const currentGuest = { ...newDetails[index] };
            currentGuest.allergies = [...currentGuest.allergies];

            if (currentGuest.allergies.includes(allergy)) {
                currentGuest.allergies = currentGuest.allergies.filter(a => a !== allergy);
            } else {
                currentGuest.allergies.push(allergy);
            }
            newDetails[index] = currentGuest;
            return newDetails;
        });
    };

    const handleTransportRouteChange = (index, route) => {
        setGuestDetails(prev => {
            const newDetails = [...prev];
            const currentGuest = { ...newDetails[index] };
            currentGuest.transportRoutes = [...currentGuest.transportRoutes];

            if (currentGuest.transportRoutes.includes(route)) {
                currentGuest.transportRoutes = currentGuest.transportRoutes.filter(r => r !== route);
            } else {
                currentGuest.transportRoutes.push(route);
            }
            newDetails[index] = currentGuest;
            return newDetails;
        });
    };

    const renderGuestForm = (index, title) => {
        const guest = guestDetails[index];
        if (!guest) return null;

        return (
            <div className={`space-y-6 ${index > 0 ? 'pt-8 border-t border-[#e6e2d6]' : ''}`}>
                <h3 className="font-serif font-medium text-2xl text-stone-700">{title}</h3>

                {/* Nombre */}
                <div>
                    <label className="block text-stone-800 font-serif font-medium mb-2">Nombre completo *</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400"
                        placeholder="Nombre completo"
                        required
                        value={guest.name || ''}
                        onChange={(e) => updateGuestDetail(index, 'name', e.target.value)}
                    />
                </div>

                {/* Telefono */}
                <div>
                    <label className="block text-stone-800 font-serif font-medium mb-2">Teléfono *</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400"
                        placeholder="666666666"
                        required
                        value={guest.phone || ''}
                        onChange={(e) => updateGuestDetail(index, 'phone', e.target.value)}
                    />
                </div>

                {/* Allergies Section */}
                <div className="bg-[#fcf9f2] p-5 rounded-lg border border-[#e6e2d6] transition-all duration-300">
                    <div className="flex items-center mb-3 text-[#bfa15f]">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        <p className="font-medium text-stone-800">Alergias o intolerancias:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {['Gluten', 'Lactosa', 'Frutos secos', 'Mariscos', "Huevo"].map((allergy) => (
                            <label key={allergy} className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                    checked={guest.allergies.includes(allergy)}
                                    onChange={() => handleAllergyChange(index, allergy)}
                                />
                                <span className="ml-2 text-stone-600 text-sm group-hover:text-stone-800">{allergy}</span>
                            </label>
                        ))}
                    </div>

                    <label className="block text-stone-600 font-medium text-sm mb-2">Otras alergias o restricciones:</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400"
                        placeholder="Ej: embarazo, vegetariano..."
                        value={guest.allergyOther || ''}
                        onChange={(e) => updateGuestDetail(index, 'allergyOther', e.target.value)}
                    />
                </div>

                {/* Transport Section */}
                <div className="bg-[#fcf9f2] p-5 rounded-lg border border-[#e6e2d6] transition-all duration-300">
                    <div className="flex items-center mb-3 text-[#3a4030]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                        <p className="font-medium text-stone-800">¿Necesita autobús?</p>
                    </div>

                    <div className="flex space-x-6 mb-4">
                        <label className="flex items-center cursor-pointer group">
                            <input
                                type="radio"
                                className="w-5 h-5 text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                checked={guest.needsTransport === 'yes'}
                                onChange={() => updateGuestDetail(index, 'needsTransport', 'yes')}
                            />
                            <span className="ml-2 text-stone-600 group-hover:text-stone-800">Sí</span>
                        </label>
                        <label className="flex items-center cursor-pointer group">
                            <input
                                type="radio"
                                className="w-5 h-5 text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                checked={guest.needsTransport === 'no'}
                                onChange={() => updateGuestDetail(index, 'needsTransport', 'no')}
                            />
                            <span className="ml-2 text-stone-600 group-hover:text-stone-800">No</span>
                        </label>
                    </div>

                    <div className={`transition-all duration-300 overflow-hidden ${guest.needsTransport === 'yes' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-sm text-stone-500 mb-2">Selecciona los trayectos:</p>
                        <div className="space-y-2">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                    checked={guest.transportRoutes.includes('Catedral-Parador')}
                                    onChange={() => handleTransportRouteChange(index, 'Catedral-Parador')}
                                />
                                <span className="ml-2 text-stone-600 text-sm group-hover:text-stone-800">Catedral - Parador (20:00)</span>
                            </label>
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                    checked={guest.transportRoutes.includes('Parador-Albacete')}
                                    onChange={() => handleTransportRouteChange(index, 'Parador-Albacete')}
                                />
                                <span className="ml-2 text-stone-600 text-sm group-hover:text-stone-800">Parador - Albacete Centro (05:30)</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-12 bg-[#f0ebe0]">
            <div className="container mx-auto px-4 max-w-xl">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Confirma tu asistencia</h2>
                    <p className="text-stone-500 font-serif italic">
                        ¡No puedes faltar!
                    </p>
                </div>

                <form className="bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-8" onSubmit={async (e) => {
                    e.preventDefault();

                    const mainGuest = guestDetails[0];
                    if (!mainGuest.name || !mainGuest.phone) {
                        setPopupStatus({ type: 'error', message: 'Por favor, añade tu nombre y teléfono para poder confirmar tu asistencia.' });
                        return;
                    }

                    const phoneRegex = /^\d{9}$/;
                    if (!phoneRegex.test(mainGuest.phone)) {
                        setPopupStatus({ type: 'error', message: 'El teléfono debe tener 9 números exactos, sin prefijos (+34) ni espacios.' });
                        return;
                    }

                    if (guestCount > 1) {
                        const companion = guestDetails[1];
                        if (!companion || !companion.name || !companion.phone) {
                            setPopupStatus({ type: 'error', message: '¡No olvides añadir el nombre y teléfono de tu acompañante!' });
                            return;
                        }

                        if (!phoneRegex.test(companion.phone)) {
                            setPopupStatus({ type: 'error', message: 'El teléfono del acompañante debe tener 9 números exactos, sin prefijos ni espacios.' });
                            return;
                        }
                    }

                    try {
                        const response = await fetch('/api/rsvp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                guestCount,
                                guestDetails,
                                message
                            }),
                        });

                        const result = await response.json();

                        if (response.ok) {
                            setPopupStatus({ type: 'success', message: '¡Muchísimas gracias por acompañarnos en este día tan especial! Tu asistencia ha sido confirmada.' });
                            setGuestCount(1);
                            setGuestDetails([{
                                name: '',
                                phone: '',
                                allergies: [],
                                allergyOther: '',
                                needsTransport: 'no',
                                transportRoutes: []
                            }]);
                            setMessage('');
                        } else {
                            setPopupStatus({ type: 'error', message: result.error || 'Hubo un error al enviar tu confirmación. Intenta de nuevo más tarde.' });
                        }
                    } catch (error) {
                        console.error('Error:', error);
                        setPopupStatus({ type: 'error', message: 'Error de conexión. Revisa si estás conectado a internet.' });
                    }
                }}>

                    {/* Formulario del Invitado Principal */}
                    {renderGuestForm(0, 'Tus Detalles')}

                    {/* Separador visual antes de preguntar por acompañante */}
                    <div className="pt-8 border-t border-[#e6e2d6]">
                        <label className="block text-stone-800 font-serif font-medium mb-4 text-xl">¿Vienes con un acompañante? *</label>
                        <div className="flex space-x-8">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="radio"
                                    name="companion-group"
                                    className="w-6 h-6 text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                    checked={guestCount === 2}
                                    onChange={() => handleCompanionChange(true)}
                                />
                                <span className="ml-3 text-stone-700 text-lg group-hover:text-stone-900">Sí</span>
                            </label>
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="radio"
                                    name="companion-group"
                                    className="w-6 h-6 text-[#3a4030] border-stone-300 focus:ring-[#3a4030]"
                                    checked={guestCount === 1}
                                    onChange={() => handleCompanionChange(false)}
                                />
                                <span className="ml-3 text-stone-700 text-lg group-hover:text-stone-900">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Formulario del Acompañante */}
                    {guestCount > 1 && renderGuestForm(1, 'Detalles de tu acompañante')}

                    {/* Mensaje */}
                    <div className="pt-8 border-t border-[#e6e2d6]">
                        <label htmlFor="message" className="block text-stone-800 font-serif font-medium mb-2">Mensaje para los novios (opcional)</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400 resize-none"
                            placeholder="Escríbenos unas palabras..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-[#3a4030] text-white py-4 px-6 rounded-lg hover:bg-[#2c3124] transition-colors duration-300 flex items-center justify-center font-medium tracking-wide shadow-md"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        Enviar confirmación
                    </button>

                </form>
            </div>

            {/* Popup Modal */}
            {popupStatus && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 backdrop-blur-sm px-4">
                    <div className="bg-[#fcf9f2] rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform transition-all">
                        {popupStatus.type === 'success' ? (
                            <div className="w-16 h-16 bg-[#e6e2d6] rounded-full flex items-center justify-center mx-auto mb-4 text-[#3a4030]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        ) : (
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                        )}
                        <h3 className="text-2xl font-serif text-stone-800 mb-2">
                            {popupStatus.type === 'success' ? '¡Gracias!' : 'Faltan datos'}
                        </h3>
                        <p className="text-stone-600 mb-6">
                            {popupStatus.message}
                        </p>
                        <button
                            onClick={() => setPopupStatus(null)}
                            className="bg-[#3a4030] text-white px-8 py-3 rounded-lg hover:bg-[#2c3124] transition-colors font-medium shadow-md"
                        >
                            {popupStatus.type === 'success' ? 'Cerrar' : 'Entendido'}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RSVPForm;
