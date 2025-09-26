import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Dean's List Recognition",
      description: "Consistently maintained high academic performance with GPA above 3.8",
      year: "2023",
      category: "Academic Excellence",
    },
    {
      icon: Award,
      title: "Research Excellence Award",
      description: "Recognized for outstanding contribution to interdisciplinary research project",
      year: "2023",
      category: "Research",
    },
    {
      icon: Star,
      title: "Best Paper Award",
      description: "Received best paper award at International Conference on Academic Research",
      year: "2022",
      category: "Publication",
    },
    {
      icon: Medal,
      title: "Academic Scholarship",
      description: "Merit-based scholarship for academic excellence and leadership potential",
      year: "2022",
      category: "Scholarship",
    },
    {
      icon: Trophy,
      title: "Honor Society Membership",
      description: "Inducted into prestigious academic honor society for outstanding achievements",
      year: "2021",
      category: "Honor",
    },
    {
      icon: Award,
      title: "Student Leadership Award",
      description: "Recognized for exceptional leadership in academic and extracurricular activities",
      year: "2021",
      category: "Leadership",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Academic Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my academic journey
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