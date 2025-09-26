import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  FileText,
  BookOpen,
  Youtube
} from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "@yourlinkedin",
      url: "#",
      description: "Professional network and career updates",
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "@yourgithub",
      url: "#",
      description: "Code repositories and open source contributions",
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@yourtwitter",
      url: "#",
      description: "Academic thoughts and research insights",
    },
    {
      icon: BookOpen,
      name: "ResearchGate",
      handle: "@yourresearch",
      url: "#",
      description: "Research publications and academic network",
    },
    {
      icon: FileText,
      name: "ORCID",
      handle: "0000-0000-0000-0000",
      url: "#",
      description: "Academic identity and publication record",
    },
    {
      icon: Globe,
      name: "Personal Website",
      handle: "yourwebsite.com",
      url: "#",
      description: "Blog and academic portfolio",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@yourchannel",
      url: "#",
      description: "Educational content and research presentations",
    },
    {
      icon: Mail,
      name: "Email",
      handle: "your.email@university.edu",
      url: "mailto:your.email@university.edu",
      description: "Direct contact for collaborations",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect With Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect across various platforms for collaboration and networking
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <Card key={index} className="glass-card hover-lift group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="social-link group-hover:scale-110">
                    <link.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {link.handle}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always open to discussing research opportunities, academic collaborations, 
                or sharing knowledge in my field of expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:your.email@university.edu"
                  className="social-link"
                  aria-label="Send email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="social-link"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="social-link"
                  aria-label="Twitter profile"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;