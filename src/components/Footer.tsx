import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Lujain Wahid El-Shafey. Made with
            <Heart className="w-4 h-4 text-coral fill-coral" />
            and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;