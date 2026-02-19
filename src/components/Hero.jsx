import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VideoPortada from '../assets/video-portada.mp4';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-stone-900 text-white">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-[35%_center] opacity-60"
            >
                <source src={VideoPortada} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40" />


            <div className="relative z-10 flex h-full flex-col items-center justify-start pt-24 md:pt-28 text-center px-2">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-2 text-xl font-light tracking-[0.2em] uppercase text-stone-200"
                >
                    ¡Nos casamos!
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-6 text-6xl md:text-8xl font-serif tracking-tight text-white flex flex-col items-center gap-2 leading-none"
                >
                    <span>Juanjo</span>
                    <span className="text-4xl md:text-6xl text-[#e6e2d6] font-light italic">&</span>
                    <span>Laura</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-2xl font-light text-stone-100"
                >
                    19 . 09 . 2026
                </motion.p>
            </div>
        </div>
    );
};

export default Hero;
