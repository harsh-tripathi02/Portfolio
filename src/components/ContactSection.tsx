import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const serviceId = "service_xujmrfg";
  const templateId = "template_pur5148";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Disable button and show spinner
    setIsSending(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      setIsSending(false);
      return;
    }

    // Send email
    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name, // Use "name" instead of "fullname"
          email: formData.email,
          message: formData.message,
        },
        'ui5xvLF67WEK0wUiL' // Replace with your EmailJS user ID
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        alert(`Error sending message: ${error.text}`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden bg-muted/30"
    >
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center reveal" ref={el => elementsRef.current[0] = el}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="reveal reveal-delay-1" ref={el => elementsRef.current[1] = el}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                Feel free to reach out to me for any questions, collaboration opportunities, 
                or just to say hello. I'll get back to you as soon as possible!
              </p>
              
              <div className="glass p-6 rounded-xl space-y-4">
                <a 
                  href="mailto:tripathiiharsh02@gmail.com" 
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors hover-grow"
                >
                  <Mail className="w-5 h-5" />
                  <span>tripathiiharsh02@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+919305516589" 
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors hover-grow"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 9305516589</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/harsh-tripathi02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors hover-grow"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/harsh-tripathi02</span>
                </a>
                
                <a 
                  href="https://github.com/harsh-tripathi02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors hover-grow"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/harsh-tripathi02</span>
                </a>
              </div>
              
              <div className="mt-8">
                <p className="font-medium text-lg mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/harsh-tripathi02" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover-grow"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/harsh-tripathi02" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover-grow"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:tripathiiharsh02@gmail.com" 
                    className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover-grow"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal reveal-delay-2" ref={el => elementsRef.current[2] = el}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="glass p-6 rounded-xl">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-md bg-primary text-white font-medium 
                    hover:bg-primary/90 transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
