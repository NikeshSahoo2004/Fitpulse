import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutPlans from './components/WorkoutPlans';
import DietPlans from './components/DietPlans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ADFF2F] selection:text-black">
      <Navbar />
      <Hero />
      <WorkoutPlans />
      <DietPlans />
      <Footer />
    </div>
  );
}

export default App;
