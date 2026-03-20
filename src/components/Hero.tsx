import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import Scene3D from "@/components/Scene3D";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-28 md:pt-0">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center z-10 w-full">
        <div className="text-left space-y-6 animate-fade-in-up mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="gradient-text">Ajay Gangwar</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            Data Science Student & Full Stack Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Passionate about building data-driven applications and AI-powered solutions.
            Skilled in Python, machine learning, and modern full-stack technologies like React and Next.js, with a focus on user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 border-0 shadow-medium w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:ajaygangwar945@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover-lift w-full sm:w-auto"
              onClick={() => window.open('https://ajay-gangwar-portfolio.netlify.app', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="w-full h-[350px] md:h-full min-h-[350px] md:min-h-[400px] flex items-center justify-center relative animate-fade-in order-first md:order-last">
          <Scene3D />
        </div>
      </div>

      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;