
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const DiagnosticSection = () => {
  return (
    <section id="diagnostic" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle alignment="center" className="text-white after:bg-gold">
            Descubra o Verdadeiro Potencial da Sua Empresa
          </SectionTitle>
          <p className="text-lg text-gray-300 mb-10 opacity-0 animate-fade-in">
            Através do nosso diagnóstico especializado, sua empresa receberá insights valiosos 
            para potencializar suas vendas e alcançar resultados extraordinários.
          </p>
          <a 
            href="https://diagnostico.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button opacity-0 animate-fade-in animate-delay-200 inline-flex items-center"
          >
            Iniciar Diagnóstico de Vendas <ArrowRight className="ml-2 w-5 h-5 inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
