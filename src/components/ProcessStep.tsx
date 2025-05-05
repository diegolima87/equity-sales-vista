
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  className = '' 
}: ProcessStepProps) => {
  return (
    <div className={cn('step-card opacity-0 animate-fade-in', className)}>
      <div className="icon-container">
        <span className="text-xl font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
