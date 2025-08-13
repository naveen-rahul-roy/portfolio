import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Naveen Rahul Roy
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Aspiring DevOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about CI/CD pipelines, AWS infrastructure automation, and 
              containerization. Building scalable solutions with modern DevOps practices.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground animate-pulse-glow"
              size="lg"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              size="lg"
              asChild
            >
              <a href="https://drive.google.com/file/d/1SP6A8Pj0j4Dv6x9I9yaVEZWj040EtijK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/naveenrahulroy-projects/Naveen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/naveen-rahul-roy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              href="#contact"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 border border-primary/20 rotate-45 animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;
