import React, { useState } from 'react';
import Button from '../components/Button';

const clientLogos = ['Acme Corp', 'Stark Industries', 'Wayne Enterprises', 'Globex Corporation', 'Cyberdyne Systems'];

const testimonials = [
  {
    quote: "C_S Insight transformed our data chaos into a clear, actionable strategy. Their expertise was a game-changer for our operational efficiency.",
    name: 'Jane Doe',
    company: 'CEO, Acme Corp',
  },
  {
    quote: "The project management support we received was exceptional. They kept us on schedule and under budget, delivering results beyond our expectations.",
    name: 'John Smith',
    company: 'Director of Operations, Stark Industries',
  },
  {
    quote: "Their team's ability to streamline our supply chain has had a lasting impact on our bottom line. We couldn't be happier with the partnership.",
    name: 'Emily Jones',
    company: 'Supply Chain Manager, Globex Corporation',
  },
];


const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // In a real application, you would send this data to your backend.
      // A serverless function could then use the Google Sheets API to store the email.
      console.log(`Subscribing email: ${email}`);
      setMessage(`Thank you for subscribing! We've sent a confirmation to ${email}.`);
      setEmail('');
      setTimeout(() => setMessage(''), 5000); // Clear message after 5 seconds
    } else {
      setMessage('Please enter a valid email address.');
      setTimeout(() => setMessage(''), 3000);
    }
  };


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
            Transforming Complexity into Clarity
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-dark-gray">
            We help organizations simplify data, strengthen systems, and achieve measurable growth.
          </p>
          <div className="mt-10">
            <p className="max-w-4xl mx-auto text-base text-gray-600">
              Whether you’re a startup building structure or an established organization seeking performance efficiency, C_S Insight and Solution Firm offers tailored consulting services that drive meaningful results.
            </p>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/contact" variant="primary">
              Book an Appointment
            </Button>
            <Button to="/contact" variant="secondary">
              Make an Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-dark-gray tracking-tight">
            Trusted by Leading Organizations
          </h2>
          <div className="mt-10">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
              {clientLogos.map((logo, index) => (
                <div key={index} className="text-center">
                   <span className="text-2xl font-medium text-gray-500 hover:text-primary transition-colors duration-300">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-dark-gray max-w-2xl mx-auto">
              Real stories from partners who have achieved success with our guidance.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col text-center items-center">
                 <svg className="w-12 h-12 text-secondary mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 22.583c0 2.225-1.5 3.333-3.667 3.333-1.05 0-2.25-.5-3.583-1.667l-2.083 2.5c1.45 1.2 3.083 1.917 4.917 1.917 4.5 0 7.417-2.917 7.417-7.583 0-4.083-2.417-7.75-7.167-11.417C4.25 8.75 3.333 8 3.333 6.167c0-1.333.917-2.083 2.167-2.083 1.25 0 2.167.75 2.167 2.083h5c0-4.417-3.333-7.167-7.167-7.167C1.583 1 0 3.5 0 6.417c0 3.167 2.083 5.417 4.25 7.167 2.417 2 4.083 3.75 4.083 5.917V22.5h1zM29.333 22.583c0 2.225-1.5 3.333-3.667 3.333-1.05 0-2.25-.5-3.583-1.667l-2.083 2.5c1.45 1.2 3.083 1.917 4.917 1.917 4.5 0 7.417-2.917 7.417-7.583 0-4.083-2.417-7.75-7.167-11.417C24.25 8.75 23.333 8 23.333 6.167c0-1.333.917-2.083 2.167-2.083 1.25 0 2.167.75 2.167 2.083h5c0-4.417-3.333-7.167-7.167-7.167C21.583 1 20 3.5 20 6.417c0 3.167 2.083 5.417 4.25 7.167 2.417 2 4.083 3.75 4.083 5.917V22.5h1z" />
                </svg>
                <p className="text-gray-600 italic text-lg flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-bold text-lg text-dark-gray">{testimonial.name}</p>
                  <p className="text-md text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Stay Ahead with Our Insights
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest industry analysis, expert advice, and success stories delivered right to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 sm:flex max-w-md mx-auto">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border border-transparent rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white text-dark-gray"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary">
                  Subscribe
                </button>
              </div>
            </form>
             {message && <p className="mt-4 text-white text-sm">{message}</p>}
        </div>
      </section>
    </div>
  );
};

export default HomePage;