import React from 'react';
import HeroCarousel from '../components/HeroCarousel';

const services = [
  {
    title: 'Project Management Consulting',
    description: 'We provide end-to-end project management support — from planning and execution to monitoring and evaluation — ensuring your projects deliver on time, within scope, and on budget.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'We simplify complex data into clear insights that drive smarter decisions, uncover trends, and highlight new opportunities for growth.',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'We streamline logistics and procurement systems, helping businesses reduce waste, cut costs, and improve reliability.',
  },
  {
    title: 'Strategy & Business Process Improvement',
    description: 'We design agile strategies and process frameworks that align with your business goals and boost efficiency.',
  },
  {
    title: 'Coaching & Capacity Development',
    description: 'Through customized coaching sessions, we build leadership capacity and organizational resilience.',
  },
  {
    title: 'Audit & Feasibility Studies',
    description: 'We assess operational and financial feasibility to guide investment, expansion, and sustainability decisions.',
  },
];

const serviceSlides = [
  {
    imageUrl: 'https://via.placeholder.com/1600x600.png?text=Our+Services',
    title: 'Our Services',
    subtitle: 'Tailored solutions to drive meaningful results.',
  },
  {
    imageUrl: 'https://via.placeholder.com/1600x600.png?text=Project+Management',
    title: 'Project Management Consulting',
    subtitle: 'Ensuring your projects deliver on time, within scope, and on budget.',
  },
  {
    imageUrl: 'https://via.placeholder.com/1600x600.png?text=Data+Analytics',
    title: 'Data Analytics & Business Intelligence',
    subtitle: 'Simplifying complex data into clear insights that drive smarter decisions.',
  }
];


const ServicesPage: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <HeroCarousel slides={serviceSlides} />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Our Service Offerings</h1>
            <p className="mt-4 text-xl text-dark-gray">Comprehensive solutions for your business needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;