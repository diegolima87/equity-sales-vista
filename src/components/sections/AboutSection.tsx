
import React from 'react';
import { Check } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle>Sobre a Equity Sales</SectionTitle>
            <p className="text-lg text-gray-700 mb-6 opacity-0 animate-fade-in animate-delay-100">
              A Equity Sales é uma boutique de advisory comercial que atua com empresas que já 
              possuem times de vendas, mas precisam corrigir oscilações, criar estrutura e 
              escalar com consistência.
            </p>
            <div className="space-y-4 opacity-0 animate-fade-in animate-delay-200">
              <div className="flex items-start">
                <div className="mr-4 text-gold">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Prospecção ativa e disciplinada</h3>
                  <p className="text-gray-600">Desenvolvemos estratégias customizadas para identificar leads qualificados.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-gold">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Conversão com rentabilidade</h3>
                  <p className="text-gray-600">Otimizamos seu funil de vendas para aumentar taxas de conversão com margens saudáveis.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-gold">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Expansão de carteiras</h3>
                  <p className="text-gray-600">Estratégias para maximizar o valor e a retenção dos clientes atuais.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl opacity-0 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipe de vendas em reunião" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
