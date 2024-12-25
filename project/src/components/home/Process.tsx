import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { ClipboardList, School, FileCheck, Plane } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-blue-600" />,
    title: 'Initial Consultation',
    description: 'Meet with our experts to discuss your goals and preferences'
  },
  {
    icon: <School className="h-10 w-10 text-blue-600" />,
    title: 'University Selection',
    description: 'Choose from our partner universities based on your profile'
  },
  {
    icon: <FileCheck className="h-10 w-10 text-blue-600" />,
    title: 'Application Process',
    description: 'Complete applications with our guidance and support'
  },
  {
    icon: <Plane className="h-10 w-10 text-blue-600" />,
    title: 'Visa & Travel',
    description: 'Get assistance with visa application and travel arrangements'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Process" 
          subtitle="Simple steps to start your international education journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;