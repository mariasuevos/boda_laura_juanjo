import React from 'react';
import { Heart, Wine, Church, Martini, Utensils, Music, Bus, PartyPopper } from 'lucide-react';

const TimelineItem = ({ time, title, description, icon: Icon }) => (
    <div className="relative flex items-start pb-16 last:pb-0 group">
        {/* Vertical Line */}
        <div className="absolute left-[28px] top-0 h-full w-px bg-[#dcd6c8] group-last:hidden"></div>

        {/* Icon Circle */}
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#6b705c] shadow-sm shrink-0">
            <Icon className="h-6 w-6 text-[#6b705c]" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="ml-8 pt-1">
            <div className="flex items-center mb-2">
                <span className="inline-block px-3 py-1 bg-[#3a4030] text-white text-xs font-medium rounded-md tracking-wider">
                    {time}
                </span>
            </div>
            <h3 className="text-xl font-serif text-stone-800 mb-1">{title}</h3>
            <p className="text-stone-600 font-light text-sm">{description}</p>
        </div>
    </div>
);


// 18:00 Ceremonia - Catedral - Y comieron perdices

// 20:00 Bienvenida y cóctel -Parador - Abrazos, besos y muchas sonrisas

// 22:00 Cena - Parador - ¡que no os falte de ná!

// 00:00 Barra libre ¡Que empiece la fiesta!

// 5:00 Fin, fin, fin ¡Cada mochuelo a su olivo!

const Timeline = () => {
    const events = [
        {
            time: '18:00',
            title: 'Ceremonia',
            location: 'Catedral de Albacete',
            description: '¡Y comieron perdices!',
            icon: Church
        },
        {
            time: '20:00',
            title: 'Bienvenida y cóctel',
            location: 'Parador de Albacete',
            description: '¡Calentando motores!',
            icon: Heart
        },
        {
            time: '22:00',
            title: 'Cena',
            location: 'Parador de Albacete',
            description: '¡Que no os falte de ná!',
            icon: Utensils
        },
        {
            time: '00:00',
            title: 'Barra libre',
            description: '¡Que empiece la fiesta!',
            icon: PartyPopper
        },
        {
            time: '06:00',
            title: 'Fin, fin, fin',
            description: '¡Cada mochuelo a su olivo!',
            icon: Bus
        }
    ];

    return (
        <section className="py-12 bg-[#f0ebe0]">
            <div className="container mx-auto px-4 max-w-xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Así será nuestro día</h2>
                    <p className="text-stone-500 font-serif italic">Lo que tenemos preparado para vosotros</p>
                </div>

                {/* Timeline */}
                <div className="pl-2 md:pl-0">
                    {events.map((event, index) => (
                        <TimelineItem key={index} {...event} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Timeline;
