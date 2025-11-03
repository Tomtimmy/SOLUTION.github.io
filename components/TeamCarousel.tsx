
import React, { useState } from 'react';
import LazyImage from './LazyImage';
import { imagePaths } from '../data/imagePaths';

const teamMembers = [
  {
    name: 'John Doe',
    title: 'Founder & Principal Consultant',
    bio: 'With over 15 years of experience in strategic consulting, John is passionate about helping organizations navigate complex challenges and achieve sustainable growth.',
    imageUrl: imagePaths.aboutTeamJohn,
  },
  {
    name: 'Jane Smith',
    title: 'Lead Data Scientist',
    bio: 'Jane specializes in transforming raw data into actionable insights. Her expertise in predictive analytics has been a game-changer for our clients.',
    imageUrl: imagePaths.aboutTeamJane,
  },
  {
    name: 'Sam Wilson',
    title: 'Senior Project Manager',
    bio: 'Sam ensures that our projects are delivered on time and within budget. His meticulous planning and leadership are key to our success.',
    imageUrl: imagePaths.aboutTeamSam,
  },
];

const TeamCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = teamMembers.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(teamMembers) || teamMembers.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-lg shadow-xl bg-light-bg">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            {index === current && (
              <div className="flex flex-col md:flex-row items-center h-full">
                <div className="md:w-1/3 h-full w-full">
                    <LazyImage 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full"
                        imageClassName="object-cover"
                    />
                </div>
                <div className="md:w-2/3 p-8 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                  <p className="text-lg font-semibold text-secondary mb-2">{member.title}</p>
                  <p className="text-text-dark">{member.bio}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        aria-label="Previous team member"
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next team member"
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
       <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {teamMembers.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)} aria-label={`Go to team member ${index + 1}`} className={`w-3 h-3 rounded-full ${current === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
            ))}
        </div>
    </div>
  );
};

export default TeamCarousel;
