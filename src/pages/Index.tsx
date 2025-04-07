
import React, { useEffect } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealScroll);
    revealScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', revealScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <CustomCursor />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
