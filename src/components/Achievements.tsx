import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, Medal, ExternalLink, Github, Shield, Code, ChevronDown, ChevronUp, ArrowRight, Gavel, Activity, Brain, FileText, BarChart3, FileCheck, GraduationCap, Globe } from "lucide-react";

interface AchievementsProps {
  isFullPage?: boolean;
}

const Achievements = ({ isFullPage = false }: AchievementsProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAllProjects, setShowAllProjects] = useState(isFullPage);

  const projects = [
    {
      icon: Globe,
      title: "AG Portfolio",
      description: "A high-performance personal portfolio showcasing technical skills and projects, built with React and Vite for optimal speed.",
      year: "2026",
      category: "React, Vite, CSS",
      link: "https://ajaygangwar-portfolio.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
      icon: FileText,
      title: "CV Portfolio",
      description: "Premium portfolio with glassmorphism, 3D effects, and integrated PDF previewer for a high-end user experience.",
      year: "2026",
      category: "JavaScript, HTML, CSS",
      link: "https://ajaygangwar945.github.io/CV/",
      imageUrl: "/modern-cv.png"
    },
    {
      icon: Activity,
      title: "MedPath Pro",
      description: "Interactive hospital shortest-path visualizer using Dijkstra's algorithm for optimized healthcare logistics.",
      year: "2026",
      category: "JavaScript, Algorithms, HTML/CSS",
      link: "https://medpath-pro.onrender.com/",
      imageUrl: "/medpath-pro.png"
    },

    {
      icon: Brain,
      title: "Intelligence Explorer",
      description: "Immersive AI learning dashboard featuring 3D visualizations and interactive elements built with Three.js.",
      year: "2026",
      category: "JavaScript, Three.js, HTML/CSS",
      link: "https://intelligence-explorer.vercel.app/",
      imageUrl: "/intelligence-explorer.png"
    },

    {
      icon: Gavel,
      title: "AI Legal Advisor",
      description: "AI-powered legal assistance platform with document analysis and automated Q&A using Gemini AI.",
      year: "2026",
      category: "React, TypeScript, Gemini AI",
      link: "https://ai-legal-advisor-chatbot.vercel.app/",
      imageUrl: "/legal-advisor.png"
    },
    {
      icon: GraduationCap,
      title: "Student Portal",
      description: "Data-driven automation tool generating an interactive searchable student dashboard from Excel spreadsheets using Python.",
      year: "2026",
      category: "Python, JavaScript, HTML/CSS",
      link: "https://student-portal-2023.vercel.app/",
      imageUrl: "/student-portal.png"
    },
    {
      icon: BarChart3,
      title: "Road Accident Dashboard",
      description: "Data science dashboard analyzing road accident trends and severity hotspots using advanced visualization techniques.",
      year: "2026",
      category: "HTML, CSS, Data Science",
      link: "https://road-accident-dashboard.vercel.app/",
      imageUrl: "/road-accident-analysis.png"
    },
    {
      icon: FileCheck,
      title: "Conference Paper Submission Portal",
      description: "Full-lifecycle conference paper management system built with Oracle APEX and Oracle 19c for secure peer review workflows.",
      year: "2026",
      category: "Oracle APIX, SQL, PL/SQL",
      link: "https://oracleapex.com/ords/r/ajaygangwar945/conference-paper-submission-portal/login?session=116165243795646",
      imageUrl: "/conference-portal.png"
    },


    {
      icon: Star,
      title: "Eventfolio",
      description: "Ghibli-inspired interactive portfolio showcasing hackathons, leadership, and technical journeys using pure HTML, CSS, and JavaScript.",
      year: "2026",
      category: "HTML, CSS, JS",
      link: "https://eventfolio.vercel.app/",
      imageUrl: "/event.png"
    },
    {
      icon: Medal,
      title: "Certificates & Docs Portal",
      description: "Interactive portal to organize, search, and showcase certificates & documents with intelligent filtering, dynamic theming, and premium UI.",
      year: "2026",
      category: "JavaScript, HTML, CSS",
      link: "https://certificates-docs-portal.vercel.app/",
      imageUrl: "/pdf.png"
    },
    {
      icon: Code,
      title: "Portfolio Hub",
      description: "A multi-portfolio hub featuring various technology portals with glassmorphic UI, 3D visuals, and interactive data dashboards using Three.js.",
      year: "2026",
      category: "HTML, CSS, JS, Three.js",
      link: "https://ajay-portfolio-hub.vercel.app",
      imageUrl: "/portfolio-hub.png"
    },
    {
      icon: Code,
      title: "Portfolio",
      description: "Personal portfolio built with React and Vite, featuring Gemini AI integration for an interactive chatbot and project idea generator.",
      year: "2025",
      category: "React, Vite, Gemini AI",
      link: "https://ajay-gangwar-portfolio.netlify.app/",
      imageUrl: "/ai-portfolio.png"
    },
    {
      icon: Shield,
      title: "Cyber Warfare Intrusion Detection",
      description: "An interactive, real-time intrusion detection dashboard designed to detect malicious activities and cyber attacks using ML.",
      year: "2025",
      category: "Python, ML, React",
      link: "https://cyber-warfare-intrusion-detection.onrender.com/",
      imageUrl: "/cyber-warfare.png"
    },
    {
      icon: Medal,
      title: "Indian Rainfall Data Analysis",
      description: "Comprehensive Rainfall EDA & Machine Learning project built with Python (Pandas/Scikit-learn) and a premium Three.js web dashboard.",
      year: "2025",
      category: "Python, ML, Three.js",
      link: "https://ajaygangwar945.github.io/Indian-Rainfall-Data-Analysis/",
      imageUrl: "/rainfall-analysis.png"
    },
    {
      icon: Trophy,
      title: "Global Terrorism Analysis",
      description: "Interactive Power BI dashboard analyzing global terrorism trends with KPIs and advanced mapping visuals.",
      year: "2025",
      category: "Power BI, Data Analysis",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNTY4YWQxMGItNGFhMC00ZWQ4LThlZjUtMDY0NWY4OGJkYjdhIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
      imageUrl: "/terrorism-analysis.png"
    },
    {
      icon: Star,
      title: "Ayush FHIR",
      description: "Healthcare interoperability platform integrating traditional Ayush systems with HL7 FHIR standards for secure data exchange.",
      year: "2025",
      category: "React, Healthcare, FHIR",
      link: "https://sih-ayush-fhir.vercel.app/",
      imageUrl: "/ayush-fhir.png"
    },
    {
      icon: Star,
      title: "Ayush Intelligence",
      description: "Architected a React and FastAPI platform with 35% latency reduction and 95% accuracy in medical term mapping",
      year: "2025",
      category: "React, FastAPI, NLP",
      link: "https://icd-mapping.onrender.com/",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      icon: Medal,
      title: "ATS Resume Score",
      description: "Engineered an AI-powered ATS analyzer that reduced resume screening time by 70% with 92% accuracy",
      year: "2025",
      category: "AI, Streamlit, NLP",
      link: "https://ats-resume-score-945.streamlit.app/",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
    },
    {
      icon: Github,
      title: "GitHub Profile Overview",
      description: "A meticulously crafted GitHub profile README serving as a professional landing page, highlighting technical expertise, projects, and educational journey.",
      year: "2025",
      category: "Markdown, GitHub Actions, Portfolio",
      link: "https://ajaygangwar945.github.io/ajaygangwar945/",
      imageUrl: "/github-profile.png"
    },
    {
      icon: Shield,
      title: "SoftHub",
      description: "Node.js & Express backend featuring secure JWT authentication, MongoDB integration, and email-based OTP password reset functionality.",
      year: "2024",
      category: "Node.js, Express, MongoDB",
      link: "https://softhub-bwnd.onrender.com/",
      imageUrl: "/softhub-backend.png"
    },
    {
      icon: Trophy,
      title: "Weather App",
      description: "A React-based weather application that provides real-time weather data using the OpenWeatherMap API, with city search and geolocation support.",
      year: "2024",
      category: "React, OpenWeather API",
      link: "https://weather-forcasting-temperature.netlify.app/",
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
    },
    {
      icon: Award,
      title: "Pet Adoption & Animal Welfare",
      description: "Engineered a responsive web platform with 30% increased user engagement through dynamic galleries",
      year: "2023",
      category: "React, Tailwind CSS",
      link: "https://pet-adoption-animal-welfare.netlify.app/",
      imageUrl: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80"
    },
    {
      icon: Code,
      title: "First HTML Project Overview",
      description: "Front-end learning hub featuring an interactive 3D dashboard, modular content, and responsive UI design built with Three.js.",
      year: "2020",
      category: "HTML, CSS, JS, Three.js",
      link: "https://ajaygangwar945.github.io/First-HTML-Project-Overview/",
      imageUrl: "/front.png"
    },
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
      <div className="container mx-auto px-4">
        {/* Projects Section */}
        <div id="projects" className="mb-24 scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {isFullPage ? "All Projects" : "Featured Projects"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isFullPage
                ? "A comprehensive showcase of my technical work and creative projects"
                : "Innovative solutions and applications I've built"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {(showAllProjects ? projects : projects.slice(0, 9)).map((project, index) => (
              <Card key={index} className="glass-card hover-lift group relative overflow-hidden flex flex-col h-full border-muted/20 animate-fade-in">
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
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium group/link ml-auto"
                        title="View Project"
                      >
                        <span className="hidden sm:inline">View Project</span>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!isFullPage && projects.length > 9 && (
            <div className="mt-12 text-center overflow-hidden">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/projects")}
                className="hover-lift glass-card border-primary/20 hover:border-primary/50 transition-all duration-300 min-w-[200px]"
              >
                <>
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View All Projects
                </>
              </Button>
            </div>
          )}


        </div>

        {/* Achievements Section */}
        {!isFullPage && (
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
        )}
      </div>
    </section>
  );
};

export default Achievements;