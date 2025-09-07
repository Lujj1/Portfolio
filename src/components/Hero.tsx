import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--turquoise-light)/0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--coral-light)/0.3),transparent_50%)]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Lujain Wahid
              </span>{" "}
              <span className="text-foreground">El-Shafey</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Computer & Communications Engineering Student
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto slide-up">
            Passionate about mobile and web development with experience in Flutter, React, and modern web technologies.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 slide-up">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+201022172253" className="hover:text-primary transition-colors">
                +20 102 217 2253
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:lujainwahid.div@gmail.com" className="hover:text-primary transition-colors">
                lujainwahid.div@gmail.com
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="gradient" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110">
              <a href="https://github.com/Lujj1" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110">
              <a href="https://linkedin.com/in/lujain-wahid" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110">
              <a href="mailto:lujainwahid.div@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;