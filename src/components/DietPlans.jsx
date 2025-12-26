import React from 'react';
import { Apple, Coffee, Utensils } from 'lucide-react';

const DietPlans = () => {
    return (
        <section id="diet" className="py-20 bg-black relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Fuel Your <span className="text-[#ADFF2F]">Growth</span></h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Nutrition is 70% of the battle. Our expert nutritionists have crafted meal plans that taste great and help you hit your macros effortlessly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-900 rounded-lg text-[#ADFF2F]">
                                    <Apple size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Customized Macros</h3>
                                    <p className="text-gray-400 text-sm">Plans tailored to your weight, height, and activity level.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-900 rounded-lg text-[#ADFF2F]">
                                    <Coffee size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Pre & Post Workout</h3>
                                    <p className="text-gray-400 text-sm">Optimal nutrient timing to maximize performance and recovery.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-900 rounded-lg text-[#ADFF2F]">
                                    <Utensils size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Delicious Recipes</h3>
                                    <p className="text-gray-400 text-sm">Healthy food shouldn't taste boring. Thousands of tasty recipes.</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-10 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            View Sample Menu
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
                                alt="Healthy Food"
                                className="w-full h-auto object-cover opacity-80"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                <div className="bg-[#ADFF2F]/20 backdrop-blur-md border border-[#ADFF2F]/30 p-4 rounded-xl inline-block">
                                    <span className="text-[#ADFF2F] font-bold">New! Keto & Vegan Options</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DietPlans;
