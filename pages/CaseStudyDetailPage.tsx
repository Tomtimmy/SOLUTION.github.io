
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from './CaseStudiesPage';

const CaseStudyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(s => s.id === Number(id));

  if (!study) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-primary">Case Study Not Found</h1>
        <p className="mt-4 text-lg text-dark-gray">The case study you are looking for does not exist.</p>
        <div className="mt-8">
            <Link to="/case-studies" className="inline-block px-8 py-3 rounded-md font-semibold text-center text-white bg-primary hover:bg-blue-800 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                Back to Case Studies
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link to="/case-studies" className="text-primary font-semibold hover:underline mb-8 inline-block">
          &larr; Back to All Case Studies
        </Link>
        <h1 className="text-4xl font-extrabold text-primary sm:text-5xl leading-tight">{study.title}</h1>
        <div className="mt-12 space-y-10 text-lg text-gray-700 leading-relaxed border-t pt-8">
          <div>
            <h2 className="text-3xl font-bold text-dark-gray mb-4">The Challenge</h2>
            <p>{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark-gray mb-4">Our Solution</h2>
            <p>{study.solution}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark-gray mb-4">The Outcome</h2>
            <p>{study.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
