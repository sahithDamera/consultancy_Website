import React from 'react';
import Button from '../common/Button';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Students studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Global Education Connections</h1>
        <p className="text-xl md:text-2xl mb-8">At StudyBridge Global, we bridge the gap between students and their dreams of studying abroad.</p>
        <Button variant="primary">Learn More About Us</Button>
      </div>
    </section>
  );
};

export default AboutHero;