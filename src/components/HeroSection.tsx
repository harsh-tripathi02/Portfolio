
import React from 'react';
import TypewriterText from './TypewriterText';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full filter blur-[80px] animate-float" />
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-secondary/20 rounded-full filter blur-[60px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-accent/20 rounded-full filter blur-[70px] animate-spin-slow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Hello, I'm <span className="gradient-text">Harsh Kumar Tripathi</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-foreground/90">
          I'm a{" "}
          <TypewriterText
            phrases={["Backend Engineer", "DevOps Engineer", "Problem Solver"]}
            className="font-bold text-primary"
            typingSpeed={100}
            deletingSpeed={50}
            delayAfterPhrase={2000}
          />
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in">
          Aspiring Software Developer and DevOps enthusiast with expertise in full-stack development, 
          cloud computing, and automation. Passionate about building scalable applications and optimizing deployments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="hover-grow btn-glow px-8 py-3 rounded-full bg-primary text-white font-medium text-lg shadow-lg hover:shadow-primary/50 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="hover-grow px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium text-lg hover:bg-white/20 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
