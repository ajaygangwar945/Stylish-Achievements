import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const Qualifications = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      degree: "Master of Science",
      field: "Computer Science",
      institution: "University Name",
      year: "2023",
      status: "Completed",
      grade: "Magna Cum Laude",
      description: "Specialized in artificial intelligence and machine learning with thesis on deep learning applications.",
    },
    {
      icon: GraduationCap,
      degree: "Bachelor of Science",
      field: "Information Technology",
      institution: "University Name",
      year: "2021",
      status: "Completed",
      grade: "Summa Cum Laude",
      description: "Comprehensive study of software development, database systems, and network security.",
    },
    {
      icon: Award,
      degree: "Professional Certificate",
      field: "Data Analytics",
      institution: "Professional Institute",
      year: "2022",
      status: "Certified",
      grade: "Excellence",
      description: "Advanced certification in statistical analysis, data visualization, and predictive modeling.",
    },
    {
      icon: BookOpen,
      degree: "PhD in Progress",
      field: "Artificial Intelligence",
      institution: "Research University",
      year: "2024",
      status: "In Progress",
      grade: "Current GPA: 4.0",
      description: "Research focus on explainable AI and ethical machine learning systems.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success text-white";
      case "In Progress":
        return "bg-primary text-white";
      case "Certified":
        return "bg-accent text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-prose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Qualifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational background and professional certifications
          </p>
        </div>

        <div className="space-y-6">
          {qualifications.map((qual, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white flex-shrink-0">
                      <qual.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold">{qual.degree}</h3>
                        <Badge className={getStatusColor(qual.status)}>
                          {qual.status}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary font-medium">{qual.field}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>🏫 {qual.institution}</span>
                        <span>📅 {qual.year}</span>
                        <span>🏆 {qual.grade}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:flex-1 lg:max-w-md">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {qual.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;