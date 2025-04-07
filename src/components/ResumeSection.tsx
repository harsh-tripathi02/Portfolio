
import React, { useEffect, useRef } from 'react';

const ResumeSection: React.FC = () => {
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

  const resumeData = {
    projects: [
      {
        title: "Journee - A Travel Booking App",
        url: "https://github.com/Aryankesharwani04/Journee",
        description: [
          "Developed a travel booking application using the MERN stack (MongoDB, Express.js, React.js, Node.js), tested by 250+ users.",
          "Implemented user authentication, dynamic search, and filtering features, improving search response time by 20%.",
          "Integrated payment gateways for seamless transactions."
        ]
      },
      {
        title: "Snapster - A Social Media App",
        url: "https://github.com/harsh-tripathi02/Snapster",
        description: [
          "Built a secure, scalable backend with real-time notification capabilities using MongoDB and Node.js, increasing engagement by 60%.",
          "Developed authentication and security features, achieving a 95% user satisfaction rate.",
          "Implemented real-time notifications, boosting user interactions (likes, comments, shares) by 60%."
        ]
      },
      {
        title: "Kubernetes-Based Microservices Application",
        url: "https://github.com/harsh-tripathi02/K8s-Project-ECOM",
        description: [
          "Designed and deployed a microservices architecture using Kubernetes and Docker.",
          "Configured Ingress and ClusterIP Services for seamless traffic routing and internal communication.",
          "Implemented autoscaling and replicas for high availability and scalability.",
          "Built RESTful APIs and automated CI/CD pipelines for containerized services."
        ]
      },
      {
        title: "Dockerized Flask Application with Redis for Visitor Tracking",
        url: "https://github.com/harsh-tripathi02/Docker-Python-Project",
        description: [
          "Developed a Python-based web application using Flask to track visitor counts dynamically.",
          "Containerized the application using Docker and orchestrated services with Docker Compose.",
          "Integrated Redis as a lightweight, in-memory database for real-time visitor tracking."
        ]
      }
    ],
    certifications: [
      {
        title: "Introduction to Programming in C by NPTEL",
        url: "https://drive.google.com/file/d/1hAaE4xSHDZu8O-z1vDql4EzvDfwMdAmN/view?usp=drive_link"
      },
      {
        title: "Docker Certification by Programming Hub",
        url: "https://drive.google.com/file/d/16YUTxQgflPsY0bOOiqHZxZGzE1xqAaqH/view?usp=drive_link"
      },
      {
        title: "JavaScript Certification by Scaler",
        url: "https://drive.google.com/file/d/16UZLAMdYXGv2-ne-JOcSH76W1mRc0JkP/view?usp=drive_link"
      },
      {
        title: "Node.js Certification by Scaler",
        url: "https://drive.google.com/file/d/1i9tOAK5HGp1KbozpwKoL7_x2Ds48tgpt/view?usp=drive_link"
      },
      {
        title: "SQL Certification by Scaler",
        url: "https://drive.google.com/file/d/1EAejxAgDO9Bts8xmoh2g2UDqHXMYLoRq/view?usp=drive_link"
      }
    ],
    achievements: [
      "Secured 743rd rank in TCS CodeVita Round 1.",
      "Solved 850+ questions on LeetCode",
      "5-star in problem-solving on HackerRank",
      "Solved 200+ questions on GeeksForGeeks"
    ]
  };

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden bg-muted/30"
    >
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center reveal" ref={el => elementsRef.current[0] = el}>
          My <span className="gradient-text">Resume</span>
        </h2>

        {/* Projects */}
        <div className="mb-16 reveal reveal-delay-1" ref={el => elementsRef.current[1] = el}>
          <h3 className="text-2xl font-bold mb-6 inline-block glass px-4 py-2 rounded-lg text-primary">
            Projects
          </h3>
          
          <div className="space-y-8">
            {resumeData.projects.map((project, i) => (
              <div key={i} className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-semibold mb-3">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover-grow inline-block"
                  >
                    {project.title}
                  </a>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  {project.description.map((desc, j) => (
                    <li key={j} className="pl-2">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications and Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="reveal reveal-delay-2" ref={el => elementsRef.current[2] = el}>
            <h3 className="text-2xl font-bold mb-6 inline-block glass px-4 py-2 rounded-lg text-primary">
              Certifications
            </h3>
            
            <div className="glass rounded-xl p-6">
              <ul className="space-y-4">
                {resumeData.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0 mr-3" />
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-primary transition-colors"
                    >
                      {cert.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="reveal reveal-delay-3" ref={el => elementsRef.current[3] = el}>
            <h3 className="text-2xl font-bold mb-6 inline-block glass px-4 py-2 rounded-lg text-primary">
              Achievements
            </h3>
            
            <div className="glass rounded-xl p-6">
              <ul className="space-y-4">
                {resumeData.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0 mr-3" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="mt-16 text-center reveal reveal-delay-3" ref={el => elementsRef.current[4] = el}>
          <a 
            href="#contact" 
            className="hover-grow btn-glow inline-block px-8 py-3 rounded-full bg-primary text-white font-medium text-lg shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
