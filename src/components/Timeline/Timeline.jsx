import React from 'react';
import { Heart, Wine, Church, Martini, Utensils, Music, PartyPopper } from 'lucide-react';
import './Timeline.css';

const TimelineItem = ({ time, title, description, icon: Icon }) => (
    <div className="timeline-item group">
        {/* Vertical Line */}
        <div className="timeline-line"></div>

        {/* Icon Circle */}
        <div className="timeline-icon-container">
            <Icon className="timeline-icon" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="timeline-content">
            <div className="timeline-time-container">
                <span className="timeline-time-badge">
                    {time}
                </span>
            </div>
            <h3 className="timeline-item-title">{title}</h3>
            <p className="timeline-item-desc">{description}</p>
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
        <section className="timeline-section">
            <div className="timeline-container">
                {/* Header */}
                <div className="timeline-header">
                    <h2 className="timeline-title">Programa del día</h2>
                    <p className="timeline-subtitle">Lo que tenemos preparado para vosotros</p>
                </div>

                {/* Timeline */}
                <div className="timeline-list">
                    {events.map((event, index) => (
                        <TimelineItem key={index} {...event} />
                    ))}
                </div>

                {/* Decorative Divider */}
                <div className="timeline-divider">
                    <div className="timeline-divider-line"></div>
                    <div className="timeline-divider-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L24 12L12 24L0 12L12 0Z" />
                        </svg>
                    </div>
                    <div className="timeline-divider-line"></div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
