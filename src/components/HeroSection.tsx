
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToArtists = () => {
    document.getElementById('artists-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Elegant Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Refined Gradient Overlay */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 elegant-bg opacity-30" />

      {/* Subtle Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Triangle */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-border/30 triangle-border animate-float" />
        
        {/* Medium Diamond */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-border/40 diamond-border animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Small Geometric Elements */}
        <div className="absolute bottom-1/3 left-1/6 w-16 h-16 border border-border/50 triangle-border animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/6 w-12 h-12 border border-border/60 triangle-border animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Accent Elements */}
        <div className="absolute top-1/5 right-1/3 w-8 h-8 bg-primary/10 rounded-full animate-subtle-glow" />
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-primary/15 rounded-full animate-subtle-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Tagline */}
        <div className="mb-8">
          <p className="kentha-subtitle animate-slide-in">LABEL DE PRODUCTION MUSICALE & AUDIOVISUELLE</p>
        </div>

        {/* Main Logo */}
        <div className="mb-4 animate-slide-in flex justify-center" style={{ animationDelay: '0.2s' }}>
          <img 
            src="/lovable-uploads/1954d7c7-aa99-48fd-8ee8-74c199c9498e.png" 
            alt="UBN T EDUTAINMENT" 
            className="h-32 md:h-40 lg:h-48 w-auto object-contain filter drop-shadow-lg"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <p className="kentha-subtitle">ART ENGAGÉ POUR LE CHANGEMENT SOCIAL</p>
        </div>

        {/* Elegant CTA Buttons */}
        <div className="mb-16 animate-slide-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={scrollToArtists}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-lg glow-accent transition-all duration-300 group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            DÉCOUVRIR NOS ARTISTES
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-semibold tracking-wide rounded-lg transition-all duration-300 group"
          >
            <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            NOS SERVICES
          </Button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
