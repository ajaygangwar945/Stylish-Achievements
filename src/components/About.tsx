import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: User, label: "Years of Experience", value: "5+" },
    { icon: Target, label: "Research Projects", value: "15+" },
    { icon: Heart, label: "Publications", value: "8+" },
  ];

  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and excellence in academic pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Academic Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My academic journey has been shaped by a deep passion for learning and research. 
              I believe in the power of knowledge to transform both individual lives and society as a whole.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through rigorous study, collaborative research, and continuous learning, 
              I strive to contribute meaningfully to my field while maintaining the highest standards of academic integrity.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Research</Badge>
              <Badge variant="secondary">Analysis</Badge>
              <Badge variant="secondary">Writing</Badge>
              <Badge variant="secondary">Collaboration</Badge>
              <Badge variant="secondary">Critical Thinking</Badge>
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