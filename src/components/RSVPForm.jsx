import React from 'react';

const RSVPForm = () => {
    return (
        <section className="py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Confirma tu asistencia</h2>
                    <p className="text-stone-600 font-light">Esperamos poder celebrar este día contigo</p>
                </div>

                <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 outline-none transition-colors"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-1">Número de acompañantes</label>
                        <select
                            id="guests"
                            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 outline-none transition-colors"
                        >
                            <option value="0">Solo yo</option>
                            <option value="1">+1</option>
                            <option value="2">+2</option>
                            <option value="3">+3</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="dietary" className="block text-sm font-medium text-stone-700 mb-1">Alergias o restricciones alimentarias</label>
                        <textarea
                            id="dietary"
                            rows="3"
                            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 outline-none transition-colors"
                            placeholder="¿Alguna alergia que debamos saber?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-stone-800 text-white py-3 px-6 rounded-md hover:bg-stone-700 transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
                    >
                        Confirmar Asistencia
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RSVPForm;
