import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import videoSobre from '../../assets/video-sobre2.mp4';
import './EnvelopeOverlay.css';

const EnvelopeOverlay = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const videoRef = useRef(null);

    const handleOpen = () => {
        if (isPlaying) return;

        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }

        // Esperar 3 segundos y luego desvanecer
        setTimeout(() => {
            setIsVisible(false);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="envelope-overlay"
                >
                    <div className="envelope-container">
                        {/* Video que cubre toda la pantalla */}
                        <video
                            ref={videoRef}
                            src={videoSobre}
                            className="envelope-video"
                            playsInline
                        // Opcional: poster={sobreCerrado} si quieres una imagen de carga
                        />

                        {/* Botón del sello - Solo visible antes de reproducir */}
                        {!isPlaying && (
                            <button
                                onClick={handleOpen}
                                className="envelope-button"
                                style={{
                                    width: '30vmin',
                                    height: '30vmin',
                                    // Debug: background: 'rgba(255,0,0,0.2)' 
                                }}
                                aria-label="Abrir invitación"
                            />
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EnvelopeOverlay;