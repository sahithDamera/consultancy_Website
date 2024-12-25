import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600">
              To simplify and empower students' journeys toward global education by providing expert guidance, personalized support, and unparalleled access to opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600">
              A world where every student can access international education opportunities without barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;