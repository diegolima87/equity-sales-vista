
import React from 'react';
import { Check } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle>Seja Parte da Equity Sales</SectionTitle>
              <p className="text-lg text-gray-700 mb-8 opacity-0 animate-fade-in animate-delay-100">
                Trabalhar com a Equity Sales é uma oportunidade para quem está pronto para escalar. 
                Entre em contato para um diagnóstico inicial e veja como podemos transformar 
                sua empresa em uma máquina de vendas.
              </p>
              <div className="space-y-4 opacity-0 animate-fade-in animate-delay-200">
                <div className="flex items-start">
                  <div className="mr-4 text-gold">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600">Metodologia testada e comprovada</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-gold">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600">Foco em resultados mensuráveis</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-gold">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600">Parcerias de longo prazo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Fale com um Especialista</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
