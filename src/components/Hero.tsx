import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // We'll need to add the resume to public folder
    link.download = 'Damodaran_AR_Resume.pdf';
    link.click();
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full border border-primary/20">
                <span className="text-primary font-medium">AI & Data Science Student</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                  Damodaran
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Full Stack Developer & AI Enthusiast building innovative solutions 
                with <span className="text-accent font-semibold">Machine Learning</span> and{" "}
                <span className="text-secondary font-semibold">Web Technologies</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary hover:scale-105 transition-bounce text-white font-semibold px-8 py-6 text-lg glow-primary"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadResume}
                className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-bounce px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:scale-110 transition-bounce text-foreground hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:scale-110 transition-bounce text-foreground hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:damu41437@gmail.com"
                className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:scale-110 transition-bounce text-foreground hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 gradient-rainbow rounded-full blur-xl opacity-60 animate-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 backdrop-blur-sm animate-float">
                <img 
                  src={profilePhoto} 
                  alt="Damodaran A R - AI & Data Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;