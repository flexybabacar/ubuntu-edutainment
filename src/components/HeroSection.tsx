
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToArtists = () => {
    document.getElementById('artists-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Triangle */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-neon-cyan/30 triangle-border animate-float" />
        
        {/* Medium Diamond */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-neon-pink/40 diamond-border animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Small Triangles */}
        <div className="absolute bottom-1/3 left-1/6 w-16 h-16 border border-neon-purple/50 triangle-border animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/6 w-12 h-12 border border-neon-cyan/60 triangle-border animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Floating Circles */}
        <div className="absolute top-1/5 right-1/3 w-8 h-8 bg-neon-pink/20 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-neon-cyan/30 rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }} />
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
            className="h-32 md:h-40 lg:h-48 w-auto object-contain animate-pulse-glow"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <p className="kentha-subtitle">L'ART QUI AGIT, L'ART QUI UNIT</p>
        </div>

        {/* CTA Buttons */}
        <div className="mb-16 animate-slide-in flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={scrollToArtists}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold tracking-wide rounded-full shadow-neon hover:shadow-purple transition-all duration-300 group w-full sm:w-auto"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            DÉCOUVRIR NOS ARTISTES
          </Button>
          <Link to="/services" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold tracking-wide rounded-full transition-all duration-300 group w-full"
            >
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              NOS SERVICES
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
