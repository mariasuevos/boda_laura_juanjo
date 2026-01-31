import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import Parador from '../../assets/parador.png';
import './LocationDetails.css';

const LocationDetails = () => {
    return (
        <section className="location-section">
            <div className="location-container">
                {/* Header */}
                <div className="location-header">
                    <h2 className="location-title">Detalles del día</h2>
                    <p className="location-subtitle">Todo lo que necesitas saber</p>
                </div>

                {/* Card */}
                <div className="location-card">
                    <div className="location-card-content">

                        {/* Icon Container */}
                        <div className="location-icon-container">
                            <MapPin className="location-icon-pin" />
                        </div>

                        <h3 className="location-name">Localización</h3>
                        <p className="location-place">El Parador de Albacete</p>

                        <div className="location-time-container">
                            <Clock className="location-icon-clock" />
                            <span className="location-time-text">De 17:00h a 01:00h</span>
                        </div>

                        {/* Location Image */}
                        <div className="location-image-container">
                            <img src={Parador} alt="Parador de Albacete" className="location-image" />
                        </div>

                        {/* Map */}
                        <div className="location-map-container">
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
                        </div>

                        {/* Buttons */}
                        <div className="location-buttons">
                            <a
                                href="https://maps.app.goo.gl/example"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="location-button"
                            >
                                <MapPin className="w-4 h-4 mr-2" />
                                Abrir en Maps
                            </a>

                            <a
                                href="#"
                                className="location-button"
                            >
                                <Calendar className="w-4 h-4 mr-2" />
                                Añadir al calendario
                            </a>
                        </div>

                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="location-divider">
                    <div className="location-divider-line"></div>
                    <div className="location-divider-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L24 12L12 24L0 12L12 0Z" />
                        </svg>
                    </div>
                    <div className="location-divider-line"></div>
                </div>

            </div>
        </section>
    );
};

export default LocationDetails;
