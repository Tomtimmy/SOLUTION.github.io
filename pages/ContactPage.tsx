
import React, { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import FadeInSection from '../components/FadeInSection';
import { imagePaths } from '../data/imagePaths';

// Placeholder URL for the Google Apps Script Web App
// Follow the instructions in HomePage.tsx to create your own
const CONTACT_FORM_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

const contactSlides = [
  {
    imageUrl: imagePaths.contactHero1,
    title: 'Get In Touch',
    subtitle: 'We’re here to help you navigate your biggest challenges. Let’s connect.',
  },
  {
    imageUrl: imagePaths.contactHero2,
    title: 'Book a Consultation',
    subtitle: 'Schedule a free, no-obligation consultation to discuss your specific needs.',
  },
  {
    imageUrl: imagePaths.contactHero3,
    title: 'Partner with Us',
    subtitle: 'Discover how our tailored solutions can drive measurable results for your organization.',
  },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending message...');

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill out all fields.');
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (CONTACT_FORM_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
        setStatus('Form submission is not configured. (Developer: Please update the script URL)');
        setIsSubmitting(false);
        // Don't clear form to allow user to copy their message
        return;
    }

    const scriptFormData = new FormData();
    for (const key in formData) {
      scriptFormData.append(key, formData[key as keyof typeof formData]);
    }
    scriptFormData.append('timestamp', new Date().toISOString());

    try {
      const response = await fetch(CONTACT_FORM_SCRIPT_URL, {
        method: 'POST',
        body: scriptFormData,
      });

      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setStatus(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="bg-white">
      <HeroCarousel slides={contactSlides} />

      <section className="py-16 sm:py-24 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
                <FadeInSection>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-extrabold text-primary mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-dark">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-dark">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-text-dark">Subject</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-dark">Message</label>
                                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                        {status && <p className="mt-4 text-center text-primary font-semibold">{status}</p>}
                    </div>
                </FadeInSection>
                <FadeInSection delay={200}>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-primary">Contact Information</h2>
                            <p className="mt-3 text-lg text-text-dark">We're available by phone, email, or at our office during business hours.</p>
                        </div>
                         <div className="flex items-start">
                             <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-secondary rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             </div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-bold text-text-dark">Our Office</h3>
                                 <p className="mt-1 text-text-dark">123 Insight Way, Suite 100<br/>New York, NY 10001</p>
                             </div>
                         </div>
                         <div className="flex items-start">
                             <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-secondary rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                             </div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-bold text-text-dark">Email Us</h3>
                                 <p className="mt-1 text-text-dark"><a href="mailto:contact@csinsight.com" className="text-primary hover:underline">contact@csinsight.com</a></p>
                             </div>
                         </div>
                         <div className="flex items-start">
                             <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-secondary rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                             </div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-bold text-text-dark">Call Us</h3>
                                 <p className="mt-1 text-text-dark"><a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a></p>
                             </div>
                         </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
