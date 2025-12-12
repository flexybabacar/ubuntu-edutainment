import { Button } from "@/components/ui/button";
import { Handshake, Users, Award, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PartnersSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const partners = [
    {
      id: 1,
      name: "FDCU",
      logo: "/lovable-uploads/fdcu.jpg",
      type: "Fondation"
    },
    {
      id: 2,
      name: "Ministère Culture",
      logo: "/lovable-uploads/mincul.jpeg",
      type: "Institution"
    },
    {
      id: 3,
      name: "Kuumbati",
      logo: "/lovable-uploads/kuumbati.jpg",
      type: "ONG"
    },
    {
      id: 4,
      name: "GI Entertainment",
      logo: "/lovable-uploads/gi.png",
      type: "Média"
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Partenaires Actifs" },
    { icon: Award, value: "25", label: "Prix Remportés" },
    { icon: TrendingUp, value: "200%", label: "Croissance Annuelle" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider text-primary">
              NOS PARTENAIRES
            </h2>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-lg tracking-wide">
            Ensemble pour transformer la culture africaine
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Infinite Scroll */}
        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden py-4 md:py-8">
            <div className="animate-scroll-partners-mobile md:animate-scroll-partners flex items-center gap-4 md:gap-8">
              {/* Triple the partners for seamless infinite scroll */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div 
                  key={`partner-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                      <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                      </div>
                      <div className="text-center md:text-left md:min-w-[120px]">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-sm md:text-lg">
                          {partner.name}
                        </h3>
                        <span className="inline-block mt-1 px-2 md:px-3 py-0.5 md:py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-medium rounded-full">
                          {partner.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-xl p-8 border border-border">
            <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez Notre Réseau
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Devenez partenaire et contribuez à l'essor de la culture africaine engagée
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Devenir Partenaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
