
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import Button from './Button';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Capturar os dados do formulário
    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get('name'),
      company: formData.get('company'),
      role: formData.get('role'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };
    
    // Aqui seria onde você enviaria os dados para um serviço de email
    // No ambiente atual, exibimos apenas um toast de confirmação
    console.log(`Enviando dados para deklima@gmail.com e fabiofioirninues@gmail.com`, formValues);
    
    toast({
      title: "Formulário enviado",
      description: "Entraremos em contato em breve para agendar seu diagnóstico.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-4 opacity-0 animate-fade-in">
      <div className="space-y-2">
        <label htmlFor="name" className="block font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          placeholder="Seu nome completo"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="company" className="block font-medium text-gray-700">Empresa</label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          placeholder="Nome da sua empresa"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="role" className="block font-medium text-gray-700">Cargo</label>
        <input
          type="text"
          id="role"
          name="role"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          placeholder="Seu cargo na empresa"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block font-medium text-gray-700">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          placeholder="seu.email@exemplo.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block font-medium text-gray-700">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          placeholder="(00) 00000-0000"
        />
      </div>
      
      <div className="pt-4">
        <Button type="submit" variant="primary" className="w-full">
          Enviar e Agendar Diagnóstico
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
