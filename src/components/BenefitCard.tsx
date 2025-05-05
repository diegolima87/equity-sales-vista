
import React from 'react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard = ({ 
  icon, 
  title, 
  description, 
  className = '' 
}: BenefitCardProps) => {
  return (
    <div className={cn('benefit-card opacity-0 animate-fade-in', className)}>
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
