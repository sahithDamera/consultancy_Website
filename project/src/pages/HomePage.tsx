import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Process from '../components/home/Process';
import Destinations from '../components/Destinations';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Destinations />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;