
import React from 'react';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
            Transforming Complexity into Clarity
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-dark-gray">
            We help organizations simplify data, strengthen systems, and achieve measurable growth.
          </p>
          <div className="mt-10">
            <p className="max-w-4xl mx-auto text-base text-gray-600">
              Whether you’re a startup building structure or an established organization seeking performance efficiency, C_S Insight and Solution Firm offers tailored consulting services that drive meaningful results.
            </p>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/contact" variant="primary">
              Book an Appointment
            </Button>
            <Button to="/contact" variant="secondary">
              Make an Enquiry
            </Button>
          </div>
        </div>
      </section>
      
      {/* You can add more sections here like a brief services overview or testimonials */}
    </div>
  );
};

export default HomePage;
