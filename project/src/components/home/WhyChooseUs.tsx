import React from 'react';
import { Award, Users, Globe2, TrendingUp } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const reasons = [
  {
    icon: <Award className="h-12 w-12 text-blue-600" />,
    title: 'Expert Guidance',
    description: 'Our experienced consultants provide personalized advice to help you make informed decisions about your education journey.'
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: 'Student Success',
    description: 'We have helped thousands of students achieve their dreams of studying at top universities worldwide.'
  },
  {
    icon: <Globe2 className="h-12 w-12 text-blue-600" />,
    title: 'Global Network',
    description: 'Strong partnerships with leading universities across multiple countries ensure the best opportunities for our students.'
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
    title: 'High Success Rate',
    description: '95% of our students successfully secure admissions to their preferred universities.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Why Choose Us" 
          subtitle="Discover what makes EduConnect International the preferred choice for international education"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;