import React from 'react';
import Button from '../components/Button';
import LazyImage from '../components/LazyImage';
import { imagePaths } from '../data/imagePaths';

const coreValues = [
  {
    name: 'Integrity',
    description: 'We build trust through transparency and consistency.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    name: 'Service',
    description: 'We go beyond expectations to create lasting value.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    name: 'Innovation',
    description: 'We thrive on new ideas that deliver practical solutions.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  },
  {
    name: 'Collaboration',
    description: 'We believe great results come from collective intelligence.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
  {
    name: 'Excellence',
    description: 'We measure success by the difference we make.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
  },
];

const leadershipTeam = [
    {
        name: 'John Doe',
        title: 'Founder & Principal Consultant',
        bio: 'With over 20 years of experience, John founded C_S Insight with a passion for helping organizations navigate complex challenges and achieve sustainable growth through data-driven strategies.',
        imageUrl: imagePaths.aboutTeamJohn,
    },
    {
        name: 'Jane Smith',
        title: 'Head of Strategy & Operations',
        bio: 'Jane is a master of process optimization and strategic planning. She leads our efforts to design and implement frameworks that drive efficiency and align with our clients\' long-term goals.',
        imageUrl: imagePaths.aboutTeamJane,
    },
    {
        name: 'Sam Wilson',
        title: 'Director of Data & Analytics',
        bio: 'Sam leads our analytics team, transforming complex datasets into clear, actionable insights. His expertise in business intelligence empowers our clients to make smarter, more informed decisions.',
        imageUrl: imagePaths.aboutTeamSam,
    }
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePaths.aboutHero}')` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white p-4">
                <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Our Story of Impact</h1>
                <p className="mt-4 text-xl max-w-2xl">Building a legacy of clarity, integrity, and performance.</p>
            </div>
        </div>
      </section>

      {/* Our Story, Mission, and Vision */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">From Vision to Value</h2>
                    <p className="mt-6 text-lg text-text-dark leading-relaxed">
                        Founded with a commitment to clarity, insight, and measurable impact, C_S Insight and Solution Firm partners with businesses, NGOs, and government organizations to transform potential into performance. We believe that the greatest opportunities are often hidden within the greatest complexities.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="bg-light-bg p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                            <p className="mt-2 text-lg text-text-dark">
                                To empower organizations with actionable insight that turns complexity into opportunity.
                            </p>
                        </div>
                        <div className="bg-light-bg p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                            <p className="mt-2 text-lg text-text-dark">
                                To be the preferred consulting partner recognized for clarity, integrity, and impact across Africa and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <LazyImage src={imagePaths.aboutVision} alt="Team collaborating on a strategy" className="rounded-lg shadow-xl w-full h-full min-h-[500px]" imageClassName="object-cover rounded-lg"/>
                </div>
            </div>
        </div>
      </section>

      {/* Meet Our Leadership */}
      <section className="py-16 sm:py-24 bg-light-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Meet Our Leadership</h2>
                  <p className="mt-4 text-lg text-text-dark">The experienced team dedicated to your success.</p>
              </div>
              <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {leadershipTeam.map(leader => (
                      <div key={leader.name} className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <LazyImage src={leader.imageUrl} alt={`Photo of ${leader.name}`} className="w-32 h-32 rounded-full mx-auto mb-5 ring-4 ring-secondary" imageClassName="object-cover rounded-full"/>
                          <h3 className="text-xl font-bold text-text-dark">{leader.name}</h3>
                          <p className="text-md font-semibold text-primary">{leader.title}</p>
                          <p className="mt-3 text-base text-text-dark">{leader.bio}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>


      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">The Principles That Guide Us</h2>
                <p className="mt-4 text-lg text-text-dark">Our core values are the foundation of every partnership and solution we deliver.</p>
            </div>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {coreValues.map((value) => (
                <div key={value.name} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-center items-center mb-4">
                    {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{value.name}</h3>
                    <p className="mt-2 text-base text-text-dark">{value.description}</p>
                </div>
                ))}
            </div>
        </div>
      </section>

       {/* Final CTA Section */}
      <section className="bg-dark-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to Partner with Us?
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  Let our expertise become your advantage. Discover how our approach can drive meaningful results for your organization.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                  <Button to="/services" variant="primary">View Our Services</Button>
                  <Button to="/contact" variant="secondary">Get In Touch</Button>
              </div>
          </div>
      </section>

    </div>
  );
};

export default AboutPage;