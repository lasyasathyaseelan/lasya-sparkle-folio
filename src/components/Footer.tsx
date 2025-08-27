import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Lasya</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Final Year CSE (AI & ML) Student passionate about building innovative solutions 
              that make a positive impact through technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a 
              href="#about" 
              className="text-purple-200 hover:text-white transition-smooth cursor-pointer"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-purple-200 hover:text-white transition-smooth cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="text-purple-200 hover:text-white transition-smooth cursor-pointer"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-purple-200 hover:text-white transition-smooth cursor-pointer"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-purple-200 hover:text-white transition-smooth cursor-pointer"
            >
              Contact
            </a>
          </div>
          
          {/* Divider */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-purple-200 text-sm">
                © {currentYear} Lasya. All rights reserved.
              </p>
              
              {/* Made with Love */}
              <div className="flex items-center gap-2 text-sm text-purple-200">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-300 fill-current" />
                <span>and</span>
                <Code className="h-4 w-4" />
                <span>in Chennai</span>
              </div>
            </div>
          </div>
          
          {/* Back to Top */}
          <div className="pt-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-purple-200 hover:text-white transition-smooth text-sm cursor-pointer"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;