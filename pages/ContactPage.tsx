
import React from 'react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-xl text-dark-gray">
            Ready to transform complexity into clarity? We're here to help.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-light-gray p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold text-dark-gray">Book an Appointment</h2>
            <p className="mt-4 text-gray-600">
              Connect directly with our consultants to discuss your specific needs and how we can help you achieve your goals.
            </p>
            <div className="mt-8">
              <Button to="#" variant="primary">Schedule a Meeting</Button>
            </div>
          </div>
          <div className="bg-light-gray p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold text-dark-gray">Make an Enquiry</h2>
            <p className="mt-4 text-gray-600">
              Have a question or need more information about our services? Send us a message, and we'll get back to you promptly.
            </p>
            <div className="mt-8">
               <Button to="#" variant="secondary">Send us a Message</Button>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-primary">C_S Insight and Solution Firm</h3>
          {/* You can add more contact details here like email, phone, address if needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
