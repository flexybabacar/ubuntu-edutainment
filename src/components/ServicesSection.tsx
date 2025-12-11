import { Button } from "@/components/ui/button";
import { Music, Video, Users, Calendar, Building, Megaphone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const navigate = useNavigate();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      icon: Music,
      title: "Production Musicale",
      description: "Création, enregistrement et production d'œuvres musicales engagées.",
      color: "text-primary"
    },
    {
      icon: Video,
      title: "Production Audiovisuelle",
      description: "Réalisation de clips, documentaires et contenus visuels impactants.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Développement Talents",
      description: "Accompagnement et formation des artistes émergents.",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Événementiel",
      description: "Organisation d'événements culturels et concerts engagés.",
      color: "text-primary"
    },
    {
      icon: Building,
      title: "Accompagnement OSC",
      description: "Support aux organisations de la société civile par l'art.",
      color: "text-secondary"
    },
    {
      icon: Megaphone,
      title: "Activisme Artistique",
      description: "Campagnes de sensibilisation par la création artistique.",
      color: "text-accent"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-dark-surface relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,theme(colors.neon-pink)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,theme(colors.neon-cyan)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent">
              NOS SERVICES
            </h2>
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
          </div>
          <p className="text-muted-foreground text-lg tracking-wide">Des solutions créatives pour un impact social durable</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-cyan overflow-hidden group-hover:transform group-hover:-translate-y-2 h-full">
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-neon-pink/40 rounded-full animate-pulse-glow" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-neon-cyan/30 triangle-border animate-float" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/services')}
            className="px-8 py-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground neon-border group"
          >
            <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            DÉCOUVRIR TOUS NOS SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
