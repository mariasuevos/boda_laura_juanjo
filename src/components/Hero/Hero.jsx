import React from 'react';
import { motion } from 'framer-motion';
import fotoportada from '../../assets/portada.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            {/* Background Image Placeholder */}
            <div className="hero-background" style={{ backgroundImage: `url(${fotoportada})` }}></div>

            <div className="hero-overlay" />

            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-subtitle"
                >
                    Nos casamos
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hero-title"
                >
                    Juanjo & Laura
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-date"
                >
                    19 . 09 . 2026
                </motion.p>
            </div>
        </div>
    );
};

export default Hero;
