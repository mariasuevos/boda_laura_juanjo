import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import Parador from '../assets/parador-alogamiento.png';

const Alojamiento = () => {
    return (
        <section className="py-2 bg-[#f0ebe0]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Alojamiento</h2>
                    <p className="text-stone-500 font-serif italic">Si queréis compartir con nosotros hasta el último minuto y, por vuestra comodidad, os recomendamos alojaros aquí. Tenéis un descuento especial por la boda llamando a este número de teléfono.</p>

                </div>

                {/* Card */}
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden mb-12">
                    <div className="p-8 flex flex-col items-center text-center">

                        {/* Icon Container
                        <div className="w-16 h-16 bg-[#fdfaf5] rounded-full flex items-center justify-center mb-6">
                            <MapPin className="w-8 h-8 text-boda-oliva" />
                        </div> */}

                        <h3 className="text-2xl font-serif text-stone-800 mb-2">Parador de Albacete</h3>


                        {/* Location Image */}
                        <div className="w-full h-48 bg-stone-200 rounded-lg mb-6 overflow-hidden relative">
                            <img src={Parador} alt="Parador de Albacete" className="w-full h-full object-cover" />
                        </div>

                        {/* Buttons */}
                        <div className="w-full space-y-3">
                            <a
                                href="tel:967245321"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#fdfaf5] border border-[#dcd6c8] text-stone-600 font-serif uppercase tracking-widest text-sm rounded hover:bg-[#f0ebe0] transition-colors flex items-center justify-center"
                            >
                                967 24 53 21
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Alojamiento;
