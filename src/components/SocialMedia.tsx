import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Globe
} from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "@ajaygangwar945",
      url: "https://linkedin.com/in/ajaygangwar945",
      description: "Professional network and career updates",
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "@ajaygangwar945",
      url: "https://github.com/ajaygangwar945",
      description: "Code repositories and open source contributions",
    },
    {
      icon: Globe,
      name: "Portfolio",
      handle: "ajay-gangwar-portfolio.netlify.app",
      url: "https://ajay-gangwar-portfolio.netlify.app",
      description: "Personal portfolio and project showcase",
    },
    {
      icon: Mail,
      name: "Email",
      handle: "ajaygangwar945@gmail.com",
      url: "mailto:ajaygangwar945@gmail.com",
      description: "Direct contact for collaborations",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect With Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect for collaboration, opportunities, and networking
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <Card className="glass-card hover-lift group cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="social-link group-hover:scale-110">
                      <link.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 break-all px-1">
                    {link.handle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ajaygangwar945@gmail.com"
                  className="social-link"
                  aria-label="Send email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/ajaygangwar945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/ajaygangwar945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub profile"
                >
                  <Github className="h-6 w-6" />
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