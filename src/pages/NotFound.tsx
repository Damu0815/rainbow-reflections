import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        <div className="space-y-4">
          <h1 className="text-8xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="gradient-primary hover:scale-105 transition-bounce text-white font-semibold"
          >
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </a>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-bounce"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
