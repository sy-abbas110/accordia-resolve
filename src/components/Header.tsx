import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-foreground">
            ResolvePeace
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#mediators" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Our Team
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
          </div>
          
          <Button variant="hero" size="sm">
            Start Free Consultation
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;