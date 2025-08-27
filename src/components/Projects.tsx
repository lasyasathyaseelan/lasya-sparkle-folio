import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Globe, Coffee, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Coffee Dispenser",
      description: "Smart coffee machine with auto-refill, waste ejection, personalization & intelligent maintenance using AI algorithms.",
      icon: Coffee,
      gradient: "bg-gradient-primary",
      tags: ["AI", "IoT", "Python", "Automation"],
      featured: true,
      company: "Fresh & Honest"
    },
    {
      title: "Pet Adoption Platform",
      description: "Full-stack web application connecting pet lovers with adoption centers, featuring real-time search and matching.",
      icon: Heart,
      gradient: "bg-gradient-secondary",
      tags: ["React", "Node.js", "Database", "API"],
      company: "Code IT Solutions"
    },
    {
      title: "Internship Tracker",
      description: "Comprehensive web application for tracking internship applications, deadlines, and progress with analytics.",
      icon: Globe,
      gradient: "bg-gradient-primary",
      tags: ["HTML", "CSS", "JavaScript", "Flask"]
    },
    {
      title: "Fitness Website",
      description: "Responsive fitness platform with workout plans, progress tracking, and health metrics visualization.",
      icon: Globe,
      gradient: "bg-gradient-secondary",
      tags: ["Frontend", "Responsive", "UI/UX", "Health"]
    },
    {
      title: "Machine Learning Project",
      description: "Comprehensive exploration of supervised and unsupervised learning algorithms with real-world datasets.",
      icon: Brain,
      gradient: "bg-gradient-primary",
      tags: ["ML", "Python", "Data Science", "Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise and creative problem-solving across 
            AI/ML, web development, and innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 ${
                  project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-primary text-white border-0 shadow-glow">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <div className={`absolute inset-0 ${project.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 ${project.gradient} rounded-lg shadow-card`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {project.company && (
                      <Badge variant="secondary" className="text-xs">
                        {project.company}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 transition-smooth"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:shadow-glow transition-smooth border-0"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="hover:bg-primary/5 transition-smooth"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="hover:bg-gradient-primary hover:text-white border-primary/30 transition-smooth"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;