import { Code2, Smartphone, Database, GitBranch, Layers, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Dart", "JavaScript", "TypeScript", "HTML", "CSS"],
      color: "primary",
    },
    {
      title: "Frameworks",
      icon: Smartphone,
      skills: ["Flutter", "React", "React Native"],
      color: "secondary",
    },
    {
      title: "Concepts",
      icon: Cpu,
      skills: ["OOP", "API Integration", "State Management", "Software Engineering Principles"],
      color: "accent",
    },
    {
      title: "Tools & Databases",
      icon: Database,
      skills: ["Firebase", "Git", "GitHub", "VS Code"],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-card rounded-2xl p-6 shadow-card hover-lift"
                >
                  <div className={`w-12 h-12 bg-gradient-${category.color === 'secondary' ? 'secondary' : category.color === 'accent' ? 'secondary' : 'primary'} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-background/50 rounded-full px-3 py-1 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full shadow-soft">
              <Layers className="w-5 h-5" />
              <span className="font-semibold">Always Learning & Growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;