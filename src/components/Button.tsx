
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  onClick 
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        variant === 'primary' ? 'cta-button' : 'secondary-button',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
