
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ImageCard from '@/components/ImageCard';

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle alignment="center">Quem Somos</SectionTitle>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          Nossa equipe reúne especialistas renomados em vendas e crescimento empresarial,
          com histórico comprovado de transformação em diversos segmentos.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ImageCard 
            src="https://classic.exame.com/wp-content/uploads/2025/03/joao-kepler.jpg" 
            alt="João Kepler" 
            title="João Kepler" 
            role="Investidor e especialista em crescimento"
            className="animate-delay-100"
          />
          <ImageCard 
            src="https://veja.abril.com.br/wp-content/uploads/2025/04/IMG-20250415-WA0015.jpg" 
            alt="Theo Braga" 
            title="Theo Braga" 
            role="CEO SME, referência em performance de equipes"
            className="animate-delay-200"
          />
          <ImageCard 
            src="/lovable-uploads/0477ee45-36c0-4057-835a-5255d577d14c.png" 
            alt="Fábio Fiorini" 
            title="Fábio Fiorini" 
            role="CEO Noby Educação, mentor de 4.500+ empresas"
            className="animate-delay-300"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
