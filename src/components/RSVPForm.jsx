import React from 'react';
import { Send, AlertTriangle } from 'lucide-react';

const RSVPForm = () => {
    return (
        <section className="py-12 bg-[#f0ebe0]">
            <div className="container mx-auto px-4 max-w-xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Confirma tu asistencia</h2>
                    <p className="text-stone-500 font-serif italic">Esperamos contar contigo </p>
                </div>

                <form className="bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-8">

                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-stone-800 font-serif font-medium mb-2">Nombre completo *</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-stone-800 font-serif font-medium mb-2">Email (opcional)</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400"
                            placeholder="tu@email.com"
                        />
                    </div>

                    {/* Asistencia */}
                    <div>
                        <label className="block text-stone-800 font-serif font-medium mb-3">¿Asistirás? *</label>
                        <div className="flex space-x-6">
                            <label className="flex items-center cursor-pointer group">
                                <input type="radio" name="attendance" className="w-5 h-5 text-[#3a4030] border-stone-300 focus:ring-[#3a4030]" defaultChecked />
                                <span className="ml-2 text-stone-600 group-hover:text-stone-800">Sí, asistiré</span>
                            </label>
                            <label className="flex items-center cursor-pointer group">
                                <input type="radio" name="attendance" className="w-5 h-5 text-[#3a4030] border-stone-300 focus:ring-[#3a4030]" />
                                <span className="ml-2 text-stone-600 group-hover:text-stone-800">No podré asistir</span>
                            </label>
                        </div>
                    </div>

                    {/* Número de invitados */}
                    <div>
                        <label htmlFor="guests" className="block text-stone-800 font-serif font-medium mb-2">Número de invitados (incluyéndote)</label>
                        <input
                            type="number"
                            id="guests"
                            min="1"
                            defaultValue="1"
                            className="w-24 px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700"
                        />
                    </div>

                    {/* Alergias */}
                    <div className="pt-4">
                        <div className="flex items-center mb-3 text-[#bfa15f]">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            <h3 className="font-serif font-medium text-lg text-stone-700">Alergias e intolerancias alimentarias</h3>
                        </div>
                        <p className="text-sm text-stone-500 mb-4">
                            Es muy importante para nosotros conocer cualquier restricción alimentaria. Selecciona las que apliquen:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            {['Sin gluten / Celíaco', 'Sin lactosa', 'Vegetariano', 'Vegano', 'Alergia a frutos secos', 'Alergia a mariscos'].map((allergy) => (
                                <label key={allergy} className="flex items-center cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded text-[#3a4030] border-stone-300 focus:ring-[#3a4030]" />
                                    <span className="ml-2 text-stone-600 text-sm group-hover:text-stone-800">{allergy}</span>
                                </label>
                            ))}
                        </div>

                        <label className="block text-stone-600 font-medium text-sm mb-2">Otras alergias o restricciones:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400"
                            placeholder="Ej: alergia al huevo, intolerancia a la fructosa"
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label htmlFor="message" className="block text-stone-800 font-serif font-medium mb-2">Mensaje para los novios (opcional)</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 bg-[#fdfaf5] border border-[#e6e2d6] rounded-lg focus:ring-1 focus:ring-[#6b705c] focus:border-[#6b705c] outline-none transition-colors text-stone-700 placeholder:text-stone-400 resize-none"
                            placeholder="Escríbenos unas palabras..."
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
        </section>
    );
};

export default RSVPForm;
