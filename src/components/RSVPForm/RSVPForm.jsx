import React from 'react';
import { Send, AlertTriangle } from 'lucide-react';
import './RSVPForm.css';

const RSVPForm = () => {
    return (
        <section className="rsvp-section">
            <div className="rsvp-container">

                {/* Header */}
                <div className="rsvp-header">
                    <h2 className="rsvp-title">Confirma tu asistencia</h2>
                    <p className="rsvp-subtitle">Esperamos contar contigo </p>
                </div>

                <form className="rsvp-form">

                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="rsvp-label">Nombre completo *</label>
                        <input
                            type="text"
                            id="name"
                            className="rsvp-input"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="rsvp-label">Email (opcional)</label>
                        <input
                            type="email"
                            id="email"
                            className="rsvp-input"
                            placeholder="tu@email.com"
                        />
                    </div>

                    {/* Asistencia */}
                    <div>
                        <label className="block text-stone-800 font-serif font-medium mb-3">¿Asistirás? *</label>
                        <div className="rsvp-radio-group">
                            <label className="rsvp-radio-label group">
                                <input type="radio" name="attendance" className="rsvp-radio-input" defaultChecked />
                                <span className="rsvp-radio-text">Sí, asistiré</span>
                            </label>
                            <label className="rsvp-radio-label group">
                                <input type="radio" name="attendance" className="rsvp-radio-input" />
                                <span className="rsvp-radio-text">No podré asistir</span>
                            </label>

                            <label key={allergy} className="rsvp-checkbox-label group">
                                <input type="checkbox" className="rsvp-checkbox-input" />
                                <span className="rsvp-checkbox-text">{allergy}</span>
                            </label>
                        </div>

                        <label className="rsvp-other-label">Otras alergias o restricciones:</label>
                        <input
                            type="text"
                            className="rsvp-input"
                            placeholder="Ej: alergia al huevo, intolerancia a la fructosa"
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label htmlFor="message" className="rsvp-label">Mensaje para los novios (opcional)</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="rsvp-textarea"
                            placeholder="Escríbenos unas palabras..."
                        ></textarea>
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="rsvp-submit-button"
                    >
                        <Send className="rsvp-submit-icon" />
                        Enviar confirmación
                    </button>

                </form>
            </div>
        </section>
    );
};

export default RSVPForm;
