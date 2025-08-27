import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Computer Science & Engineering (AI & ML)",
      institution: "Gojan School of Business and Technology",
      duration: "2022 - 2025",
      location: "Chennai, India",
      gpa: "8.1",
      status: "Final Year",
      highlights: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Strong foundation in computer science fundamentals",
        "Hands-on experience with modern programming languages",
        "Active participation in technical projects and internships"
      ],
      featured: true
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St Anne's Girls Higher Secondary School",
      duration: "2020 - 2022",
      location: "Chennai, India", 
      percentage: "74%",
      stream: "Science Stream",
      highlights: [
        "Strong performance in Mathematics and Science subjects",
        "Foundation in analytical and problem-solving skills",
        "Active participation in academic activities",
        "Consistent academic progress"
      ]
    }
  ];

  const achievements = [
    "Consistent Academic Performance with 8.1 GPA",
    "Multiple Technical Internship Completions",
    "AI/ML Specialization Projects",
    "Web Development Portfolio",
    "Leadership in Team Projects"
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Education & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in Computer Science, 
            Artificial Intelligence, and Machine Learning.
          </p>
        </div>
        
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 ${
                edu.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-smooth"></div>
              
              <div className="relative z-10 grid lg:grid-cols-4 gap-6 p-8">
                {/* Institution Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="inline-flex p-3 bg-gradient-primary rounded-lg shadow-card">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-smooth">
                      {edu.institution}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    
                    {edu.gpa && (
                      <Badge className="bg-gradient-primary text-white border-0 shadow-glow mt-2">
                        GPA: {edu.gpa}
                      </Badge>
                    )}
                    
                    {edu.percentage && (
                      <Badge className="bg-gradient-secondary text-white border-0 shadow-glow mt-2">
                        {edu.percentage}
                      </Badge>
                    )}
                    
                    {edu.status && (
                      <Badge variant="outline" className="mt-2 border-primary/30">
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Education Details */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground">
                      {edu.degree}
                    </h4>
                    {edu.specialization && (
                      <p className="text-lg font-semibold text-primary mt-1">
                        {edu.specialization}
                      </p>
                    )}
                    {edu.stream && (
                      <p className="text-md font-medium text-muted-foreground mt-1">
                        {edu.stream}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-card-foreground mb-3">Key Highlights:</h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Achievements Section */}
        <Card className="border-0 shadow-card bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-secondary rounded-lg shadow-card">
                <Award className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                Academic Achievements
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:border-primary/20 transition-smooth"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-card-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;