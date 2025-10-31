import React from 'react';
import Button from '../components/Button';

const achievements = [
  {
    metric: '30%',
    description: 'Reduction in operational costs for our clients.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
    ),
  },
  {
    metric: '50%',
    description: 'Improvement in data reporting accuracy.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
  },
  {
    metric: 'Faster',
    description: 'Project delivery timelines achieved.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
];

const caseStudies = [
  {
    id: 1,
    title: 'Streamlining Supply Chain for a Manufacturing Giant',
    description: 'We partnered with a leading manufacturer to redesign their logistics network, resulting in a 30% reduction in operational costs and a 15% improvement in delivery times.',
  },
  {
    id: 2,
    title: 'Data-Driven Strategy for a Retail Startup',
    description: 'By implementing a bespoke business intelligence dashboard, we helped a retail startup increase their data reporting accuracy by 50% and identify new market segments.',
  },
  {
    id: 3,
    title: 'Project Turnaround for a Public Sector Initiative',
    description: 'Our project management expertise helped rescue a critical government project, bringing it back on track and ensuring its successful completion ahead of the revised schedule.',
  },
    {
    id: 4,
    title: 'Boosting Efficiency for a Non-Profit',
    description: 'Through process improvement and capacity development, we enabled a non-profit organization to optimize their resource allocation and increase their programmatic impact.',
  },
];

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Success Stories</h1>
          <p className="mt-4 text-xl text-dark-gray">Demonstrating our impact through tangible results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {achievements.map((item, index) => (
            <div key={index} className="bg-light-gray p-8 rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">{item.icon}</div>
              <p className="text-4xl font-bold text-primary">{item.metric}</p>
              <p className="mt-2 text-lg text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-dark-gray mb-12">Explore Our Work</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-light-gray p-8 rounded-lg shadow-lg flex flex-col text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-4">{study.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
                </div>
                <div className="mt-6">
                  <Button to="#" variant="secondary">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-dark-gray">Our Tailored Approach</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our case studies demonstrate how we’ve helped clients achieve remarkable outcomes. Each story showcases our tailored approach — combining insight, innovation, and execution excellence to solve unique challenges and unlock new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
