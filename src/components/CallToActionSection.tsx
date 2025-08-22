
import { Button } from "@/components/ui/button";
import { Mic, Handshake } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary))_0%,transparent_60%)]" />
        <div className="absolute bottom-1/4 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,hsl(var(--primary))_0%,transparent_60%)]" />
      </div>

      {/* Refined Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-16 h-16 border border-border/20 triangle-border animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 border border-border/30 diamond-border animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary/10 rounded-full animate-subtle-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-primary/15 rounded-full animate-subtle-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-foreground mb-4">
              REJOIGNEZ LE MOUVEMENT
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              L'art engagé est notre force de transformation. Ensemble, créons un avenir meilleur 
              par la musique, la culture et l'engagement citoyen.
            </p>
          </div>

          {/* Elegant Mission Statement */}
          <div className="mb-12 p-8 elegant-border rounded-xl relative overflow-hidden glow-subtle">
            <div className="absolute inset-0 bg-primary/5 rounded-xl" />
            <div className="relative">
              <p className="text-lg text-foreground leading-relaxed italic">
                "Nous croyons que chaque voix compte, que chaque talent peut changer le monde, 
                et que l'art est le langage universel du changement social."
              </p>
              <div className="mt-4 text-primary font-semibold">— Ubuntu Edutainment</div>
            </div>
          </div>

          {/* Refined Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-lg glow-accent transition-all duration-300 group"
            >
              <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              DEVENIR ARTISTE
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-semibold tracking-wide rounded-lg transition-all duration-300 group"
            >
              <Handshake className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              COLLABORER AVEC NOUS
            </Button>
          </div>

          {/* Statistics with Elegant Design */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 elegant-border rounded-lg glow-subtle">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Artistes Accompagnés</div>
            </div>
            <div className="text-center p-6 elegant-border rounded-lg glow-subtle">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projets Réalisés</div>
            </div>
            <div className="text-center p-6 elegant-border rounded-lg glow-subtle">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Années d'Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
