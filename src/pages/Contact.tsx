
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Mic, Calendar } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici on peut ajouter la logique d'envoi du formulaire
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@ubuntu-edutainment.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 77 123 45 67",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Dakar, Sénégal",
      description: "Plateau, Rue 6"
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven 9h-18h",
      description: "Sam 10h-14h"
    }
  ];

  const contactTypes = [
    { id: 'general', label: 'Demande générale', icon: MessageCircle },
    { id: 'artist', label: 'Collaboration artistique', icon: Mic },
    { id: 'partnership', label: 'Partenariat', icon: Users },
    { id: 'booking', label: 'Réservation événement', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="py-24 bg-dark-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,theme(colors.neon-pink)_0%,transparent_60%)]" />
            <div className="absolute bottom-1/4 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,theme(colors.neon-cyan)_0%,transparent_60%)]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-6">
                CONTACTEZ-NOUS
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ensemble, créons quelque chose d'extraordinaire. 
                Notre équipe est là pour donner vie à vos projets artistiques et culturels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-sm text-foreground font-medium mb-1">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              
              {/* Form */}
              <div>
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      Envoyez-nous un message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Décrivez votre projet et nous vous recontacterons rapidement
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Contact Type */}
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-3 block">
                          Type de demande
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {contactTypes.map((type) => {
                            const IconComponent = type.icon;
                            return (
                              <button
                                key={type.id}
                                type="button"
                                onClick={() => setFormData({...formData, type: type.id})}
                                className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                                  formData.type === type.id 
                                    ? 'border-primary bg-primary/10' 
                                    : 'border-border hover:border-primary/50'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <IconComponent className="h-4 w-4" />
                                  <span className="text-sm font-medium">{type.label}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-foreground mb-2 block">
                            Nom complet *
                          </label>
                          <Input
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Votre nom"
                            required
                            className="bg-input border-border"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-foreground mb-2 block">
                            Email *
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="votre@email.com"
                            required
                            className="bg-input border-border"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Sujet *
                        </label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="Sujet de votre message"
                          required
                          className="bg-input border-border"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Message *
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Décrivez votre projet, vos besoins, ou votre demande en détail..."
                          required
                          rows={6}
                          className="bg-input border-border resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info & Philosophy */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Pourquoi nous choisir ?
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-card rounded-lg border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">🎵 Expertise musicale</h4>
                      <p className="text-sm text-muted-foreground">
                        Plus de 10 ans d'expérience dans la production musicale et l'accompagnement d'artistes
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-card rounded-lg border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">🌍 Engagement social</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous plaçons l'art engagé et le développement durable au cœur de nos actions
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-card rounded-lg border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">🤝 Accompagnement personnalisé</h4>
                      <p className="text-sm text-muted-foreground">
                        Chaque projet est unique, nous nous adaptons à vos besoins et objectifs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ubuntu Philosophy */}
                <div className="p-6 bg-gradient-card rounded-xl border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Philosophie Ubuntu</h4>
                        <p className="text-sm text-muted-foreground">"Je suis parce que vous êtes"</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Notre approche collaborative s'inspire de la philosophie Ubuntu. 
                      Nous croyons que la réussite de chacun contribue à l'épanouissement de tous. 
                      C'est dans cet esprit que nous accompagnons nos artistes et partenaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
