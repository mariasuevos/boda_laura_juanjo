import React from 'react';
import { motion } from 'framer-motion';
import fotoportada from '../assets/portada.png';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-stone-900 text-white">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${fotoportada})` }}></div>

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 text-xl font-light tracking-[0.2em] uppercase text-stone-200"
                >
                    Nos casamos
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-6 text-6xl md:text-8xl font-serif tracking-tight text-white"
                >
                    Juanjo & Laura
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
