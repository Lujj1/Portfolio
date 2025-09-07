import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const certificates = [
    {
      title: "Flutter Diploma",
      organization: "Telecom Egypt (WE) Internship",
      icon: "📱",
      description: "Comprehensive training in Flutter mobile development",
    },
    {
      title: "Front-End Development Course",
      organization: "Professional Training",
      icon: "💻",
      description: "HTML, CSS, JavaScript, React, and OOP principles",
    },
    {
      title: "DEPI - Digital Egypt Pioneers Initiative",
      organization: "React Development Track",
      icon: "⚛️",
      description: "Advanced React development training (ongoing)",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background via-turquoise-light/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Education & <span className="bg-gradient-secondary bg-clip-text text-transparent">Certificates</span>
          </h2>

          {/* Main Education */}
          <div className="bg-card rounded-3xl p-8 shadow-card mb-12 hover-lift">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  B.Sc. Computer and Communications Engineering
                </h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Mansoura University</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Expected 2026</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow" />
                  <span className="text-lg font-semibold text-foreground">GPA: 3.8 / 4.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <h3 className="text-2xl font-bold text-center mb-8">Certificates & Training</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 shadow-card hover-lift"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-sm text-primary mb-3">{cert.organization}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;