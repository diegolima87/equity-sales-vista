
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProcessStep from '@/components/ProcessStep';

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle alignment="center">Como Funciona</SectionTitle>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          Nossa metodologia é estruturada para garantir resultados consistentes e duradouros,
          com acompanhamento próximo em cada etapa.
        </p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ProcessStep 
            number={1} 
            title="Diagnóstico inicial completo" 
            description="Análise profunda da operação comercial atual para identificar oportunidades"
            className="animate-delay-100"
          />
          <ProcessStep 
            number={2} 
            title="Reuniões regulares" 
            description="Encontros periódicos para alinhamento de estratégias e acompanhamento"
            className="animate-delay-200"
          />
          <ProcessStep 
            number={3} 
            title="Planos de ação" 
            description="Estratégias customizadas para sua realidade e objetivos específicos"
            className="animate-delay-300"
          />
          <ProcessStep 
            number={4} 
            title="Implementação conjunta" 
            description="Execução lado a lado com sua equipe para garantir transferência de conhecimento"
            className="animate-delay-400"
          />
          <ProcessStep 
            number={5} 
            title="Acompanhamento contínuo" 
            description="Monitoramento constante até o alcance das metas estabelecidas"
            className="animate-delay-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
