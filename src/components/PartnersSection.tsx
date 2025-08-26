
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "Ministère de la Culture",
      logo: "🏛️",
      category: "Institutionnel"
    },
    {
      name: "Fondation Ubuntu",
      logo: "🌍",
      category: "ONG"
    },
    {
      name: "RTS Sénégal",
      logo: "📺",
      category: "Média"
    },
    {
      name: "Université Cheikh Anta Diop",
      logo: "🎓",
      category: "Éducation"
    },
    {
      name: "Festival Africolor",
      logo: "🎵",
      category: "Événementiel"
    },
    {
      name: "Studio Teranga",
      logo: "🎤",
      category: "Production"
    },
    {
      name: "Alliance Française",
      logo: "🇫🇷",
      category: "Culture"
    },
    {
      name: "Institut Français",
      logo: "📚",
      category: "Culture"
    },
    {
      name: "Africa Music Fund",
      logo: "🎼",
      category: "Finance"
    },
    {
      name: "Dakar Music Festival",
      logo: "🎊",
      category: "Événementiel"
    }
  ];

  const partnerCategories = [
    { name: "Institutionnel", color: "bg-primary/20 text-primary" },
    { name: "ONG", color: "bg-secondary/20 text-secondary" },
    { name: "Média", color: "bg-accent/20 text-accent" },
    { name: "Éducation", color: "bg-orange-500/20 text-orange-400" },
    { name: "Événementiel", color: "bg-green-500/20 text-green-400" },
    { name: "Production", color: "bg-pink-500/20 text-pink-400" },
    { name: "Culture", color: "bg-purple-500/20 text-purple-400" },
    { name: "Finance", color: "bg-blue-500/20 text-blue-400" }
  ];

  const getCategoryColor = (category: string) => {
    const categoryInfo = partnerCategories.find(c => c.name === category);
    return categoryInfo?.color || "bg-muted/20 text-muted-foreground";
  };

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-full h-full bg-[radial-gradient(circle_at_30%_40%,theme(colors.neon-purple)_0%,transparent_50%)]" />
        <div className="absolute bottom-1/3 right-1/4 w-full h-full bg-[radial-gradient(circle_at_70%_60%,theme(colors.neon-cyan)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-6">
            NOS PARTENAIRES
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ubuntu Edutainment collabore avec des institutions, organisations et entreprises 
            qui partagent notre vision d'un art engagé pour le développement durable.
          </p>
        </div>

        {/* Scrolling Partners List */}
        <div className="relative mb-16">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark-surface to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark-surface to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-4"
                >
                  <Card className="w-64 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {partner.logo}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                        {partner.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(partner.category)}`}>
                        {partner.category}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-black text-primary mb-2">50+</div>
            <p className="text-muted-foreground text-sm">Partenaires actifs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-secondary mb-2">15</div>
            <p className="text-muted-foreground text-sm">Pays représentés</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-accent mb-2">100+</div>
            <p className="text-muted-foreground text-sm">Projets collaboratifs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary mb-2">5</div>
            <p className="text-muted-foreground text-sm">Années d'expérience</p>
          </div>
        </div>

        {/* Partnership Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Collaboration</h3>
            <p className="text-muted-foreground text-sm">
              Des partenariats durables basés sur la confiance mutuelle et des valeurs partagées
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Impact Social</h3>
            <p className="text-muted-foreground text-sm">
              Ensemble, nous créons des projets qui transforment positivement nos communautés
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Excellence</h3>
            <p className="text-muted-foreground text-sm">
              La qualité artistique et l'innovation sont au cœur de toutes nos collaborations
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-card rounded-xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Devenir partenaire
            </h3>
            <p className="text-muted-foreground mb-6">
              Vous partagez nos valeurs et souhaitez collaborer avec nous ? 
              Rejoignez notre réseau de partenaires engagés.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
