import { Card } from "@/components/ui/card";
import { MapPin, Mail, Linkedin, Github, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate and dedicated Computer Science student specializing in Artificial Intelligence 
            and Machine Learning. With hands-on experience in web development and AI projects, I'm driven 
            to create innovative solutions that make a meaningful impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-elegant transition-smooth">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">B.E. CSE (AI & ML)</p>
                <p className="text-xs text-muted-foreground">Gojan School of Business</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-elegant transition-smooth">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-secondary rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Chennai, India</p>
                <p className="text-xs text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-elegant transition-smooth">
            <a href="mailto:lasya@example.com" className="flex items-center space-x-4 group">
              <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-smooth">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">Get in touch</p>
                <p className="text-xs text-muted-foreground">Quick response</p>
              </div>
            </a>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-elegant transition-smooth">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-secondary rounded-lg">
                <Github className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Social</h3>
                <div className="flex space-x-2 mt-1">
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
                  <Github className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Skills Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-card-foreground">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Artificial Intelligence", "Machine Learning", "Web Development", 
              "Python", "HTML/CSS", "Flask", "Team Leadership", 
              "Communication", "Problem Solving", "Project Management"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium shadow-card hover:shadow-glow transition-smooth cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;