import React, { useEffect } from 'react';
import { Check, ArrowRight, Calendar, File, Search, User, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import ProcessStep from '@/components/ProcessStep';
import BenefitCard from '@/components/BenefitCard';
import ImageCard from '@/components/ImageCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  // Intersection Observer for animations when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.opacity-0');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero Falar com um Especialista <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* About Section */}
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
      
      {/* Council Section */}
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
      
      {/* Differentials Section */}
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
      
      {/* Team Section */}
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
              src="/images/fabio-fiorini.jpg" 
              alt="Fábio Fiorini" 
              title="Fábio Fiorini" 
              role="CEO Noby Educação, mentor de 4.500+ empresas"
              className="animate-delay-300"
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
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
      
      {/* Diagnostic Section */}
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
      
      {/* Call to Action */}
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
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold">
                <span className="text-gold">Equity</span> Sales
              </div>
              <p className="text-gray-400 mt-2">Advisory Comercial de Alta Performance</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <a href="#about" className="text-gray-400 hover:text-gold transition-colors">Sobre</a>
              <a href="#council" className="text-gray-400 hover:text-gold transition-colors">Conselho</a>
              <a href="#team" className="text-gray-400 hover:text-gold transition-colors">Quem Somos</a>
              <a href="#process" className="text-gray-400 hover:text-gold transition-colors">Como Funciona</a>
              <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contato</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Equity Sales. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
