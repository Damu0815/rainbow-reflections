import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie App",
      description: "A responsive movie web application built with React, integrating TMDB API for live movie data. Features clean UI design and smooth user experience with real-time movie information.",
      tech: ["React", "TMDB API", "CSS3", "Responsive Design"],
      gradient: "gradient-primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Enhanced Face Reconstruction System",
      description: "Advanced deep-learning system combining audio-visual data for accurate facial recognition and reconstruction. Leverages CNNs and Autoencoders for forensic and security applications.",
      tech: ["Python", "Deep Learning", "CNNs", "Computer Vision", "TensorFlow"],
      gradient: "gradient-secondary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Street Food Finder",
      description: "Location-based application to discover nearby street food stalls. Built with React and integrated with mapping APIs to provide real-time location data and user-friendly interface.",
      tech: ["React", "APIs", "Geolocation", "JavaScript", "CSS"],
      gradient: "gradient-accent",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-smooth hover:scale-105 group overflow-hidden"
            >
              <div className={`h-2 ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-border/50 hover:border-primary/50 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-primary hover:scale-105 transition-bounce text-white"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-bounce"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

          {/* Additional Projects Section */}
          <div className="mt-16 text-center">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Want to see more?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects and exploring innovative technologies. 
                  Check out my GitHub for the latest updates and contributions.
                </p>
                <Button 
                  size="lg"
                  className="gradient-secondary hover:scale-105 transition-bounce text-white px-8"
                  asChild
                >
                  <a href="https://github.com/damodaran-ar" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View All Projects
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
      </div>
    </section>
  );
};

export default Projects;