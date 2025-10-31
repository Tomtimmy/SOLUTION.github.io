import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

interface CaseStudyCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ id, title, description, imageUrl }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareButtonRef = useRef<HTMLDivElement>(null);

  const caseStudyUrl = `${window.location.origin}/#/case-studies/${id}`;
  const encodedUrl = encodeURIComponent(caseStudyUrl);
  const encodedTitle = encodeURIComponent(`Check out this case study: ${title}`);

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (shareButtonRef.current && !shareButtonRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsShareOpen(false);
      }
    };

    if (isShareOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isShareOpen]);


  return (
    <article className="bg-light-gray rounded-lg shadow-lg flex flex-col text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      <img src={imageUrl} alt={`Visual representation for ${title}`} className="w-full h-56 object-cover" />
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Button to={`/case-studies/${id}`} variant="secondary">View Project Details</Button>
          
          <div className="relative" ref={shareButtonRef}>
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              aria-haspopup="true"
              aria-expanded={isShareOpen}
              aria-label="Share this case study"
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
            </button>
            {isShareOpen && (
              <div 
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="share-button"
              >
                <div className="py-1" role="none">
                  <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-dark-gray hover:bg-light-gray" role="menuitem">Share on Twitter</a>
                  <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-dark-gray hover:bg-light-gray" role="menuitem">Share on LinkedIn</a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;