
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CouncilSection from '@/components/sections/CouncilSection';
import DifferentialsSection from '@/components/sections/DifferentialsSection';
import TeamSection from '@/components/sections/TeamSection';
import ProcessSection from '@/components/sections/ProcessSection';
import DiagnosticSection from '@/components/sections/DiagnosticSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

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
      <HeroSection />
      <AboutSection />
      <CouncilSection />
      <DifferentialsSection />
      <TeamSection />
      <ProcessSection />
      <DiagnosticSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
