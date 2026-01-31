import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date("2026-09-19") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                días: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    // Helper para añadir cero a la izquierda
    const pad = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] === undefined) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="countdown-item">
                <span className="countdown-number">
                    {pad(timeLeft[interval])}
                </span>
                <span className="countdown-label">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="countdown-section">
            <div className="countdown-container">
                <div className="countdown-header">
                    <h2 className="countdown-title">Cuenta atrás</h2>
                    <p className="countdown-subtitle">
                        Para el día más especial de nuestras vidas
                    </p>
                </div>

                <div className="countdown-grid-container">
                    {timerComponents.length ? (
                        <div className="countdown-grid">
                            {timerComponents}
                        </div>
                    ) : (
                        <span className="countdown-finished">¡Es hoy!</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Countdown;
