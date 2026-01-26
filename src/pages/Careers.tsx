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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 sm:top-20 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
            >
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
              Appel à Candidature
            </motion.span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Rejoignez l'aventure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ubuntu Edutainment
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              Studio dédié à la culture, l'éducation et la création artistique, nous ouvrons nos portes 
              pour accueillir de nouveaux talents passionnés.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 sm:mt-8 px-4 sm:px-6 py-3 bg-accent/10 border border-accent/20 rounded-full w-fit mx-auto text-sm sm:text-base"
            >
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
              <span className="font-semibold text-accent text-center">Date limite : 02 février 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Postes Ouverts
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Découvrez les opportunités disponibles et trouvez celle qui correspond à vos talents
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className={`w-14 sm:w-16 h-14 sm:h-16 ${job.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <job.icon className={`w-7 sm:w-8 h-7 sm:h-8 ${job.iconColor}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{job.title}</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {job.responsibilities.map((resp, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
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
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Profil recherché */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span>Profil recherché</span>
              </h3>
              <ul className="space-y-4 sm:space-y-5">
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
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Ce que nous offrons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <span>Ce que nous offrons</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Apply Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-2xl" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <Mail className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Prêt à nous rejoindre ?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto px-2">
                  Envoyez votre CV et lettre de motivation directement par email. 
                  Nous avons hâte de découvrir votre talent !
                </p>
                <div className="flex justify-center mb-6">
                  <Button
                    size="sm"
                    asChild
                    className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity w-full max-w-md sm:w-auto sm:max-w-none"
                  >
                    <a href="mailto:contact@ubuntu-edutainment.com" className="flex items-center justify-center gap-2">
                      <Mail className="w-3.5 sm:w-5 h-3.5 sm:h-5" />
                      <span className="hidden sm:inline">contact@ubuntu-edutainment.com</span>
                      <span className="sm:hidden text-xs">Email</span>
                      <ArrowRight className="w-3.5 sm:w-5 h-3.5 sm:h-5" />
                    </a>
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground px-4">
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
