import React from 'react';
import { Heart, Wine, Church, Martini, Utensils, Music, PartyPopper } from 'lucide-react';

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

const Timeline = () => {
    const events = [
        {
            time: '17:00',
            title: 'Llegada de invitados',
            description: 'Recepción y bienvenida en la finca',
            icon: Heart
        },
        {
            time: '18:00',
            title: 'Ceremonia',
            description: 'El momento más especial del día',
            icon: Church
        },
        {
            time: '19:00',
            title: 'Cóctel',
            description: 'Aperitivos y bebidas en los jardines',
            icon: Martini
        },
        {
            time: '21:00',
            title: 'Banquete',
            description: 'Cena y celebración',
            icon: Utensils
        },
        {
            time: '00:00',
            title: 'Fiesta',
            description: '¡A bailar hasta el amanecer!',
            icon: Music
        },
        {
            time: '03:00',
            title: 'Fin de fiesta',
            description: 'Despedida y buenos recuerdos',
            icon: PartyPopper
        },
    ];

    return (
        <section className="py-12 bg-[#f0ebe0]">
            <div className="container mx-auto px-4 max-w-xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Programa del día</h2>
                    <p className="text-stone-500 font-serif italic">Lo que tenemos preparado para vosotros</p>
                </div>

                {/* Timeline */}
                <div className="pl-2 md:pl-0">
                    {events.map((event, index) => (
                        <TimelineItem key={index} {...event} />
                    ))}
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center opacity-40 mt-20">
                    <div className="h-px w-24 bg-stone-400"></div>
                    <div className="mx-4 text-stone-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L24 12L12 24L0 12L12 0Z" />
                        </svg>
                    </div>
                    <div className="h-px w-24 bg-stone-400"></div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
