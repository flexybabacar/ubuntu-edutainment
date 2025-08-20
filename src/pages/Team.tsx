import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      title: "DIRECTRICE ARTISTIQUE",
      role: "CHARGÉE DE PRODUCTION", 
      description: "Coordinatrice du projet qui gère toutes les productions artistiques et les contrats avec les artistes, partenaires et collaborateurs impliqués dans le projet",
      color: "primary"
    },
    {
      title: "BEAT MAKER",
      role: "GÉRANT STUDIO",
      description: "Gérant du studio d'enregistrement et celui qui crée les beats et fait les arrangements (mix, mastering)",
      color: "secondary"
    },
    {
      title: "VIDÉASTE",
      role: "PRODUCTION AUDIOVISUELLE",
      description: "Chargé de la production audiovisuelle (tournage clip, court métrage, émission, campagnes digitales…)",
      color: "accent"
    },
    {
      title: "MARKETING MANAGER",
      role: "DIGITAL & STRATÉGIE",
      description: "Chargé de concevoir le site web, créer et gérer les supports digitaux du label et l'identification des opportunités",
      color: "primary"
    },
    {
      title: "COMPTABLE",
      role: "GESTION FINANCIÈRE",
      description: "Gère la finance, collecte les factures, assure les rapports financiers et narratifs, garantit la transparence et la redevabilité",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-20" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-neon-cyan/30 triangle-border animate-float" />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-neon-pink/40 diamond-border animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <p className="kentha-subtitle mb-4 animate-slide-in">DÉCOUVREZ</p>
            <h1 className="kentha-title mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>NOTRE ÉQUIPE</h1>
            <p className="kentha-subtitle animate-slide-in" style={{ animationDelay: '0.4s' }}>LES ARCHITECTES DU CHANGEMENT</p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-${member.color} to-${member.color}/60 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                          <div className={`w-6 h-6 bg-${member.color} rounded-full`} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className={`text-xl font-bold text-${member.color} mb-2`}>{member.title}</h3>
                      <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {member.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <div className={`w-8 h-8 border border-${member.color} triangle-border`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">REJOIGNEZ NOTRE MISSION</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ubuntu Edutainment est ouvert à tous les artistes africains et de la diaspora pratiquant 
              différentes formes d'Art (Rap, arts visuels, cinéma, théâtre…) qui souhaitent contribuer 
              au changement social positif.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="px-6 py-3 bg-primary/20 rounded-lg border border-primary/30">
                <span className="text-primary font-semibold">COLLABORATION</span>
              </div>
              <div className="px-6 py-3 bg-secondary/20 rounded-lg border border-secondary/30">
                <span className="text-secondary font-semibold">INNOVATION</span>
              </div>
              <div className="px-6 py-3 bg-accent/20 rounded-lg border border-accent/30">
                <span className="text-accent font-semibold">IMPACT</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;