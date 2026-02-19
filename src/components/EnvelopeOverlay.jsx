import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import videoSobre from '../assets/video-sobre2.mp4';

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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-boda-crema overflow-hidden"
                >
                    <div className="relative w-full h-full">
                        {/* Video que cubre toda la pantalla */}
                        <video muted
                            ref={videoRef}
                            src={videoSobre}
                            className="w-full h-full object-cover"
                            playsInline
                        />

                        {/* Botón del sello - Solo visible antes de reproducir */}
                        {!isPlaying && (
                            <button
                                onClick={handleOpen}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-full cursor-pointer hover:scale-105 transition-transform"
                                style={{
                                    width: '30vmin',
                                    height: '30vmin',
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