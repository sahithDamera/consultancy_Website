import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { BookOpen, Plane, Briefcase, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="h-12 w-12 text-blue-600" />,
    title: 'Admissions Counseling',
    description: 'Get expert guidance through the application process for universities worldwide.',
    cta: 'Book a Free Consultation'
  },
  {
    icon: <Plane className="h-12 w-12 text-blue-600" />,
    title: 'Visa Support',
    description: 'Assistance with visa applications, ensuring compliance with the latest regulations.',
    cta: 'Get Visa Support'
  },
  {
    icon: <Briefcase className="h-12 w-12 text-blue-600" />,
    title: 'Career Counseling',
    description: 'Match your skills and interests to international programs that fit your goals.',
    cta: 'Find Your Path'
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
    title: 'Test Preparation',
    description: 'Ace your standardized tests with tailored support for IELTS, TOEFL, and SAT.',
    cta: 'Start Preparing'
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive support for your international education journey"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="inline-block p-3 bg-white rounded-full mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="primary">{service.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;