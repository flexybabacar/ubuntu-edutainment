
import { Heart, Users, Lightbulb } from "lucide-react";

const UbuntuSection = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-glow opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-hero opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent">
              QUI SOMMES-NOUS ?
            </h2>
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Ubuntu Edutainment</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ubuntu Edutainment est un label de production musicale et audiovisuelle dédié à l'art engagé. 
                Nous croyons fermement à la philosophie Ubuntu : <span className="text-primary font-semibold">"Je suis parce que vous êtes"</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre mission est de placer les arts et la culture au cœur de la participation citoyenne et du 
                développement durable. Nous utilisons l'éducation par le divertissement ("édu-musement") pour 
                engager les jeunes et les femmes dans la recherche de solutions aux défis sociétaux.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Engagement</h4>
                <p className="text-sm text-muted-foreground">Art au service du changement social</p>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Communauté</h4>
                <p className="text-sm text-muted-foreground">Rassembler par la culture</p>
              </div>
              <div className="text-center p-4">
                <Lightbulb className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                <p className="text-sm text-muted-foreground">Solutions créatives durables</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-xl p-8 border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-xl" />
              <div className="relative text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 flex items-center justify-center">
                  <div className="text-4xl">🎵</div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Notre Philosophie</h4>
                <p className="text-muted-foreground italic">
                  "L'art engagé est notre moyen de transformer les défis en opportunités, 
                  les rêves en réalité, et les communautés en forces de changement positif."
                </p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-neon-pink/40 rounded-full animate-pulse-glow" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-cyan/50 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbuntuSection;
