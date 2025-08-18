import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
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
          <p className="kentha-subtitle animate-slide-in">WELCOME TO THE FUTURE OF</p>
        </div>

        {/* Main Title */}
        <h1 className="kentha-title mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          KENTHA
        </h1>

        {/* Subtitle */}
        <div className="mb-12 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <p className="kentha-subtitle">VISIONARY MUSIC WORDPRESS THEME</p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-slide-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-full shadow-neon hover:shadow-purple transition-all duration-300 group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            PLAY NOW
          </Button>
        </div>

        {/* Video Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-in" style={{ animationDelay: '0.8s' }}>
          {/* Preview Card 1 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Play className="h-8 w-8 text-primary group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
          </div>

          {/* Preview Card 2 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Play className="h-8 w-8 text-secondary group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
          </div>

          {/* Preview Card 3 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Play className="h-8 w-8 text-accent group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;