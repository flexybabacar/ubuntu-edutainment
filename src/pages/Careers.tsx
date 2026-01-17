import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Video, Send, CheckCircle, Briefcase, Users, Sparkles, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const jobPositions = [
  {
    id: "audio-beatmaker",
    title: "Technicien Audio & Beatmaker",
    icon: Music,
    responsibilities: [
      "Gestion et maintenance du matériel audio",
      "Enregistrement et mixage de voix et instruments",
      "Création et production de beats et compositions originales pour projets musicaux ou multimédias",
      "Capacité à proposer des solutions créatives et innovantes"
    ]
  },
  {
    id: "video-creative",
    title: "Technicien Vidéo & Campagnes Créatives",
    icon: Video,
    responsibilities: [
      "Gestion et maintenance du matériel vidéo (caméras, lumière, montage)",
      "Montage vidéo et post-production pour les contenus du studio",
      "Création de visuels et clips promotionnels pour le site et les réseaux sociaux",
      "Capacité à concevoir des campagnes créatives simples et impactantes pour promouvoir le studio et ses artistes"
    ]
  }
];

const benefits = [
  {
    icon: Sparkles,
    title: "Co-création",
    description: "La possibilité de co-créer et façonner les projets artistiques et culturels du studio"
  },
  {
    icon: Users,
    title: "Visibilité",
    description: "Une expérience concrète et visible, avec publication de vos travaux sur le site et les réseaux sociaux"
  },
  {
    icon: Briefcase,
    title: "Impact direct",
    description: "Une équipe réduite mais dynamique, où chaque personne a un impact direct sur le développement du studio"
  }
];

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    fullName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    coverLetter: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.position || !formData.fullName || !formData.email) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("job_applications").insert({
        position: formData.position,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        portfolio_url: formData.portfolioUrl || null,
        cover_letter: formData.coverLetter || null
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Candidature envoyée !",
        description: "Nous avons bien reçu votre candidature. Nous vous contacterons bientôt."
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Appel à Candidature
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rejoignez Ubuntu Edutainment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ubuntu Edutainment, studio dédié à la culture, à l'éducation et à la création artistique, 
              ouvre ses portes et lance un appel à candidature pour rejoindre son équipe dans la phase de lancement.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-primary">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Date limite : 02 février 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            Postes Ouverts
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <job.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{job.title}</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile & Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Profil recherché */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Profil recherché</h3>
              <ul className="space-y-4">
                {[
                  "Passion pour la culture, la musique, la vidéo ou l'art",
                  "Polyvalence et autonomie dans les tâches techniques et créatives",
                  "Motivation pour contribuer à un projet en phase de lancement, avec esprit d'initiative",
                  "Disponibilité flexible selon les besoins des projets et événements"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ce que nous offrons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Nous offrons</h3>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="postuler" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Postuler maintenant
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Remplissez le formulaire ci-dessous pour soumettre votre candidature
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border border-primary/20 rounded-2xl p-12 text-center"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Candidature envoyée !</h3>
                <p className="text-muted-foreground">
                  Merci pour votre intérêt. Nous examinerons votre candidature et vous contacterons prochainement.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                {/* Position Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Poste souhaité *</Label>
                  <RadioGroup
                    value={formData.position}
                    onValueChange={(value) => setFormData({ ...formData, position: value })}
                    className="space-y-3"
                  >
                    {jobPositions.map((job) => (
                      <div
                        key={job.id}
                        className={`flex items-center space-x-3 p-4 rounded-xl border transition-all cursor-pointer ${
                          formData.position === job.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={job.id} id={job.id} />
                        <Label htmlFor={job.id} className="flex items-center gap-3 cursor-pointer flex-1">
                          <job.icon className="w-5 h-5 text-primary" />
                          <span>{job.title}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nom complet *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolioUrl">Portfolio / Lien vers vos travaux</Label>
                    <Input
                      id="portfolioUrl"
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Lettre de motivation</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Parlez-nous de vous, de votre passion et de ce que vous pouvez apporter au studio..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma candidature
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Vous pouvez également envoyer votre CV à{" "}
                  <a href="mailto:contact@ubuntu-edutainment.com" className="text-primary hover:underline">
                    contact@ubuntu-edutainment.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
