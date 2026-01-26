import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal, ExternalLink, Github, Shield, Code } from "lucide-react";

const Achievements = () => {
  const projects = [
    {
      icon: Star,
      title: "Ayush Healthcare Platform",
      description: "Architected a React and FastAPI platform with 35% latency reduction and 95% accuracy in medical term mapping",
      year: "2025",
      category: "Project",
      link: "https://icd-mapping.onrender.com/",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" // Medical/Healthcare placeholder
    },
    {
      icon: Medal,
      title: "ATS Resume Score",
      description: "Engineered an AI-powered ATS analyzer that reduced resume screening time by 70% with 92% accuracy",
      year: "2025",
      category: "Project",
      link: "https://ats-resume-score-945.streamlit.app/",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" // Document/Analysis placeholder
    },
    {
      icon: Trophy,
      title: "Weather App",
      description: "A React-based weather application that provides real-time weather data using the OpenWeatherMap API, with city search and geolocation support.",
      year: "2025",
      category: "Project",
      link: "https://weather-forcasting-temperature.netlify.app/",
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80" // Weather placeholder
    },
    {
      icon: Shield,
      title: "Cyber Warfare Intrusion Detection System",
      description: "An interactive, real-time intrusion detection dashboard designed to detect malicious activities and cyber attacks using ML.",
      year: "2025",
      category: "Cyber Security",
      link: "https://cyber-warfare-intrusion-detection.onrender.com/",
      imageUrl: "/cyber-warfare.png" // Generated image
    },
    {
      icon: Code,
      title: "AI-Powered Portfolio",
      description: "Personal portfolio built with React and Vite, featuring Gemini AI integration for an interactive chatbot and project idea generator.",
      year: "2025",
      category: "Portfolio",
      link: "https://ajay-gangwar-portfolio.netlify.app/",
      imageUrl: "/ai-portfolio.png" // Generated image
    },
    {
      icon: Award,
      title: "Pet Adoption Platform",
      description: "Engineered a responsive web platform with 30% increased user engagement through dynamic galleries",
      year: "2024",
      category: "Project",
      link: "https://pet-adoption-animal-welfare.netlify.app/",
      imageUrl: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80" // Pet/Dog placeholder
    },
    // Example of how to add a GitHub project with auto-generated image:
    // {
    //   icon: Github,
    //   title: "Your GitHub Project",
    //   description: "Description of the project...",
    //   year: "2024",
    //   category: "Open Source",
    //   link: "https://github.com/ajaygangwar945/repository-name",
    //   imageUrl: "https://opengraph.githubassets.com/1/ajaygangwar945/repository-name"
    // },
  ];

  const awards = [
    {
      icon: Trophy,
      title: "2nd Place - HackTheBlock",
      description: "Achieved 2nd place among 1,000+ participants and won $300 for a high-impact blockchain project",
      year: "2025",
      category: "Hackathon",
      link: "#"
    },
    {
      icon: Award,
      title: "2nd Rank - AI in Web Development",
      description: "Secured 2nd rank by developing an AI-driven language learning platform using Python",
      year: "2024",
      category: "Competition",
      link: "#"
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-prose">
        {/* Projects Section */}
        <div id="projects" className="mb-24 scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions and applications I've built
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift group relative overflow-hidden flex flex-col h-full border-muted/20">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center justify-center w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm text-foreground shadow-sm">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="absolute top-4 right-4 z-20 shadow-sm backdrop-blur-md bg-background/50">
                    {project.year}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col pt-0">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium group/link"
                        title="View Project"
                      >
                        View Project <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Achievements & Awards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and milestones in my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="glass-card hover-lift group relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-accent text-white">
                      <award.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {award.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2 group-hover:text-primary transition-colors">
                    {award.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <Badge variant="outline" className="text-xs">
                      {award.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;