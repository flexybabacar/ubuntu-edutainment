
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Music, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToArtists = () => {
    document.getElementById('artists-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Audio visualizer bars animation
  const visualizerBars = Array.from({ length: 40 }, (_, i) => ({
    delay: i * 0.05,
    height: Math.random() * 100 + 20,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large pulsing orb - Primary color */}
        <div 
          className={`absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        {/* Secondary orb */}
        <div 
          className={`absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[100px] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ animation: 'pulse 5s ease-in-out infinite 1s' }}
        />
        {/* Accent orb */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[80px] transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ animation: 'pulse 6s ease-in-out infinite 2s' }}
        />
      </div>

      {/* Audio Visualizer Effect - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 flex items-end justify-center gap-[2px] md:gap-1 overflow-hidden opacity-60">
        {visualizerBars.map((bar, index) => (
          <div
            key={index}
            className="w-1 md:w-2 bg-gradient-to-t from-primary via-accent to-secondary rounded-t-full"
            style={{
              height: `${bar.height}%`,
              animation: `equalizer 1.2s ease-in-out infinite`,
              animationDelay: `${bar.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Music Notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `floatNote ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <Music className="w-6 h-6 md:w-10 md:h-10" />
          </div>
        ))}
      </div>

      {/* Rotating Vinyl Record - Desktop only */}
      <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 opacity-20">
        <div 
          className="w-[400px] h-[400px] rounded-full border-8 border-foreground/20 relative"
          style={{ animation: 'spin 8s linear infinite' }}
        >
          {/* Vinyl grooves */}
          <div className="absolute inset-4 rounded-full border border-foreground/10" />
          <div className="absolute inset-8 rounded-full border border-foreground/10" />
          <div className="absolute inset-12 rounded-full border border-foreground/10" />
          <div className="absolute inset-16 rounded-full border border-foreground/10" />
          <div className="absolute inset-20 rounded-full border border-foreground/10" />
          {/* Center label */}
          <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-background" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Tagline with Icon */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <Headphones className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Label de Production Musicale & Audiovisuelle
          </p>
          <Headphones className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
        </div>

        {/* Main Logo with Glow Effect */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
          </div>
          <img 
            src="/lovable-uploads/1954d7c7-aa99-48fd-8ee8-74c199c9498e.png" 
            alt="UBN T EDUTAINMENT" 
            className={`relative h-36 md:h-48 lg:h-56 w-auto object-contain mx-auto transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ filter: 'drop-shadow(0 0 30px hsl(320 100% 60% / 0.5))' }}
          />
        </div>

        {/* Animated Headline */}
        <div className={`mb-4 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-foreground mb-2">L'ART QUI</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                AGIT
              </span>
              <span className="text-foreground">, L'ART QUI </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                UNIT
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className={`text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Découvrez l'univers musical d'Ubuntu Edutainment — Où chaque note raconte une histoire, 
          où chaque artiste porte un message.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Button 
            size="lg" 
            onClick={scrollToArtists}
            className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg font-bold tracking-wide rounded-full shadow-neon hover:shadow-[0_0_40px_hsl(320_100%_60%_/_0.6)] transition-all duration-500 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              DÉCOUVRIR NOS ARTISTES
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          
          <Link to="/services" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline"
              className="group border-2 border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground hover:border-secondary px-8 py-6 text-lg font-bold tracking-wide rounded-full transition-all duration-500 backdrop-blur-sm w-full hover:shadow-cyan"
            >
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              NOS SERVICES
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
