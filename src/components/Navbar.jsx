import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="flex items-center gap-2 text-neon-green font-bold text-xl tracking-tighter text-[#ADFF2F]">
                                <Dumbbell className="h-8 w-8" />
                                FITPULSE
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#home" className="hover:text-[#ADFF2F] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                                <a href="#workouts" className="hover:text-[#ADFF2F] px-3 py-2 rounded-md text-sm font-medium transition-colors">Workouts</a>
                                <a href="#diet" className="hover:text-[#ADFF2F] px-3 py-2 rounded-md text-sm font-medium transition-colors">Diet Plans</a>
                                <a href="#about" className="hover:text-[#ADFF2F] px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-[#ADFF2F] text-black px-4 py-2 rounded-full font-bold hover:bg-[#8ccf1f] transition-colors">
                            Join Now
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-b border-gray-800">
                        <a href="#home" className="hover:text-[#ADFF2F] block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#workouts" className="hover:text-[#ADFF2F] block px-3 py-2 rounded-md text-base font-medium">Workouts</a>
                        <a href="#diet" className="hover:text-[#ADFF2F] block px-3 py-2 rounded-md text-base font-medium">Diet Plans</a>
                        <a href="#about" className="hover:text-[#ADFF2F] block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <button className="w-full text-left mt-2 bg-[#ADFF2F] text-black px-3 py-2 rounded-md font-bold">
                            Join Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
