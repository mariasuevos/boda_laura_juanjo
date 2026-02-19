import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date("2026-09-19T18:00:00") - +new Date();
        // const difference = 10;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                días: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }
        else {
            timeLeft = {
                días: 0,
                horas: 0,
                minutos: 0,
                segundos: 0,
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
            <div key={interval} className="border border-white/30 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white/5 backdrop-blur-sm">
                <span className="text-4xl md:text-5xl font-serif text-white">
                    {pad(timeLeft[interval])}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70 mt-2">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="py-10 bg-[#6b705c]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Cuenta atrás</h2>
                    <p className="text-xs md:text-sm text-white/80 font-serif uppercase tracking-widest">
                        Para el momento más especial de nuestras vidas
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {timerComponents}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Countdown;
