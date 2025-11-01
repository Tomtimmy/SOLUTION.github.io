import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import HeroCarousel from '../components/HeroCarousel';

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

export const portfolioItems = [
  {
    id: 1,
    title: 'Streamlining Supply Chain for a Manufacturing Giant',
    description: 'We partnered with a leading manufacturer to redesign their logistics network, resulting in a 30% reduction in operational costs and a 15% improvement in delivery times.',
    challenge: 'The client faced significant logistical inefficiencies, including high transportation costs, delayed shipments, and a lack of visibility into their inventory across multiple warehouses.',
    solution: 'Our team conducted a comprehensive analysis and implemented a centralized logistics platform. We optimized routing algorithms, integrated real-time tracking, and introduced a just-in-time inventory system.',
    outcome: 'Achieved a 30% reduction in operational costs, a 15% improvement in on-time delivery rates, and provided the client with end-to-end visibility of their supply chain.',
    imageUrl: 'https://via.placeholder.com/800x500.png?text=Supply+Chain+Optimization',
  },
  {
    id: 2,
    title: 'Data-Driven Strategy for a Retail Startup',
    description: 'By implementing a bespoke business intelligence dashboard, we helped a retail startup increase their data reporting accuracy by 50% and identify new market segments.',
    challenge: 'The startup was collecting vast amounts of customer data but lacked the tools and expertise to extract meaningful insights, hindering their ability to make informed marketing and product decisions.',
    solution: 'We developed and deployed a custom business intelligence dashboard that unified data from multiple sources. We also trained their team to analyze customer behavior, sales trends, and campaign performance.',
    outcome: 'The startup increased its data reporting accuracy by 50%, identified three new profitable market segments, and saw a 25% increase in marketing ROI within six months.',
    imageUrl: 'https://via.placeholder.com/800x500.png?text=Data-Driven+Strategy',
  },
  {
    id: 3,
    title: 'Project Turnaround for a Public Sector Initiative',
    description: 'Our project management expertise helped rescue a critical government project, bringing it back on track and ensuring its successful completion ahead of the revised schedule.',
    challenge: 'A high-profile public sector project was plagued by scope creep, budget overruns, and missed deadlines, leading to a loss of stakeholder confidence.',
    solution: 'Our consultants stepped in to provide robust project management oversight. We re-defined the project scope, established clear communication channels, implemented agile methodologies, and rigorously tracked progress.',
    outcome: 'The project was successfully delivered 10% under the revised budget and two months ahead of the new schedule, restoring stakeholder trust and achieving all its primary objectives.',
    imageUrl: 'https://via.placeholder.com/800x500.png?text=Project+Turnaround',
  },
    {
    id: 4,
    title: 'Boosting Efficiency for a Non-Profit',
    description: 'Through process improvement and capacity development, we enabled a non-profit organization to optimize their resource allocation and increase their programmatic impact.',
    challenge: 'A growing non-profit was struggling with inefficient internal processes and a lack of standardized workflows, which limited their ability to scale their impact effectively.',
    solution: 'We mapped out their existing processes, identified key bottlenecks, and designed streamlined workflows. We also delivered customized coaching sessions to build leadership capacity and foster a culture of continuous improvement.',
    outcome: 'The organization reduced administrative overhead by 20%, improved cross-departmental collaboration, and was able to allocate more resources directly to their programs, increasing their overall impact.',
    imageUrl: 'https://via.placeholder.com/800x500.png?text=Non-Profit+Efficiency',
  },
];

const portfolioSlides = [
  {
    imageUrl: 'https://via.placeholder.com/1600x600.png?text=Success+Stories',
    title: 'Our Portfolio',
    subtitle: 'Demonstrating our impact through tangible results.',
  },
  {
    imageUrl: 'https://via.placeholder.com/1600x600.png?text=30%25+Cost+Reduction',
    title: '30% Reduction in Operational Costs',
    subtitle: 'See how we streamlined the supply chain for a manufacturing giant.',
    link: '/portfolio/1',
    buttonText: 'View Project'
  },
  {
    imageUrl: 'https://via.placeholder.com/1600x600.png?text=50%25+Accuracy+Improvement',
    title: '50% Improvement in Data Accuracy',
    subtitle: 'Discover our data-driven strategy for a retail startup.',
    link: '/portfolio/2',
    buttonText: 'View Project'
  }
];

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroCarousel slides={portfolioSlides} />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="achievements-heading">
            <h2 id="achievements-heading" className="sr-only">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
                {achievements.map((item, index) => (
                <div key={index} className="bg-light-gray p-8 rounded-lg shadow-md">
                    <div className="flex justify-center items-center mb-4">{item.icon}</div>
                    <p className="text-4xl font-bold text-primary">{item.metric}</p>
                    <p className="mt-2 text-lg text-gray-700">{item.description}</p>
                </div>
                ))}
            </div>
            </section>

            <section aria-labelledby="explore-work-heading">
            <h2 id="explore-work-heading" className="text-3xl font-bold text-center text-dark-gray mb-12">Explore Our Work</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {portfolioItems.map((item) => (
                <CaseStudyCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
                ))}
            </div>
            </section>

            <section className="mt-20 max-w-4xl mx-auto text-center bg-white p-10 rounded-xl shadow-lg" aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="text-3xl font-bold text-dark-gray">Our Tailored Approach</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our portfolio demonstrates how we’ve helped clients achieve remarkable outcomes. Each story showcases our tailored approach — combining insight, innovation, and execution excellence to solve unique challenges and unlock new opportunities.
            </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;