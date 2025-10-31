
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} C_S Insight and Solution Firm. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
