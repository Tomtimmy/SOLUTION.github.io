
import React from 'react';
import Button from './Button';

interface CaseStudyCardProps {
  id: number;
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-light-gray p-8 rounded-lg shadow-lg flex flex-col text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-6">
        <Button to={`/case-studies/${id}`} variant="secondary">View Project Details</Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;