import { useState, useRef, useEffect } from 'react';
import videoSobre from '../assets/video-sobre2.mp4';

const EnvelopeOverlay = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    const handleOpen = () => {
        if (isPlaying) return;

        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }

        // Wait to fade out
        setTimeout(() => {
            setIsFading(true);
        }, 1500);

        // Remove element entirely after fade transition
        setTimeout(() => {
            setIsVisible(false);
        }, 3500);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-[#fdfaf5] overflow-hidden transition-opacity duration-[2000ms] ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ zIndex: 99999 }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Video */}
                <video
                    ref={videoRef}
                    // Hack for iOS Safari to show first frame
                    src={`${videoSobre}#t=0.001`}
                    className="w-full h-full object-cover"
                    muted={true}
                    playsInline={true}
                    autoPlay={false}
                    preload="auto"
                />

                {/* Botón del sello - Sólo visible antes de reproducir */}
                {!isPlaying && (
                    <button
                        onClick={handleOpen}
                        className="absolute z-50 rounded-full cursor-pointer hover:scale-105 transition-transform"
                        style={{
                            width: '30vmin',
                            height: '30vmin',
                        }}
                        aria-label="Abrir invitación"
                    />
                )}
            </div>
        </div>
    );
};

export default EnvelopeOverlay;