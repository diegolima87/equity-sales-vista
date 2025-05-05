
import React from 'react';
import { Calendar, File, Search, User } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import BenefitCard from '@/components/BenefitCard';

const CouncilSection = () => {
  return (
    <section id="council" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle alignment="center">Conselho de Performance Comercial</SectionTitle>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          O Conselho de Performance é um núcleo estratégico formado pela liderança da empresa com 
          apoio da Equity Sales, responsável por transformar a operação comercial em um sistema 
          escalável e previsível.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard 
            icon={<div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center"><File className="w-6 h-6 text-white" /></div>}
            title="Reestruturar rotinas comerciais"
            description="Redesenhamos processos para eliminar ineficiências e maximizar o tempo produtivo da equipe."
            className="animate-delay-100"
          />
          <BenefitCard 
            icon={<div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center"><Search className="w-6 h-6 text-white" /></div>}
            title="Criar ou otimizar canais de venda"
            description="Desenvolvemos estratégias multicanal para maximizar alcance e eficiência na captação de clientes."
            className="animate-delay-200"
          />
          <BenefitCard 
            icon={<div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center"><Calendar className="w-6 h-6 text-white" /></div>}
            title="Definir e acompanhar KPIs"
            description="Estabelecemos métricas relevantes e acompanhamos com rigor para garantir resultados consistentes."
            className="animate-delay-300"
          />
          <BenefitCard 
            icon={<div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>}
            title="Apoiar o desenvolvimento de lideranças"
            description="Capacitamos gestores para liderarem com dados e construírem times de alta performance."
            className="animate-delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default CouncilSection;
