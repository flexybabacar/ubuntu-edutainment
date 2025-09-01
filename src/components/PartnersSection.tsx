import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Kuumbati", logo: "/lovable-uploads/kuumbati.jpg", category: "Éducation" },
    { name: "Ministère de la Culture", logo: "/lovable-uploads/mincul.jpeg", category: "Institutionnel" },
    { name: "Kuumbati", logo: "/lovable-uploads/kuumbati.jpg", category: "Éducation" },
    { name: "Fondation Ubuntu", logo: "/lovable-uploads/logowhite.png", category: "ONG" },
    { name: "Géantes Invisibles", logo: "/lovable-uploads/gi.png", category: "ONG" },
    { name: "Université Cheikh Anta Diop", logo: "/lovable-uploads/logowhite.png", category: "Éducation" },
    { name: "Fond des Cultures ", logo: "/lovable-uploads/fdcu.jpg", category: "Institutionnel" },
    { name: "Festival Africolor", logo: "/lovable-uploads/logowhite.png", category: "Événementiel" },
    { name: "Studio Teranga", logo: "/lovable-uploads/logowhite.png", category: "Production" },
    { name: "Alliance Française", logo: "/lovable-uploads/logowhite.png", category: "Culture" },
    { name: "Institut Français", logo: "/lovable-uploads/logowhite.png", category: "Culture" },
    { name: "Dakar Music Festival", logo: "/lovable-uploads/dmf.png", category: "Événementiel" }
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

  const getCategoryColor = (category) => {
    const categoryInfo = partnerCategories.find(c => c.name === category);
    return categoryInfo?.color || "bg-muted/20 text-muted-foreground";
  };

  // Dupliquer les partenaires pour un scroll infini
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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
        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <Card
                key={index}
                className="inline-block w-64 mx-4 bg-gradient-card border-border/50 rounded-xl p-4 hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-20 w-auto mx-auto object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                    {partner.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(partner.category)}`}>
                    {partner.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          display: flex;
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
