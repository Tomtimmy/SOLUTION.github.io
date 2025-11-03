
import React, { useState, useMemo } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import HeroCarousel from '../components/HeroCarousel';
import { imagePaths } from '../data/imagePaths';

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
    category: 'Strategy & Process Improvement',
    title: 'Streamlining Supply Chain for a Manufacturing Giant',
    description: 'We partnered with a leading manufacturer to redesign their logistics network, resulting in a 30% reduction in operational costs and a 15% improvement in delivery times.',
    challenge: 'The client faced significant logistical inefficiencies, including high transportation costs, delayed shipments, and a lack of visibility into their inventory across multiple warehouses.',
    solution: 'Our team conducted a comprehensive analysis and implemented a centralized logistics platform. We optimized routing algorithms, integrated real-time tracking, and introduced a just-in-time inventory system.',
    outcome: 'Achieved a 30% reduction in operational costs, a 15% improvement in on-time delivery rates, and provided the client with end-to-end visibility of their supply chain.',
    imageUrl: imagePaths.portfolioProject1,
  },
  {
    id: 2,
    category: 'Data Analytics & Business Intelligence',
    title: 'Data-Driven Strategy for a Retail Startup',
    description: 'By implementing a bespoke business intelligence dashboard, we helped a retail startup increase their data reporting accuracy by 50% and identify new market segments.',
    challenge: 'The startup was collecting vast amounts of customer data but lacked the tools and expertise to extract meaningful insights, hindering their ability to make informed marketing and product decisions.',
    solution: 'We developed and deployed a custom business intelligence dashboard that unified data from multiple sources. We also trained their team to analyze customer behavior, sales trends, and campaign performance.',
    outcome: 'The startup increased its data reporting accuracy by 50%, identified three new profitable market segments, and saw a 25% increase in marketing ROI within six months.',
    imageUrl: imagePaths.portfolioProject2,
  },
  {
    id: 3,
    category: 'Project Management',
    title: 'Project Turnaround for a Public Sector Initiative',
    description: 'Our project management expertise helped rescue a critical government project, bringing it back on track and ensuring its successful completion ahead of the revised schedule.',
    challenge: 'A high-profile public sector project was plagued by scope creep, budget overruns, and missed deadlines, leading to a loss of stakeholder confidence.',
    solution: 'Our consultants stepped in to provide robust project management oversight. We re-defined the project scope, established clear communication channels, implemented agile methodologies, and rigorously tracked progress.',
    outcome: 'The project was successfully delivered 10% under the revised budget and two months ahead of the new schedule, restoring stakeholder trust and achieving all its primary objectives.',
    imageUrl: imagePaths.portfolioProject3,
  },
  {
    id: 4,
    category: 'Capacity Development & Training',
    title: 'Boosting Efficiency for a Non-Profit',
    description: 'Through process improvement and capacity development, we enabled a non-profit organization to optimize their resource allocation and increase their programmatic impact.',
    challenge: 'A growing non-profit was struggling with inefficient internal processes and a lack of standardized workflows, which limited their ability to scale their impact effectively.',
    solution: 'We mapped out their existing processes, identified key bottlenecks, and designed streamlined workflows. We also delivered customized coaching sessions to build leadership capacity and foster a culture of continuous improvement.',
    outcome: 'The organization reduced administrative overhead by 20%, improved cross-departmental collaboration, and was able to allocate more resources directly to their programs, increasing their overall impact.',
    imageUrl: imagePaths.portfolioProject4,
  },
  {
    id: 5,
    category: 'Strategy & Process Improvement',
    title: 'Digital Transformation for a Financial Institution',
    description: 'We guided a traditional financial services firm through a complete digital transformation, enhancing customer experience and improving operational agility.',
    challenge: 'The client was facing increased competition from fintech startups and needed to modernize its legacy systems and customer-facing applications to stay relevant.',
    solution: 'Our team developed a phased digital transformation roadmap, starting with a new mobile banking app and a CRM system. We managed the vendor selection process, oversaw development, and led change management initiatives.',
    outcome: 'The firm saw a 40% increase in mobile banking adoption within the first year and a 30% improvement in customer satisfaction scores. The new agile workflows also reduced product development cycles by half.',
    imageUrl: imagePaths.portfolioProject5,
  },
  {
    id: 6,
    category: 'Data Analytics & Business Intelligence',
    title: 'Market Expansion Analysis for an E-commerce Brand',
    description: 'We provided a comprehensive market analysis using predictive analytics to help an e-commerce brand successfully launch in three new international markets.',
    challenge: 'The brand wanted to expand globally but lacked the data to confidently decide which markets offered the best opportunity for success and how to tailor their product offerings.',
    solution: 'Our data analytics team built a predictive model using global market data, social media trends, and competitor analysis. The model identified and ranked potential markets, providing detailed forecasts on customer acquisition cost and potential revenue.',
    outcome: 'The brand successfully launched in the top three recommended markets, exceeding their first-year revenue targets by 20% and achieving a lower-than-expected customer acquisition cost.',
    imageUrl: imagePaths.portfolioProject6,
  },
  {
    id: 7,
    category: 'Capacity Development & Training',
    title: 'Leadership Development Program for a Tech Company',
    description: 'We designed and delivered a leadership development program that improved manager effectiveness and boosted team morale and retention rates.',
    challenge: 'A rapidly growing tech company was promoting talented engineers into management roles without adequate training, leading to high team turnover and decreased productivity.',
    solution: 'We created a bespoke, 6-month leadership program focused on practical skills like communication, conflict resolution, and performance management. The program included workshops, one-on-one coaching, and peer support groups.',
    outcome: 'The company saw a 50% reduction in employee turnover in teams led by program graduates. Post-program surveys showed a 40% increase in manager effectiveness and a significant improvement in overall team morale.',
    imageUrl: imagePaths.portfolioProject7,
  },
];

