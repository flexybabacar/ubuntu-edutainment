import { Heart, Users, Lightbulb, Music, Music2, Music3, Music4 } from "lucide-react";

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

          {/* Musical Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-xl p-8 border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-xl" />
              
              {/* Floating Music Notes */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Music className="absolute top-6 left-6 h-4 w-4 text-primary/40 animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }} />
                <Music2 className="absolute top-12 right-8 h-5 w-5 text-neon-pink/30 animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }} />
                <Music3 className="absolute bottom-16 left-10 h-4 w-4 text-neon-cyan/30 animate-float" style={{ animationDelay: '2s', animationDuration: '4.5s' }} />
                <Music4 className="absolute bottom-8 right-12 h-5 w-5 text-primary/30 animate-float" style={{ animationDelay: '0.5s', animationDuration: '5.5s' }} />
              </div>

              <div className="relative text-center">
                {/* Vinyl Record with Animation */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-neon-pink/20 to-neon-cyan/20 animate-pulse-glow" />
                  
                  {/* Vinyl disc */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-vinyl-spin shadow-lg">
                    {/* Vinyl grooves */}
                    <div className="absolute inset-4 rounded-full border border-gray-700/50" />
                    <div className="absolute inset-8 rounded-full border border-gray-700/30" />
                    <div className="absolute inset-12 rounded-full border border-gray-700/20" />
                    
                    {/* Center label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-neon-pink flex items-center justify-center">
                        <Music className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated sound waves */}
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-primary to-neon-pink rounded-full animate-equalizer"
                        style={{
                          height: '20px',
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Audio Equalizer */}
                <div className="flex items-end justify-center gap-1 mb-6 h-8">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-primary via-neon-pink to-neon-cyan rounded-full animate-equalizer"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${0.5 + Math.random() * 0.5}s`,
                      }}
                    />
                  ))}
                </div>

                <h4 className="text-xl font-bold text-primary mb-4">Notre Philosophie</h4>
                <p className="text-muted-foreground italic">
                  "L'art engagé est notre moyen de transformer les défis en opportunités, 
                  les rêves en réalité, et les communautés en forces de changement positif."
                </p>
              </div>

              {/* Decorative sound waves */}
              <div className="absolute top-4 right-4 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-neon-pink/40 rounded-full animate-equalizer"
                    style={{
                      height: '12px',
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
              <div className="absolute bottom-4 left-4 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-neon-cyan/50 rounded-full animate-equalizer"
                    style={{
                      height: '10px',
                      animationDelay: `${i * 0.25 + 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbuntuSection;
