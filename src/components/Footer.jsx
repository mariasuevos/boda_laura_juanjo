import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#3a4030] text-white py-10">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">


                {/* <h2 className="text-4xl md:text-5xl font-serif mb-4">Juanjo & Laura</h2> */}

                <p className="text-stone-300 font-bold font-serif text-lg mb-6">
                    19 de Septiembre de 2026
                </p>
                <p className="text-stone-300 italic font-serif text-lg mb-8">
                    Aquí comienza nuestra historia y queremos que formeis parte de ella
                </p>
                <Heart className="w-6 h-6 mb-4 text-white/80" strokeWidth={1.5} />
            </div>
        </footer>
    );
};

export default Footer;
