import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: User, label: "Years of Study", value: "2.5+" },
    { icon: Target, label: "Projects Completed", value: "4+" },
    { icon: Heart, label: "Certifications", value: "5+" },
  ];

  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and excellence in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science at Lovely Professional University, I'm passionate about
              creating innovative solutions that bridge technology and real-world problems. My journey has been marked
              by hands-on projects in healthcare technology, AI-powered applications, and full-stack web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in React, Next.js, Python, and modern development frameworks, I've built platforms that
              have won hackathons and solved practical challenges. I believe in continuous learning and applying
              cutting-edge technologies to create meaningful impact.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Full Stack Development</Badge>
              <Badge variant="secondary">React & Next.js</Badge>
              <Badge variant="secondary">Python & AI/ML</Badge>
              <Badge variant="secondary">Problem Solving</Badge>
              <Badge variant="secondary">Leadership</Badge>
            </div>
          </div>

          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="flex items-center p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mr-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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

export default About;