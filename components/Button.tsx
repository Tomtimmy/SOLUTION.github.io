import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, variant = 'primary', children, className = '' }) => {
  const baseClasses = 'inline-block px-8 py-3 rounded-md font-semibold text-center transition-transform transform hover:scale-105 duration-300 shadow-lg';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;