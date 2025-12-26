import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
                    alt="Gym Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        SCULPT YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ADFF2F] to-emerald-400">
                            PERFECT BODY
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-lg">
                        Expert coaching, premium equipment, and personalized plans designed to help you crush your fitness goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 bg-[#ADFF2F] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8ccf1f] transition-all transform hover:scale-105">
                            Start Your Journey <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-500 hover:border-[#ADFF2F] hover:text-[#ADFF2F] text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                            View Plans
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
