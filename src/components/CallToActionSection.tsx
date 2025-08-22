
import { Button } from "@/components/ui/button";
import { Mic, Handshake, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,theme(colors.neon-pink)_0%,transparent_60%)]" />
        <div className="absolute bottom-1/4 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,theme(colors.neon-cyan)_0%,transparent_60%)]" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-16 h-16 border border-neon-pink/30 triangle-border animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 border border-neon-cyan/40 diamond-border animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-neon-purple/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-neon-cyan/30 rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-4">
              REJOIGNEZ LE MOUVEMENT
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              L'art engagé est notre force de transformation. Ensemble, créons un avenir meilleur 
              par la musique, la culture et l'engagement citoyen.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 p-8 bg-gradient-card rounded-xl border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-xl" />
            <div className="relative">
              <p className="text-lg text-foreground leading-relaxed italic">
                "Nous croyons que chaque voix compte, que chaque talent peut changer le monde, 
                et que l'art est le langage universel du changement social."
              </p>
              <div className="mt-4 text-primary font-semibold">— Ubuntu Edutainment</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-full shadow-neon hover:shadow-purple transition-all duration-300 group"
            >
              <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              DEVENIR ARTISTE
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-full neon-border transition-all duration-300 group"
            >
              <Handshake className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              COLLABORER AVEC NOUS
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Artistes Accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Années d'Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
