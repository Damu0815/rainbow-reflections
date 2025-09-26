import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Damodaran A R. Built with 💜 using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
