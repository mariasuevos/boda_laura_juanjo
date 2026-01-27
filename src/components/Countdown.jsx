import React, { useState, useEffect } from 'react';

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

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-4 md:mx-8">
                <span className="text-4xl md:text-6xl font-serif text-stone-800">
                    {timeLeft[interval]}
                </span>
                <span className="text-sm uppercase tracking-widest text-stone-500 mt-2">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center">
                    {timerComponents.length ? timerComponents : <span>¡Es hoy!</span>}
                </div>
            </div>
        </div>
    );
};

export default Countdown;
