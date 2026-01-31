import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#3a4030] text-white py-10">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">

                <Heart className="w-6 h-6 mb-8 text-white/80" strokeWidth={1.5} />

                <h2 className="text-4xl md:text-5xl font-serif mb-4">Juanjo & Laura</h2>

                <p className="text-stone-300 font-serif text-lg mb-16">
                    19 de Septiembre de 2026
                </p>
            </div>
        </footer>
    );
};

export default Footer;
