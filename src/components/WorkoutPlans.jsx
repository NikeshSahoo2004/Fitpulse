import React from 'react';
import { Timer, Zap, Trophy, Users } from 'lucide-react';

const WorkoutPlans = () => {
    const plans = [
        {
            title: "Beginner Strength",
            description: "Build a solid foundation with this comprehensive induction program.",
            icon: <Users className="w-10 h-10 text-[#ADFF2F]" />,
            level: "Beginner",
            duration: "4 Weeks"
        },
        {
            title: "HIIT Shred",
            description: "High intensity interval training to burn fat and boost endurance.",
            icon: <Zap className="w-10 h-10 text-[#ADFF2F]" />,
            level: "Intermediate",
            duration: "6 Weeks"
        },
        {
            title: "Pro Hypertrophy",
            description: "Advanced split designed for maximum muscle growth and definition.",
            icon: <Trophy className="w-10 h-10 text-[#ADFF2F]" />,
            level: "Advanced",
            duration: "12 Weeks"
        },
        {
            title: "Cardio Mastery",
            description: "Improve your cardiovascular health with steady state and intervals.",
            icon: <Timer className="w-10 h-10 text-[#ADFF2F]" />,
            level: "All Levels",
            duration: "8 Weeks"
        }
    ];

    return (
        <section id="workouts" className="py-20 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">World Class <span className="text-[#ADFF2F]">Workouts</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Choose from our scientifically validated workout plans tailored to your specific goals and fitness level.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-[#ADFF2F] transition-all hover:transform hover:-translate-y-2 group">
                            <div className="mb-6 p-4 bg-zinc-900 rounded-full inline-block group-hover:bg-[#ADFF2F]/10 transition-colors">
                                {plan.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>
                            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-4">
                                <span>{plan.level}</span>
                                <span>{plan.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkoutPlans;
