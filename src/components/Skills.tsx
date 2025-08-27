import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Brain, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "Python", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Flask", level: 80 },
        { name: "AI/ML Tools", level: 85 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "bg-gradient-secondary",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "AI Algorithms", level: 75 },
        { name: "Deep Learning", level: 70 },
        { name: "Computer Vision", level: 65 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Time Management", level: 88 },
        { name: "Adaptability", level: 92 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Lightbulb,
      gradient: "bg-gradient-secondary",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git/GitHub", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Excel", level: 85 },
        { name: "PowerPoint", level: 90 },
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning technical expertise, AI/ML knowledge, 
            and essential soft skills for collaborative development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500"
              >
                <div className={`absolute inset-0 ${category.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 ${category.gradient} rounded-lg shadow-card`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-card-foreground">
            Additional Technologies & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "React", "Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS",
              "TensorFlow", "PyTorch", "Jupyter", "Pandas", "NumPy", "Scikit-learn",
              "Figma", "Adobe Creative Suite", "Agile Methodology", "DevOps",
              "REST APIs", "GraphQL", "Microservices", "Cloud Computing"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-card-foreground border border-primary/20 hover:border-primary/40 hover:shadow-card transition-smooth cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;