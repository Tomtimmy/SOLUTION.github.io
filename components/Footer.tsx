
import React from 'react';
import { Link } from 'react-router-dom';
import { imagePaths } from '../data/imagePaths';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg> },
    { name: 'Twitter', href: '#', icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg> },
    { name: 'Instagram', href: '#', icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg> },
    { name: 'LinkedIn', href: '#', icon: <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg> },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-dark-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={imagePaths.footerLogo} alt="C_S Insight Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm">
              Transforming complexity into clarity. We help organizations simplify data, strengthen systems, and achieve measurable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-secondary mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Insight Way, Suite 100</li>
              <li>New York, NY 10001</li>
              <li className="pt-2"><a href="mailto:contact@csinsight.com" className="hover:text-white">contact@csinsight.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} C_S Insight and Solution Firm. All Rights Reserved.
            <Link to="/privacy-policy" className="ml-4 hover:text-white">Privacy Policy</Link>
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
