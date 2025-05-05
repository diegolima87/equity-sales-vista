
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">
            <img 
              src={isScrolled ? "/images/logo-black.png" : "/images/logo-white.png"} 
              alt="Equity Sales" 
              className="h-8 md:h-10"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            className={cn(
              "hover:text-gold transition-colors", 
              isScrolled ? "text-gray-800" : "text-white"
            )} 
            href="#about" 
            onClick={e => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            Sobre
          </a>
          <a 
            className={cn(
              "hover:text-gold transition-colors", 
              isScrolled ? "text-gray-800" : "text-white"
            )} 
            href="#council" 
            onClick={e => {
              e.preventDefault();
              scrollToSection('council');
            }}
          >
            Conselho
          </a>
          <a 
            className={cn(
              "hover:text-gold transition-colors", 
              isScrolled ? "text-gray-800" : "text-white"
            )} 
            href="#differentials" 
            onClick={e => {
              e.preventDefault();
              scrollToSection('differentials');
            }}
          >
            Diferenciais
          </a>
          <a 
            className={cn(
              "hover:text-gold transition-colors", 
              isScrolled ? "text-gray-800" : "text-white"
            )} 
            href="#team" 
            onClick={e => {
              e.preventDefault();
              scrollToSection('team');
            }}
          >
            Quem Somos
          </a>
          <a 
            className={cn(
              "hover:text-gold transition-colors", 
              isScrolled ? "text-gray-800" : "text-white"
            )} 
            href="#process" 
            onClick={e => {
              e.preventDefault();
              scrollToSection('process');
            }}
          >
            Como Funciona
          </a>
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('contact')} variant="primary">
            Falar com Especialista
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden focus:outline-none", 
            isScrolled ? "text-gray-800" : "text-white"
          )} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <div className="container space-y-4 flex flex-col">
            <a className="text-gray-800 hover:text-gold transition-colors py-2" href="#about" onClick={e => {
              e.preventDefault();
              scrollToSection('about');
            }}>
              Sobre
            </a>
            <a className="text-gray-800 hover:text-gold transition-colors py-2" href="#council" onClick={e => {
              e.preventDefault();
              scrollToSection('council');
            }}>
              Conselho
            </a>
            <a className="text-gray-800 hover:text-gold transition-colors py-2" href="#differentials" onClick={e => {
              e.preventDefault();
              scrollToSection('differentials');
            }}>
              Diferenciais
            </a>
            <a className="text-gray-800 hover:text-gold transition-colors py-2" href="#team" onClick={e => {
              e.preventDefault();
              scrollToSection('team');
            }}>
              Quem Somos
            </a>
            <a className="text-gray-800 hover:text-gold transition-colors py-2" href="#process" onClick={e => {
              e.preventDefault();
              scrollToSection('process');
            }}>
              Como Funciona
            </a>
            <Button onClick={() => scrollToSection('contact')} variant="primary">
              Falar com Especialista
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
