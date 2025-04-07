
import React, { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: 'Journee - Travel Booking App',
    description: 'MERN stack travel booking application with user authentication, dynamic search, and payment integration. Tested by 250+ users with 20% faster search.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=500&auto=format&fit=crop',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'API Integration'],
    url: 'https://github.com/Aryankesharwani04/Journee'
  },
  {
    title: 'Snapster - Social Media App',
    description: 'Secure, scalable social media backend with real-time notifications using MongoDB and Node.js. Boosted engagement by 60% with 95% user satisfaction.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500&auto=format&fit=crop',
    tags: ['Node.js', 'MongoDB', 'Real-time', 'Authentication', 'Socket.io'],
    url: 'https://github.com/harsh-tripathi02/Snapster'
  },
  {
    title: 'Kubernetes Microservices',
    description: 'Microservices architecture using Kubernetes and Docker with Ingress configuration, autoscaling, and CI/CD pipelines for containerized services.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=500&auto=format&fit=crop',
    tags: ['Kubernetes', 'Docker', 'Microservices', 'CI/CD', 'DevOps'],
    url: 'https://github.com/harsh-tripathi02/K8s-Project-ECOM'
  },
  {
    title: 'Dockerized Flask Application',
    description: 'Python-based web application using Flask with Redis for visitor tracking. Containerized with Docker and orchestrated using Docker Compose.',
    image: 'https://images.unsplash.com/photo-1605745341152-7d6923b07522?q=80&w=500&auto=format&fit=crop',
    tags: ['Docker', 'Flask', 'Redis', 'Python', 'Docker Compose'],
    url: 'https://github.com/harsh-tripathi02/Docker-Python-Project'
  }
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const handleScroll = () => {
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        element.classList.add('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center reveal" ref={el => elementsRef.current[0] = el}>
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card glass rounded-xl overflow-hidden reveal" 
              ref={el => elementsRef.current[index + 1] = el}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-foreground/80 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
