import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Gift } from 'lucide-react';

const Gifts = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-16 bg-[#f0ebe0]">
            <div className="container mx-auto px-4 max-w-2xl text-center">

                <h2 className="text-4xl md:text-5xl font-serif text-[#3a4030] mb-6">Regalos</h2>

                <p className="text-stone-600 font-serif italic mb-1 leading-relaxed max-w-lg mx-auto">
                    Tres cosas hay en la vida: salud, dinero y amor. Afortunadamente, nos sobran salud y amor.
                </p>
                <p className="text-stone-600 font-serif italic mb-4 leading-relaxed max-w-lg mx-auto">
                    Si queréis ayudarnos en la que nos falta...
                </p>

                <div className="bg-[#e6e2d6] rounded-lg overflow-hidden transition-all duration-300">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-6 hover:bg-[#dcd8cc] transition-colors text-stone-700"
                    >
                        <span className="font-serif text-lg font-medium">Cuenta</span>
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>

                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="p-6 pt-0 text-stone-600 font-serif border-t border-stone-300/50 flex flex-col items-center justify-center text-center">
                            <p className="mb-4 text-xs tracking-widest uppercase text-stone-400 font-sans mt-6">Laura Chinchilla y Juanjo Alarcón</p>
                            <p className="font-mono text-base md:text-xl text-[#3a4030] tracking-wider select-all pb-2">ES61 3190 0076 1761 8950 5123</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gifts;
