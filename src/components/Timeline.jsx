import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const TimelineItem = ({ time, title, description, icon: Icon }) => (
    <div className="relative flex items-start pb-12 last:pb-0">
        <div className="absolute left-0 top-0 -ml-[9px] h-full w-px bg-stone-300 last:hidden"></div>
        <div className="absolute left-0 top-2 -ml-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 border border-stone-300">
            <div className="h-2 w-2 rounded-full bg-stone-400"></div>
        </div>
        <div className="ml-8">
            <div className="flex items-center mb-1">
                <span className="font-serif text-xl text-stone-800">{time}</span>
            </div>
            <h3 className="text-lg font-medium text-stone-700 mb-2">{title}</h3>
            <p className="text-stone-600 font-light">{description}</p>
        </div>
    </div>
);

const Timeline = () => {
    const events = [
        {
            time: '18:00',
            title: 'Ceremonia',
            description: 'Catedral de Albacete',
        },
        {
            time: '20:00',
            title: 'Cóctel de Bienvenida',
            description: 'Parador de Albacete',
        },
        {
            time: '22:00',
            title: 'Banquete',
            description: 'Parador de Albacete',
        },
        {
            time: '23:00',
            title: 'Fiesta',
            description: 'Barra libre y baile hasta que el cuerpo aguante',
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">El Gran Día</h2>
                    <p className="text-stone-500 italic">Sábado, 19 de Septiembre de 2026</p>
                </div>

                <div className="pl-4 md:pl-0">
                    {events.map((event, index) => (
                        <TimelineItem key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
