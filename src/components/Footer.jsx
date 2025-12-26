import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Dumbbell } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="flex items-center gap-2 text-[#ADFF2F] font-bold text-xl tracking-tighter mb-4">
                            <Dumbbell className="h-6 w-6" />
                            FITPULSE
                        </span>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Empowering you to reach your fitness goals with world-class facilities and expert guidance. Join the movement today.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Programs</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Strength Training</a></li>
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Cardio & HIT</a></li>
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Yoga & Flex</a></li>
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Weight Loss</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#ADFF2F] transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-[#ADFF2F] transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-[#ADFF2F] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-[#ADFF2F] transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-[#ADFF2F] transition-colors"><Youtube size={20} /></a>
                        </div>
                        <div className="mt-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-zinc-900 border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ADFF2F]"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} FitPulse Gym. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
