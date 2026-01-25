import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, ExternalLink } from "lucide-react";

const Qualifications = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      year: "2023 - Present",
      status: "In Progress",
      grade: "CGPA: 7.38",
      description: "Comprehensive study of software development, data structures, algorithms, AI/ML, and modern web technologies.",
    },
    {
      icon: GraduationCap,
      degree: "Intermediate",
      field: "Science",
      institution: "Vidya Bhavan Public School, Bareilly",
      year: "2021 - 2022",
      status: "Completed",
      grade: "74%",
      description: "Completed intermediate education with focus on science stream.",
    },
    {
      icon: GraduationCap,
      degree: "Matriculation",
      field: "General",
      institution: "Vidya Bhavan Public School, Bareilly",
      year: "2019 - 2020",
      status: "Completed",
      grade: "90%",
      description: "Completed secondary education with excellent academic performance.",
    },
  ];

  const certifications = [
    {
      icon: Award,
      degree: "Introduction to Modern AI",
      field: "Artificial Intelligence",
      institution: "Cisco",
      year: "2025",
      status: "Certified",
      grade: "Completed",
      description: "Advanced certification in modern AI concepts, machine learning fundamentals, and AI applications.",
      link: "https://drive.google.com/file/d/1IXhi-QHVeFeNh2lrJTzpq3ni9L8zpZ_z/view?usp=drive_link",

    },
    {
      icon: Award,
      degree: "Flutter UI Bootcamp",
      field: "Mobile Development",
      institution: "Udemy",
      year: "2025",
      status: "Certified",
      grade: "Completed",
      description: "Comprehensive training in Flutter framework for building cross-platform mobile applications.",
      link: "https://drive.google.com/file/d/17AdUO0bWPeMhJHZpzcg0Abq4r-I8iNht/view?usp=drive_link",
    },
    {
      icon: Award,
      degree: "Python for Data Science",
      field: "Data Science & Analytics",
      institution: "NPTEL",
      year: "2025",
      status: "Certified",
      grade: "Completed",
      description: "In-depth study of Python libraries for data analysis including Pandas, NumPy, and data visualization tools.",
      link: "https://drive.google.com/file/d/1gjxcSxIoeJkCGOZ1soOdwq0hej6ihmoC/view?usp=drive_link",
    },
    {
      icon: Award,
      degree: "Software Engineering",
      field: "Software Development",
      institution: "Coursera",
      year: "2024",
      status: "Certified",
      grade: "Completed",
      description: "Professional certification covering software development lifecycle, design patterns, and best practices.",
      link: "https://drive.google.com/file/d/1ZfN3j95W6HuIFe-32fPnCe5gO4TO86hv/view?usp=drive_link",
    },
    {
      icon: Award,
      degree: "Responsive Web Design",
      field: "Web Development",
      institution: "FreeCodeCamp",
      year: "2023",
      status: "Certified",
      grade: "Completed",
      description: "Certification in modern responsive web design principles, HTML5, CSS3, and accessibility standards.",
      link: "https://drive.google.com/file/d/1gzbKZ9g_EtyI4aaEPS5neLMCUVvkL01d/view?usp=drive_link",
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

  const QualificationCard = ({ qual }: { qual: any }) => (
    <Card className="glass-card hover-lift">
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
                {qual.link && (
                  <a
                    href={qual.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${qual.degree} Certificate`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
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
  );

  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-prose">

        {/* Certifications Section */}
        <div id="certifications" className="mb-24 scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and technical skills
            </p>
          </div>
          <div className="space-y-6">
            {certifications.map((qual, index) => (
              <QualificationCard key={index} qual={qual} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>
          <div className="space-y-6">
            {education.map((qual, index) => (
              <QualificationCard key={index} qual={qual} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qualifications;