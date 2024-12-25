import React from 'react';
import Button from '../common/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to embark on your global education journey?</h2>
        <p className="text-xl text-blue-100 mb-8">Let's make it happen together!</p>
        <Button variant="secondary">Contact Us</Button>
      </div>
    </section>
  );
};

export default CTASection;