const portfolioSlides = [
  {
    imageUrl: imagePaths.portfolioHero1,
    title: 'Our Portfolio',
    subtitle: 'Demonstrating our impact through tangible results.',
  },
  {
    imageUrl: imagePaths.portfolioHero2,
    title: '30% Reduction in Operational Costs',
    subtitle: 'See how we streamlined the supply chain for a manufacturing giant.',
    link: '/portfolio/1',
    buttonText: 'View Project'
  },
  {
    imageUrl: imagePaths.portfolioHero3,
    title: '50% Improvement in Data Accuracy',
    subtitle: 'Discover our data-driven strategy for a retail startup.',
    link: '/portfolio/2',
    buttonText: 'View Project'
  }
];

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => 
    ['All', ...new Set(portfolioItems.map(item => item.category))]
  , []);

  const filteredPortfolioItems = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);


  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroCarousel slides={portfolioSlides} />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="achievements-heading">
            <h2 id="achievements-heading" className="sr-only">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
                {achievements.map((item, index) => (
                <div key={index} className="bg-light-bg dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    <div className="flex justify-center items-center mb-4">{item.icon}</div>
                    <p className="text-4xl font-bold text-primary dark:text-white">{item.metric}</p>
                    <p className="mt-2 text-lg text-text-dark dark:text-gray-300">{item.description}</p>
                </div>
                ))}
            </div>
            </section>

            <section aria-labelledby="explore-work-heading">
            <div className="text-center">
              <h2 id="explore-work-heading" className="text-3xl font-bold text-text-dark dark:text-white">Explore Our Work</h2>
              <p className="mt-2 text-lg text-text-dark dark:text-gray-300 max-w-2xl mx-auto">
                Filter by service category to see how we've helped clients tackle their specific challenges.
              </p>
            </div>

            {/* Filtering Buttons */}
            <div className="flex justify-center flex-wrap gap-3 my-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-primary text-white dark:bg-secondary dark:text-primary shadow-md'
                      : 'bg-white text-primary border border-primary hover:bg-light-bg dark:bg-gray-800 dark:text-secondary dark:border-secondary dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPortfolioItems.map((item) => (
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

            <section className="mt-16 sm:mt-24 text-center">
                <h2 className="text-3xl font-bold text-text-dark dark:text-white sm:text-4xl">Our Tailored Approach</h2>
                <p className="mt-4 text-lg text-text-dark dark:text-gray-300 max-w-3xl mx-auto">
                    Our case studies demonstrate how we’ve helped clients achieve remarkable outcomes. Each story showcases our tailored approach — combining insight, innovation, and execution excellence to solve unique challenges and unlock new opportunities.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;