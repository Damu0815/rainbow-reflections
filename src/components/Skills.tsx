import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Globe, Server, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript"],
      gradient: "gradient-primary",
      borderColor: "border-primary/20"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      gradient: "gradient-secondary",
      borderColor: "border-secondary/20"
    },
    {
      title: "Backend & Database",
      icon: Server,
      skills: ["PHP", "MySQL", "Node.js", "REST APIs", "Database Design"],
      gradient: "gradient-accent",
      borderColor: "border-accent/20"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Deep Learning", "CNNs", "Autoencoders", "Computer Vision", "Data Analytics"],
      gradient: "gradient-rainbow",
      borderColor: "border-primary/20"
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: ["Git", "AWS", "Docker", "Jupyter", "VS Code", "Figma"],
      gradient: "gradient-primary",
      borderColor: "border-secondary/20"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Responsive Design", "User Experience", "Prototyping", "Wireframing"],
      gradient: "gradient-accent",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur-sm ${category.borderColor} hover:border-opacity-60 transition-smooth hover:scale-105 group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${category.gradient} rounded-lg group-hover:scale-110 transition-bounce`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="hover:scale-105 transition-bounce cursor-default bg-background/50 text-foreground border border-border/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h3>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-lg text-primary">Full Stack Web Development Intern</h4>
                    <p className="text-muted-foreground">8Queens Software Technologies • July 2024 (15 days)</p>
                    <p className="mt-2 text-sm">Gained hands-on experience in front-end and back-end development, successfully completing all internship requirements.</p>
                  </div>
                  <Badge className="gradient-primary text-white">Latest</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-lg text-secondary">Data Analytics Intern</h4>
                    <p className="text-muted-foreground">Allsec Technologies Limited • Jun 25, 2024 - Jul 8, 2024</p>
                    <p className="mt-2 text-sm">Specialized in Data Analytics processes, analyzing data and supporting IT functions in the IT department.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-lg text-accent">Full Stack Web Development Intern</h4>
                    <p className="text-muted-foreground">KGE Technologies Pvt Ltd</p>
                    <p className="mt-2 text-sm">Gained comprehensive experience in both front-end and back-end development technologies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;