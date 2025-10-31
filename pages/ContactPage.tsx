import React, { useState } from 'react';
import Button from '../components/Button';

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
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatusMessage('Please fill out all fields.');
            setTimeout(() => setStatusMessage(''), 3000);
            return;
        }

        // In a real app, this is where you'd send the data to a backend.
        // The backend would then handle sending it to Google Sheets.
        // For this demo, we'll save to localStorage.
        console.log('Form data submitted:', formData);

        try {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({ ...formData, submittedAt: new Date().toISOString() });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            
            setStatusMessage('Thank you for your message! We will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Failed to save to localStorage', error);
            setStatusMessage('Sorry, there was an error sending your message. Please try again.');
        } finally {
             setTimeout(() => setStatusMessage(''), 5000);
        }
    };

    return (
        <div className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Get in Touch</h1>
                    <p className="mt-4 text-xl text-dark-gray">
                        Ready to transform complexity into clarity? We're here to help.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    {/* Appointment Section */}
                    <div className="bg-light-gray p-8 rounded-lg text-center shadow-lg">
                        <h2 className="text-2xl font-bold text-dark-gray">Book an Appointment</h2>
                        <p className="mt-4 text-gray-600">
                            Connect directly with our consultants to discuss your specific needs and how we can help you achieve your goals.
                        </p>
                        <div className="mt-8">
                            <Button to="#" variant="primary">Schedule a Meeting</Button>
                        </div>
                    </div>

                    {/* Enquiry Form Section */}
                    <div className="bg-light-gray p-8 rounded-lg shadow-lg">
                         <h2 className="text-2xl font-bold text-dark-gray text-center mb-6">Make an Enquiry</h2>
                         <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                             <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                         </form>
                         {statusMessage && <p className={`mt-4 text-center text-sm ${statusMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;