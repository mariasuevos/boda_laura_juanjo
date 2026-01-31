import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">

                <Heart className="footer-icon" strokeWidth={1.5} />

                <h2 className="footer-title">Juanjo & Laura</h2>

                <p className="footer-text">
                    19 de Septiembre de 2026
                </p>
            </div>
        </footer>
    );
};

export default Footer;
