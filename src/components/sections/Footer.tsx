
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
