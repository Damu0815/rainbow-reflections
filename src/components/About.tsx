import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging the gap between artificial intelligence and real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated B.Tech student specializing in <span className="text-primary font-semibold">Artificial Intelligence and Data Science</span> at 
              St. Joseph's Institute of Technology, Chennai. With a strong foundation in both theoretical concepts and practical applications, 
              I excel in creating innovative solutions that leverage the power of AI and modern web technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans across <span className="text-secondary font-semibold">Full Stack Development</span>, 
              <span className="text-accent font-semibold"> Machine Learning</span>, and 
              <span className="text-primary font-semibold"> Data Analytics</span>. I've completed multiple internships and 
              have hands-on experience building scalable applications and implementing AI-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Chennai, India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Available for Opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-primary rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      <strong>B.Tech in AI & Data Science</strong><br />
                      St. Joseph's Institute of Technology<br />
                      CGPA: 7.70 (up to 6th semester)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-secondary rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Achievements</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Published Paper in INCOFT-2025</li>
                      <li>• Organized National Level Tech Symposium</li>
                      <li>• Multiple Industry Certifications</li>
                    </ul>
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

export default About;