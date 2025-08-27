import { Button } from "@/components/ui/button";
import { Download, Code, ExternalLink } from "lucide-react";
import heroImage from "@/assets/lasya-hero.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Lasya
                </span>{" "}
                👩‍💻
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 font-medium">
                Final Year CSE (AI & ML) Student & Web Developer
              </p>
              <p className="text-lg text-purple-200 max-w-2xl">
                Passionate about AI-driven solutions & modern web applications. 
                Building the future with code, creativity, and cutting-edge technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm shadow-glow transition-smooth"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              <Button 
                onClick={scrollToProjects}
                variant="outline" 
                size="lg" 
                className="bg-transparent hover:bg-white/10 text-white border-white/50 hover:border-white transition-smooth"
              >
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="text-sm text-purple-200">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8.1</div>
                <div className="text-sm text-purple-200">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-purple-200">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="Lasya - AI & ML Student and Web Developer" 
                className="relative z-10 w-full h-full object-cover rounded-full shadow-elegant border-4 border-white/30"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;