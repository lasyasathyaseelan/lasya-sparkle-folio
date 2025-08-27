import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Fresh & Honest",
      role: "AI Developer Intern",
      duration: "2024",
      location: "Chennai, India",
      description: "Developed an innovative AI Coffee Dispenser with smart features including auto-refill, waste management, and personalized user experiences.",
      highlights: ["AI Algorithm Development", "IoT Integration", "Smart Automation", "User Personalization"],
      gradient: "bg-gradient-primary",
      featured: true
    },
    {
      company: "Code IT Solutions",
      role: "Web Technology Intern",
      duration: "2024",
      location: "Chennai, India", 
      description: "Built a comprehensive Pet Adoption Platform connecting animal lovers with adoption centers using modern web technologies.",
      highlights: ["Full Stack Development", "Database Design", "API Integration", "User Experience"],
      gradient: "bg-gradient-secondary"
    },
    {
      company: "HETA Eduversity",
      role: "Frontend Developer",
      duration: "2023-2024",
      location: "Remote",
      description: "Focused on creating responsive and interactive user interfaces for educational platforms with modern design principles.",
      highlights: ["Frontend Development", "Responsive Design", "UI/UX Implementation", "Cross-browser Compatibility"],
      gradient: "bg-gradient-primary"
    },
    {
      company: "MIT Square",
      role: "Web Technology Intern",
      duration: "2023",
      location: "Chennai, India",
      description: "Gained foundational experience in web technologies and contributed to various client projects and internal tools.",
      highlights: ["Web Development", "Client Projects", "Team Collaboration", "Technical Documentation"],
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience across multiple internships, working with cutting-edge technologies 
            and contributing to real-world projects in AI, web development, and innovative solutions.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 ${
                exp.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className={`absolute inset-0 ${exp.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
              
              <div className="relative z-10 grid lg:grid-cols-4 gap-6 p-8">
                {/* Company Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className={`inline-flex p-3 ${exp.gradient} rounded-lg shadow-card`}>
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold text-primary">{exp.role}</p>
                    
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  {exp.featured && (
                    <Badge className="bg-gradient-primary text-white border-0 shadow-glow">
                      Latest Project
                    </Badge>
                  )}
                </div>
                
                {/* Experience Details */}
                <div className="lg:col-span-3 space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3">Key Contributions:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Continuously seeking new challenges and opportunities to grow in AI/ML and web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;