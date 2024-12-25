import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const faqs = [
  {
    question: 'What services does StudyBridge Global provide?',
    answer: 'We offer comprehensive support including university admissions counseling, visa assistance, test preparation, and career guidance for international students.'
  },
  {
    question: 'How long does the visa process take?',
    answer: 'Visa processing times vary by country, but typically range from 2-12 weeks. We recommend starting the process at least 3-4 months before your intended travel date.'
  },
  {
    question: 'Do you help with scholarship applications?',
    answer: 'Yes, we assist students in identifying and applying for relevant scholarships at their chosen universities and from external organizations.'
  },
  {
    question: 'Which countries can I study in?',
    answer: 'We have partnerships with universities in the USA, UK, Canada, Australia, and many other countries. Our counselors will help you choose the best destination based on your goals.'
  }
];

const FAQPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about studying abroad"
          />
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;