import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import Values from '../components/about/Values';
import History from '../components/about/History';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Team from '../components/about/Team';
import CTASection from '../components/about/CTASection';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <AboutHero />
      <MissionVision />
      <Values />
      <History />
      <WhyChooseUs />
      <Team />
      <CTASection />
    </div>
  );
};

export default AboutPage;