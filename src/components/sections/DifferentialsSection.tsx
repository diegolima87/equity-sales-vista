
import React from 'react';
import { Clock, File } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const DifferentialsSection = () => {
  return (
    <section id="differentials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Só Ganhamos se Você Crescer</SectionTitle>
        <p className="text-lg text-gray-700 max-w-3xl mb-16 opacity-0 animate-fade-in animate-delay-100">
          A Equity Sales atua com remuneração vinculada ao aumento de vendas gerado. 
          Todas as empresas passam por um diagnóstico rigoroso e processo de seleção para 
          garantir que podemos entregar resultados excepcionais.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-black text-white opacity-0 animate-fade-in animate-delay-200">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                <File className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Diagnóstico completo inicial</h3>
            </div>
            <p className="text-gray-300">
              Análise profunda de todos os aspectos da operação comercial para identificar pontos de melhoria 
              e oportunidades escondidas.
            </p>
          </div>
          
          <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100 opacity-0 animate-fade-in animate-delay-300 transform translate-y-6">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                <File className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Projeto personalizado</h3>
            </div>
            <p className="text-gray-600">
              Criamos soluções sob medida para os desafios específicos da sua empresa, 
              sem abordagens genéricas ou "tamanho único".
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-black text-white opacity-0 animate-fade-in animate-delay-400">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Co-gestão e acompanhamento contínuo</h3>
            </div>
            <p className="text-gray-300">
              Trabalhamos lado a lado com sua equipe, garantindo implementação efetiva e 
              ajustes contínuos para maximizar resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
