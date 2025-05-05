
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  role: string;
  className?: string;
}

const ImageCard = ({ 
  src, 
  alt, 
  title, 
  role,
  className = '' 
}: ImageCardProps) => {
  return (
    <div className={cn('team-card opacity-0 animate-fade-in', className)}>
      <div className="h-64 overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110" 
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default ImageCard;
