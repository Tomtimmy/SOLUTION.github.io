
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { imagePaths } from '../data/imagePaths';
import ThemeToggleButton from './ThemeToggleButton';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const activeLinkClass = 'text-secondary font-semibold';
  const inactiveLinkClass = 'hover:text-primary dark:hover:text-secondary transition-colors duration-300';

  return (
    <header className={`bg-white dark:bg-gray-800 sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg dark:shadow-black/20' : 'shadow-md dark:shadow-black/20'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex-shrink-0">
            <Link to="/" aria-label="C_S Insight Homepage">
              <img 
                src={imagePaths.logo} 
                alt="C_S Insight and Solution Firm Logo" 
                className="h-24 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} text-base`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <ThemeToggleButton />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-dark dark:text-gray-200 hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-primary text-white' : 'text-text-dark dark:text-gray-200 hover:bg-light-bg dark:hover:bg-gray-700'
                  } block px-3 py-2 rounded-md text-base font-medium`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;