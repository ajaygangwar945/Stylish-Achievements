import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative">
      <div className="container-prose text-center space-y-8 section-padding">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Your Name</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Academic Professional & Researcher
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about advancing knowledge through research and academic excellence. 
            Dedicated to making meaningful contributions to the field of study.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 border-0 shadow-medium">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="hover-lift">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;