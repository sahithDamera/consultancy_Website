import React from 'react';
import { Shield, Users, Globe2, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Integrity',
    description: 'Providing honest and transparent advice to every student.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Support',
    description: 'Being with you every step of the way on your educational journey.'
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-600" />,
    title: 'Diversity',
    description: 'Celebrating and embracing different cultures and perspectives.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: 'Innovation',
    description: 'Continuously improving to meet evolving student needs.'
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;