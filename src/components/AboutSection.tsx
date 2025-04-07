import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  category: 'language' | 'web' | 'devops' | 'database' | 'other';
}

const skills: Skill[] = [
  { name: 'C/C++', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'HTML', category: 'web' },
  { name: 'CSS', category: 'web' },
  { name: 'Node.js', category: 'web' },
  { name: 'React.js', category: 'web' },
  { name: 'Express.js', category: 'web' },
  { name: 'MongoDB', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Linux', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'GitLab', category: 'devops' },
  { name: 'Jenkins', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'Ansible', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'Prometheus', category: 'devops' },
  { name: 'Grafana', category: 'devops' },
  { name: 'Maven', category: 'devops' },
  { name: 'Data Structures', category: 'other' },
  { name: 'Algorithms', category: 'other' },
  { name: 'OOP', category: 'other' },
  { name: 'Operating Systems', category: 'other' }
];

const AboutSection: React.FC = () => {
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

  const getCategoryColor = (category: Skill['category']): string => {
    switch (category) {
      case 'language':
        return 'bg-blue-500 dark:bg-blue-600 text-white';
      case 'web':
        return 'bg-purple-500 dark:bg-purple-600 text-white';
      case 'devops':
        return 'bg-green-500 dark:bg-green-600 text-white';
      case 'database':
        return 'bg-yellow-500 dark:bg-yellow-600 text-white';
      case 'other':
        return 'bg-gray-500 dark:bg-gray-600 text-white';
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center reveal" ref={el => elementsRef.current[0] = el}>
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="reveal reveal-delay-1" ref={el => elementsRef.current[1] = el}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate software developer and DevOps enthusiast currently pursuing my Bachelor's in 
              Computer Science with a focus on AI. I love building scalable applications and am dedicated to 
              continuous learning and improvement.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              With expertise in both backend development and DevOps practices, I bridge the gap between 
              development and operations. I'm particularly interested in automation, containerization, and 
              cloud infrastructure.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm constantly expanding my skills through personal projects, certifications, and competitive 
              programming. My problem-solving abilities have been honed through solving 850+ questions on 
              LeetCode and achieving a 5-star rating on HackerRank.
            </p>
          </div>
          
          {/* Education */}
          <div className="glass p-6 rounded-xl reveal reveal-delay-2" ref={el => elementsRef.current[2] = el}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary/50 pl-4 py-1">
                <h4 className="text-lg font-semibold">
                  Bachelor of Technology in CSE - AI
                </h4>
                <p className="text-foreground/70">Pranveer Singh Institute of Technology</p>
                <div className="flex justify-between mt-1 text-sm text-foreground/60">
                  <span>2022 - 2026</span>
                  <span>CGPA: 8.38</span>
                </div>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="text-lg font-semibold">Intermediate</h4>
                <p className="text-foreground/70">S. P. B. Inter College</p>
                <div className="flex justify-between mt-1 text-sm text-foreground/60">
                  <span>2020 - 2021</span>
                  <span>Percentage: 83%</span>
                </div>
              </div>
              
              <div className="border-l-2 border-primary/20 pl-4 py-1">
                <h4 className="text-lg font-semibold">High School</h4>
                <p className="text-foreground/70">S. P. B. Inter College</p>
                <div className="flex justify-between mt-1 text-sm text-foreground/60">
                  <span>2018 - 2019</span>
                  <span>Percentage: 82.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-16 reveal reveal-delay-3" ref={el => elementsRef.current[3] = el}>
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">My Skills</h3>
          
          <div className="glass p-6 rounded-xl text-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-pill ${getCategoryColor(skill.category)}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
