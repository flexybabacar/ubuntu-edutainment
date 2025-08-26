
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero/10" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[radial-gradient(circle_at_center,theme(colors.neon-purple)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[radial-gradient(circle_at_center,theme(colors.neon-cyan)_0%,transparent_70%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-16 h-16 border border-neon-pink/30 triangle-border animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-12 h-12 border border-neon-cyan/40 diamond-border animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-8">
            PRÊT À TRANSFORMER 
            <br />
            VOTRE VISION EN RÉALITÉ ?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Rejoignez Ubuntu Edutainment dans cette aventure artistique engagée. 
            Ensemble, créons un art qui inspire, sensibilise et transforme notre société.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Music className="h-10 w-10 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">50+</div>
              <p className="text-muted-foreground">Productions Réalisées</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">25+</div>
              <p className="text-muted-foreground">Artistes Accompagnés</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">15+</div>
              <p className="text-muted-foreground">Partenaires Engagés</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-full shadow-neon hover:shadow-purple transition-all duration-300 group"
            >
              NOUS CONTACTER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-full transition-all duration-300"
            >
              DÉCOUVRIR NOS PROJETS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
