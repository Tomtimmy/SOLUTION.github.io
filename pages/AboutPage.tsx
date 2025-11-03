
import React from 'react';
import Button from '../components/Button';
import LazyImage from '../components/LazyImage';
import TeamCarousel from '../components/TeamCarousel';
import FadeInSection from '../components/FadeInSection';
import { imagePaths } from '../data/imagePaths';

const values = [
    {
        title: 'Integrity',
        description: 'We uphold the highest standards of integrity in all of our actions, building relationships based on trust and transparency.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944L12 22l9-1.056v-9.444c0-1.066-.323-2.094-.882-3.016z" /></svg>,
    },
    {
        title: 'Collaboration',
        description: 'We work together, across boundaries, to meet the needs of our clients and to help our firm win.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    },
    {
        title: 'Excellence',
        description: 'We are passionate about delivering the highest quality work, driven by a commitment to continuous improvement and innovation.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.63.63 1.707.63 2.337 0l2.293-2.293m-4.63 16l2.293-2.293c.63-.63 1.707-.63 2.337 0l2.293 2.293M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96">
        <LazyImage src={imagePaths.aboutHero} alt="Our team collaborating in a modern office" className="w-full h-full" imageClassName="object-cover" />
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-3xl">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">About C_S Insight</h1>
              <p className="mt-4 text-xl">We are a dedicated team of consultants committed to helping your business thrive.</p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Our Story</h2>
                    <p className="mt-4 text-lg text-text-dark">
                        Founded in 2015, C_S Insight began with a simple mission: to help organizations make sense of their data and processes. We saw a need for a consulting firm that not only provided expert analysis but also worked as a true partner to implement lasting change. Over the years, we've grown into a multidisciplinary team of strategists, analysts, and project managers, but our core mission remains the same.
                    </p>
                </div>
            </FadeInSection>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
                <div>
                  <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Our Mission & Vision</h2>
                  <p className="mt-4 text-lg text-text-dark leading-relaxed">
                    <strong>Our mission</strong> is to empower organizations with the clarity and tools they need to achieve operational excellence and sustainable growth. We are committed to delivering practical, data-driven solutions that create measurable impact.
                  </p>
                  <p className="mt-4 text-lg text-text-dark leading-relaxed">
                    <strong>Our vision</strong> is to be the most trusted consulting partner for businesses seeking to transform complexity into a competitive advantage.
                  </p>
                </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <LazyImage src={imagePaths.aboutVision} alt="A person looking at a strategic plan on a glass board" className="rounded-lg shadow-xl aspect-[4/3]" imageClassName="rounded-lg" />
            </FadeInSection>
          </div>
        </div>
      </section>

        {/* Our Values Section */}
        <section className="py-16 sm:py-24 bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInSection className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Our Core Values</h2>
                    <p className="mt-4 text-lg text-text-dark">The principles that guide our work and define who we are.</p>
                </FadeInSection>
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {values.map((value, index) => (
                        <FadeInSection key={value.title} delay={index * 150}>
                            <div className="text-center p-6">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-md mx-auto mb-5">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text-dark">{value.title}</h3>
                                <p className="mt-2 text-text-dark">{value.description}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>


      {/* Meet the Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-text-dark">We are a group of passionate experts dedicated to your success.</p>
          </FadeInSection>
           <FadeInSection>
            <TeamCarousel />
          </FadeInSection>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Join Us on the Path to Success
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to see how our expertise can benefit your organization? Let's start a conversation.
            </p>
            <div className="mt-8">
                <Button to="/contact" variant="primary">Work With Us</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
