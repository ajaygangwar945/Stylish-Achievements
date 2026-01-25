import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "2nd Place - HackTheBlock",
      description: "Achieved 2nd place among 1,000+ participants and won $300 for a high-impact blockchain project",
      year: "2025",
      category: "Hackathon",
    },
    {
      icon: Award,
      title: "2nd Rank - AI in Web Development",
      description: "Secured 2nd rank by developing an AI-driven language learning platform using Python",
      year: "2024",
      category: "Competition",
    },
    {
      icon: Star,
      title: "Ayush Healthcare Platform",
      description: "Architected a React and FastAPI platform with 35% latency reduction and 95% accuracy in medical term mapping",
      year: "2025",
      category: "Project",
    },
    {
      icon: Medal,
      title: "ATS Resume Score",
      description: "Engineered an AI-powered ATS analyzer that reduced resume screening time by 70% with 92% accuracy",
      year: "2025",
      category: "Project",
    },
    {
      icon: Trophy,
      title: "Code Query - Oracle APEX",
      description: "Deployed a centralized portal reducing processing time by 60% for 500+ papers with automated workflows",
      year: "2025",
      category: "Training Project",
    },
    {
      icon: Award,
      title: "Pet Adoption Platform",
      description: "Engineered a responsive web platform with 30% increased user engagement through dynamic galleries",
      year: "2024",
      category: "Project",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card hover-lift group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-accent text-white">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {achievement.year}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <Badge variant="outline" className="text-xs">
                  {achievement.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;