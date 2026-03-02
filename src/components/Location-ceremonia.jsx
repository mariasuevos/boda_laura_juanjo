import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import Parador from '../assets/acuarela-parador.png';
import Catedral from '../assets/acuarela-catedral.png';

const LocationDetails = () => {
    return (
        <section className="py-10 bg-[#f0ebe0]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Detalles del día</h2>
                    <p className="text-stone-500 font-serif italic">Todo lo que necesitas saber</p>
                </div>

                {/* Card */}
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden mb-12">
                    <div className="p-8 flex flex-col items-center text-center">

                        {/* Icon Container */}
                        <div className="w-16 h-16 bg-[#fdfaf5] rounded-full flex items-center justify-center mb-6">
                            <MapPin className="w-8 h-8 text-boda-oliva" />
                        </div>

                        <h3 className="text-2xl font-serif text-stone-800 mb-2">Lugar de la ceremonia</h3>
                        <p className="text-xl text-stone-600 font-serif mb-4">Catedral de Albacete</p>

                        <div className="flex items-center text-stone-500 mb-8">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm uppercase tracking-widest">18:00h</span>
                        </div>

                        {/* Location Image */}
                        <div className="w-full h-64 bg-transparent mb-6 flex justify-center items-center">
                            <img src={Catedral} alt="Catedral de Albacete" className="h-full w-auto object-contain rounded-lg" />
                        </div>

                        {/* Buttons */}
                        <div className="w-full space-y-3">
                            <a
                                href="https://www.google.es/maps/place/Catedral+de+San+Juan+Bautista+de+Albacete/@38.9958499,-1.8585562,17z/data=!3m2!4b1!5s0xd665fbf326117c5:0xa646745194f34cc0!4m6!3m5!1s0xd665fb8cd57ae37:0xd3c5bf1046ca48d7!8m2!3d38.9958458!4d-1.8559813!16s%2Fm%2F0h56hf5?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#fdfaf5] border border-[#dcd6c8] text-stone-600 font-serif uppercase tracking-widest text-sm rounded hover:bg-[#f0ebe0] transition-colors flex items-center justify-center"
                            >
                                <MapPin className="w-4 h-4 mr-2" />
                                Abrir en Maps
                            </a>
                        </div>

                    </div>
                </div>

                {/* Card */}
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden mb-12">
                    <div className="p-8 flex flex-col items-center text-center">

                        {/* Icon Container */}
                        <div className="w-16 h-16 bg-[#fdfaf5] rounded-full flex items-center justify-center mb-6">
                            <MapPin className="w-8 h-8 text-boda-oliva" />
                        </div>

                        <h3 className="text-2xl font-serif text-stone-800 mb-2">Lugar de la celebración</h3>
                        <p className="text-xl text-stone-600 font-serif mb-4">Parador de Albacete</p>

                        <div className="flex items-center text-stone-500 mb-8">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm uppercase tracking-widest">20:00h</span>
                        </div>

                        {/* Location Image */}
                        <div className="w-full h-64 bg-transparent mb-6 flex justify-center items-center">
                            <img src={Parador} alt="Parador de Albacete" className="h-full w-auto object-contain rounded-lg" />
                        </div>

                        {/* Map */}
                        {/* <div className="w-full h-48 bg-stone-100 rounded-lg mb-6 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.567676789543!2d-1.826889924158484!3d38.97732997170757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd665fc5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sParador%20de%20Albacete!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Parador de Albacete"
                            ></iframe>
                        </div> */}

                        {/* Buttons */}
                        <div className="w-full space-y-3">
                            <a
                                href="https://www.google.es/maps/place/Parador+de+Albacete/@38.9627427,-1.8254986,17z/data=!3m1!4b1!4m9!3m8!1s0xd665feec6d28c9b:0x94b5e6c85f4d09f2!5m2!4m1!1i2!8m2!3d38.9627386!4d-1.8229237!16s%2Fg%2F11b60zrh7l?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#fdfaf5] border border-[#dcd6c8] text-stone-600 font-serif uppercase tracking-widest text-sm rounded hover:bg-[#f0ebe0] transition-colors flex items-center justify-center"
                            >
                                <MapPin className="w-4 h-4 mr-2" />
                                Abrir en Maps
                            </a>


                            {/* <a
                                href="#"
                                className="w-full py-3 bg-[#fdfaf5] border border-[#dcd6c8] text-stone-600 font-serif uppercase tracking-widest text-sm rounded hover:bg-[#f0ebe0] transition-colors flex items-center justify-center"
                            >
                                <Calendar className="w-4 h-4 mr-2" />
                                Añadir al calendario
                            </a> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationDetails;
