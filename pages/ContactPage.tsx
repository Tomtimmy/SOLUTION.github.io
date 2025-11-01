import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Form submitted:', formData);
      setStatusMessage('Thank you for your message! We will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatusMessage(''), 5000);
    } else {
      setStatusMessage('Please fill out all fields before submitting.');
      setTimeout(() => setStatusMessage(''), 3000);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1600x500.png?text=Contact+Us')" }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white p-4">
                <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Get in Touch</h1>
                <p className="mt-4 text-xl max-w-2xl">We're here to help and answer any question you might have.</p>
            </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 sm:py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Information */}
                <div>
                    <h2 className="text-3xl font-bold text-dark-gray sm:text-4xl">Contact Information</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Reach out to us through any of the following channels. We look forward to hearing from you!
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-dark-gray">Our Office</h3>
                                <p className="mt-1 text-gray-600">123 Consulting Avenue, Suite 100</p>
                                <p className="text-gray-600">Innovation City, 54321</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                             <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-dark-gray">Email Us</h3>
                                <p className="mt-1 text-gray-600">contact@csinsight.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-dark-gray">Call Us</h3>
                                <p className="mt-1 text-gray-600">(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-dark-gray">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    {statusMessage && <p className="mt-4 text-center text-sm text-primary">{statusMessage}</p>}
                </div>
            </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
              <h2 className="text-3xl font-bold text-dark-gray text-center mb-8">Find Us on the Map</h2>
              <div>
                  <img src="https://via.placeholder.com/1200x500.png?text=Map+of+Our+Location" alt="Map showing office location" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
              </div>
          </div>
      </section>

    </div>
  );
};

export default ContactPage;
