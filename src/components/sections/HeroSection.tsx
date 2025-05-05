
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen pt-24 flex items-center bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in">
            Exclusividade e Alta Performance Comercial
          </h1>
          <p className="text-xl text-white/90 mb-10 opacity-0 animate-fade-in animate-delay-200">
            Transformamos rotinas comerciais em motores de crescimento escalável. 
            Estratégia, disciplina e execução para resultados concretos.
          </p>
          <Button 
            variant="primary"
            className="opacity-0 animate-fade-in animate-delay-300"
            onClick={scrollToContact}
          >
            Quero Falar com um Especialista <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
