
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Video, Users, Mic, Calendar, Target } from "lucide-react";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Music,
      title: "PRODUCTION MUSICALE",
      description: "Studio d'enregistrement professionnel pour la création de beats, mix et mastering",
      features: ["Enregistrement vocal", "Création de beats", "Mix professionnel", "Mastering audio"],
      color: "primary"
    },
    {
      icon: Video,
      title: "PRODUCTION AUDIOVISUELLE",
      description: "Réalisation de clips, courts métrages et campagnes digitales engagées",
      features: ["Tournage de clips", "Courts métrages", "Campagnes digitales", "Post-production"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "ACCOMPAGNEMENT OSC",
      description: "Services pour les ONG et organisations souhaitant sensibiliser à travers l'art",
      features: ["Stratégie artistique", "Campagnes créatives", "Formation équipes", "Consultation"],
      color: "accent"
    },
    {
      icon: Mic,
      title: "DÉVELOPPEMENT TALENTS",
      description: "Promotion des jeunes et femmes artistes engagés dans le changement social",
      features: ["Coaching artistique", "Gestion de carrière", "Réseau professionnel", "Mentorat"],
      color: "primary"
    },
    {
      icon: Calendar,
      title: "ÉVÉNEMENTIEL",
      description: "Organisation de concerts, festivals, résidences artistiques et activités culturelles",
      features: ["Concerts engagés", "Festivals culturels", "Résidences artistiques", "Caravanes"],
      color: "secondary"
    },
    {
      icon: Target,
      title: "ACTIVISME ARTISTIQUE",
      description: "Création de contenus artistiques pour sensibiliser aux enjeux sociopolitiques",
      features: ["Art engagé", "Sensibilisation", "Mobilisation citoyenne", "Changement social"],
      color: "accent"
    }
  ];

  const objectives = [
    {
      title: "PROMOUVOIR LES CULTURES URBAINES",
      description: "À travers l'Art engagé et pousser les organisations à inclure la dimension artistique et culturelle dans leur approche"
    },
    {
      title: "ENGAGER LES JEUNES",
      description: "Dans la conduite d'initiatives visant le changement socio-politique et le développement durable"
    },
    {
      title: "PARTICIPATION INCLUSIVE",
      description: "Favoriser la participation des jeunes dans l'analyse des problèmes et la recherche de solutions"
    },
    {
      title: "LIBERTÉ CRÉATIVE",
      description: "Promouvoir l'innovation et la participation citoyenne pour le changement positif"
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
            <h1 className="kentha-title mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>NOS SERVICES</h1>
            <p className="kentha-subtitle animate-slide-in" style={{ animationDelay: '0.4s' }}>L'ART AU SERVICE DU CHANGEMENT</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg bg-${service.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-8 w-8 text-${service.color}`} />
                    </div>
                    <CardTitle className={`text-xl text-${service.color}`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">NOS OBJECTIFS</h2>
              <p className="text-muted-foreground">Les buts spécifiques que nous nous fixons pour transformer la société</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-card/60 p-8 rounded-lg border border-border/50">
                  <h3 className="text-xl font-bold text-primary mb-4">{objective.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">ACTIVITÉS DU PROJET</h2>
              <p className="text-muted-foreground">Nos principales actions pour le changement social</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">ACTIVITÉ 1</h3>
                  <p className="font-semibold mb-2">Création du studio et mise en place du label</p>
                  <p className="text-muted-foreground text-sm">Infrastructure complète pour la production artistique engagée</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">ACTIVITÉ 2</h3>
                  <p className="font-semibold mb-2">Productions artistiques</p>
                  <p className="text-muted-foreground text-sm">Création de contenus musicaux et audiovisuels pour le changement</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-accent mb-2">ACTIVITÉ 3</h3>
                  <p className="font-semibold mb-2">Plan d'actions de campagne/événements</p>
                  <p className="text-muted-foreground text-sm">Organisation d'événements de sensibilisation et mobilisation</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">ACTIVITÉ 4</h3>
                  <p className="font-semibold mb-2">Stratégie de Communication pour la consultation des OSCs</p>
                  <p className="text-muted-foreground text-sm">Développement de partenariats avec les organisations de la société civile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-hero/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">COLLABORONS ENSEMBLE</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Que vous soyez une ONG, une organisation de la société civile, une entreprise ou un mouvement, 
              Ubuntu Edutainment peut vous accompagner dans vos initiatives de sensibilisation à travers l'art et la culture.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold tracking-wide rounded-full shadow-neon hover:shadow-purple transition-all duration-300">
              CONTACTEZ-NOUS
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
