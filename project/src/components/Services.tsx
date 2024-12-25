import React from 'react';
import { BookOpen, GraduationCap, Building2, FileText } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="h-12 w-12 text-blue-600" />,
    title: 'Course Selection',
    description: 'Expert guidance in choosing the right course and university that aligns with your career goals.'
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
    title: 'University Admissions',
    description: 'Complete assistance with university applications, documentation, and admission procedures.'
  },
  {
    icon: <Building2 className="h-12 w-12 text-blue-600" />,
    title: 'Visa Assistance',
    description: 'Professional support for student visa applications and documentation requirements.'
  },
  {
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    title: 'Test Preparation',
    description: 'Comprehensive preparation for IELTS, TOEFL, and other required entrance exams.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive support for your international education journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;