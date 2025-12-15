import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-20" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="kentha-title mb-6">À PROPOS</h1>
              <p className="kentha-subtitle">UBUNTU EDUTAINMENT</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-black -10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              
              {/* Vision */}
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold text-primary mb-4">🌍 Notre Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Placer les arts et la culture au cœur de l'engagement citoyen et du changement transformationnel pour un 
                  développement durable. Nous aspirons à créer un écosystème où les expressions artistiques et culturelles 
                  inspirent des actions collectives, favorisent l'inclusion sociale, et catalysent des transformations 
                  positives pour répondre aux défis environnementaux, sociaux et économiques de notre époque.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold text-secondary mb-4">🎯 Notre Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Encourager et promouvoir les jeunes talents évoluant dans les métiers des cultures urbaines, en mettant
                  en lumière des artistes engagés qui portent des valeurs fortes. Nous valorisons les créations artistiques 
                  qui abordent des thématiques sociétales pertinentes, inspirent des changements positifs et contribuent à une 
                  société plus inclusive, équitable et consciente des enjeux contemporains..
                </p>
              </div>

              {/* Théorie du changement */}
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold text-primary mb-4">🔑 Notre Théorie du Changement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous croyons que l’art et la culture sont des catalyseurs puissants du changement social.
                  En les intégrant dans les stratégies des mouvements sociaux et des organisations de la société
                  civile (OSC), nous contribuons à renforcer leur impact, à éveiller les consciences et à encourager
                  un engagement citoyen plus inclusif et durable.
                </p>
              </div>

            </div>

            <div className="bg-card border border-border/50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-accent mb-6">LE PROJET</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'Activisme Artistique (Art engagé) entend engager les jeunes désengagés et apathiques 
                envers les questions sociopolitiques dû au rétrécissement de l'espace politique et civique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vus comme vecteur de cohésion sociale, l'Art et la culture apparaissent comme porteurs 
                de changement positif et transformationnel. C'est la raison pour laquelle nous comptons 
                nous appuyer sur ces deux leviers pour davantage engager les jeunes et les femmes en les 
                plaçant au cœur des recherches de solutions aux maux qui gangrènent leurs communautés.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ubuntu renvoie à la langue bantoue qui a à l'esprit, la solidarité et la fraternité, 
                et qui se traduit par la notion panafricaine: "Je suis parce que vous êtes. Et puisque 
                vous êtes, moi je suis". <br /> Edutainment est l'approche pédagogique d'enseignement à travers 
                le divertissement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-4">PHASE 1</h3>
                <p className="text-muted-foreground">
                  Mise en place et promotion du studio d'enregistrement et du label Ubuntu Edutainment
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-secondary mb-4">PHASE 2</h3>
                <p className="text-muted-foreground">
                  Organisation de campagnes créatives, concerts, festivals, caravanes et résidences artistiques
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-accent mb-4">SERVICES</h3>
                <p className="text-muted-foreground">
                  Accompagnement des ONG, OSC, entreprises pour sensibiliser à travers l'art et la culture
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">LA FONDATRICE</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <img
                    src="/lovable-uploads/76668c83-e20d-4ae1-9053-74f4cb65780c.png"
                    alt="Marie Hélène Ndiaye"
                    className="w-full h-80 object-cover rounded-lg border-2 border-primary/20"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-lg"></div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-bold text-primary mb-4">Marie Hélène Ndiaye</h3>
                <p className="text-lg text-secondary mb-4">Fondatrice  & Directrice Artistique </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Passionnée par l'art engagé et le changement social, Marie Hélène Ndiaye a fondé Ubuntu Edutainment 
                  avec la vision de placer les arts et la culture au cœur de la participation citoyenne et du 
                  développement durable.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Son approche innovante combine l'activisme artistique et l'éducation pour engager les jeunes 
                  et les femmes dans la recherche de solutions aux défis sociétaux. Elle coordonne toutes les 
                  productions artistiques et gère les contrats avec les artistes, partenaires et collaborateurs 
                  impliqués dans le projet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Grâce à son expertise en "art engagé", elle promeut les talents émergents tout en véhiculant 
                  des messages de transformation positive pour la société.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Artistic Director Section */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">LA DIRECTRICE ARTISTIQUE</h2>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <img
                    src="/lovable-uploads/coumba.jpg"
                    alt="Mme Coumba Touré"
                    className="w-full h-80 object-cover rounded-lg border-2 border-secondary/20"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-lg"></div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-bold text-secondary mb-4">Mme Coumba Touré</h3>
                <p className="text-lg text-primary mb-4">Écrivain • Conteuse • Féministe • Activiste des Droits Humains</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Figure emblématique de l'engagement féminin en Afrique, Mme Coumba Touré est une voix puissante 
                  pour les droits humains et l'égalité des genres. Écrivain et conteuse de renom, elle utilise 
                  la force des mots et des récits pour éveiller les consciences et inspirer le changement social.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En tant qu'entrepreneure sociale et culturelle, elle a fondé et coordonne <span className="text-primary font-semibold">Africans Rising</span>, 
                  un mouvement panafricain qui rassemble des milliers de citoyens engagés à travers le continent. 
                  Elle est également l'initiatrice des <span className="text-secondary font-semibold">"Géantes Invisibles"</span>, une initiative qui met en lumière 
                  les contributions souvent méconnues des femmes africaines dans tous les domaines de la société.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Son expertise en storytelling et son engagement indéfectible pour la justice sociale font d'elle 
                  une directrice artistique visionnaire, guidant Ubuntu Edutainment vers des créations artistiques 
                  qui portent des messages de transformation et d'espoir pour les générations futures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">NOS VALEURS</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { title: "PASSION", desc: "L'engagement total dans notre mission" },
                { title: "INNOVATION", desc: "Créer de nouvelles approches artistiques" },
                { title: "CRÉATIVITÉ", desc: "L'art comme vecteur de changement" },
                { title: "OUVERTURE", desc: "Accueillir toutes les formes d'expression" },
                { title: "EXPERTISE", desc: "L'édu-musement comme méthode" }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border border-border/50">
                  <h3 className="font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
