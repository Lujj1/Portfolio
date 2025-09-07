import { User, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">About</span> Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-card hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Who I Am</h3>
              <p className="text-muted-foreground">
                Computer and Communications Engineering student at Mansoura University with a GPA of 3.8,
                expected to graduate in 2026.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card hover-lift">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">My Focus</h3>
              <p className="text-muted-foreground">
                Specializing in mobile and web development with expertise in Flutter, React, and modern
                JavaScript frameworks.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card hover-lift">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">What Drives Me</h3>
              <p className="text-muted-foreground">
                Passionate about creating intuitive user experiences and solving complex problems through
                clean, efficient code.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold mb-4 text-center">Professional Summary</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              As a Computer and Communications Engineering student with a passion for mobile and web development,
              I bring strong technical skills combined with excellent communication abilities. I'm a dedicated
              team player with experience in event organization and a proven track record of leadership through
              my role as Vice President of Marketing & Media Coverage at Target Team, Mansoura University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;