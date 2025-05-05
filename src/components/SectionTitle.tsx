
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
  children, 
  className = '', 
  alignment = 'left' 
}: SectionTitleProps) => {
  return (
    <h2 
      className={cn(
        'section-title opacity-0 animate-fade-in',
        {
          'text-left after:ml-0 after:mr-auto': alignment === 'left',
          'text-center after:mx-auto': alignment === 'center',
          'text-right after:ml-auto after:mr-0': alignment === 'right',
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
