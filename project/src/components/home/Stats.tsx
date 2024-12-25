import React from 'react';

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '10k+', label: 'Students Placed' },
  { number: '500+', label: 'University Partners' },
  { number: '50+', label: 'Countries' }
];

const Stats = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;