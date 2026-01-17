import { motion } from "framer-motion";
import { Music, Video, CheckCircle, Briefcase, Users, Sparkles, Calendar, Mail, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const jobPositions = [
  {
    id: "audio-beatmaker",
    title: "Technicien Audio & Beatmaker",
    icon: Music,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    responsibilities: [
      "Gestion et maintenance du matériel audio",
      "Enregistrement et mixage de voix et instruments",
      "Création et production de beats et compositions originales",
      "Proposer des solutions créatives et innovantes"
    ]
  },
  {
    id: "video-creative",
    title: "Technicien Vidéo & Campagnes Créatives",
    icon: Video,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    responsibilities: [
      "Gestion et maintenance du matériel vidéo",
      "Montage vidéo et post-production",
      "Création de visuels et clips promotionnels",
      "Conception de campagnes créatives impactantes"
    ]
  }
];

const benefits = [
  {
    icon: Sparkles,
    title: "Co-création",
    description: "Façonnez les projets artistiques et culturels du studio"
  },
  {
    icon: Users,
    title: "Visibilité",
    description: "Vos travaux publiés sur nos plateformes et réseaux"
  },
  {
    icon: Briefcase,
    title: "Impact direct",
    description: "Chaque membre contribue au développement du studio"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Appel à Candidature
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Rejoignez l'aventure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ubuntu Edutainment
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Studio dédié à la culture, l'éducation et la création artistique, nous ouvrons nos portes 
              pour accueillir de nouveaux talents passionnés.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 mt-8 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full w-fit mx-auto"
            >
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-semibold text-accent">Date limite : 02 février 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Postes Ouverts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les opportunités disponibles et trouvez celle qui correspond à vos talents
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
                  <div className={`w-16 h-16 ${job.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <job.icon className={`w-8 h-8 ${job.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">{job.title}</h3>
                  <ul className="space-y-4">
                    {job.responsibilities.map((resp, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile & Benefits */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Profil recherché */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                Profil recherché
              </h3>
              <ul className="space-y-5">
                {[
                  "Passion pour la culture, la musique, la vidéo ou l'art",
                  "Polyvalence et autonomie dans les tâches techniques et créatives",
                  "Motivation pour contribuer à un projet en lancement",
                  "Disponibilité flexible selon les besoins des projets"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Ce que nous offrons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                Ce que nous offrons
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Apply Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Prêt à nous rejoindre ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Envoyez votre CV et lettre de motivation directement par email. 
                  Nous avons hâte de découvrir votre talent !
                </p>
                <Button
                  size="lg"
                  asChild
                  className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  <a href="mailto:contact@ubuntu-edutainment.com">
                    <Mail className="w-5 h-5 mr-2" />
                    contact@ubuntu-edutainment.com
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  N'oubliez pas de mentionner le poste souhaité dans l'objet de votre email
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
