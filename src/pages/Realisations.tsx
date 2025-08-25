
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye, Music, Video, Camera, Headphones } from "lucide-react";
import Footer from "@/components/Footer";

const Realisations = () => {
  const realisations = [
    {
      id: 1,
      title: "Album 'Voix de l'Espoir'",
      artist: "Amara Kone",
      type: "Production Musicale",
      year: "2024",
      description: "Premier album engagé sur les droits des femmes",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      category: "music",
      icon: Music
    },
    {
      id: 2,
      title: "Clip 'Ubuntu Unity'",
      artist: "Khalil Senghor",
      type: "Production Audiovisuelle",
      year: "2024",
      description: "Clip vidéo célébrant la philosophie Ubuntu",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
      category: "video",
      icon: Video
    },
    {
      id: 3,
      title: "Documentaire 'Changement'",
      artist: "Ubuntu Productions",
      type: "Documentaire",
      year: "2023",
      description: "Film sur l'impact de l'art dans le changement social",
      image: "https://images.unsplash.com/photo-1489599904386-0d3014462771?w=400&h=400&fit=crop",
      category: "documentary",
      icon: Camera
    },
    {
      id: 4,
      title: "Podcast 'Voix Ubuntu'",
      artist: "Marie Hélène Ndiaye",
      type: "Podcast",
      year: "2024",
      description: "Série de podcasts sur l'art engagé africain",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
      category: "podcast",
      icon: Headphones
    },
    {
      id: 5,
      title: "Album 'Résistance'",
      artist: "Fatou Diallo",
      type: "Production Musicale", 
      year: "2023",
      description: "Album world music sur la résistance culturelle",
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&h=400&fit=crop",
      category: "music",
      icon: Music
    },
    {
      id: 6,
      title: "Série 'Art & Société'",
      artist: "Ubuntu Edutainment",
      type: "Série Documentaire",
      year: "2023",
      description: "Série sur l'art comme vecteur de changement",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=400&fit=crop",
      category: "video",
      icon: Video
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRealisations = realisations.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  );

  const categories = [
    { id: "all", name: "Toutes" },
    { id: "music", name: "Musique" },
    { id: "video", name: "Vidéo" },
    { id: "documentary", name: "Documentaires" },
    { id: "podcast", name: "Podcasts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Header Section */}
        <section className="relative py-32 bg-dark-surface overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,theme(colors.neon-pink/10)_0%,transparent_50%)]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,theme(colors.neon-cyan/10)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,theme(colors.border/5)_50%,transparent_51%)] bg-[length:20px_20px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground tracking-widest">
                HOME / <span className="text-primary">NOS RÉALISATIONS</span>
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-4">
                NOS RÉALISATIONS
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos créations artistiques qui transforment la société
              </p>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="px-6"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Realisations Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRealisations.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={item.id}
                    className="bg-dark-surface border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" variant="secondary" className="rounded-full w-12 h-12 p-0">
                          {item.category === 'music' || item.category === 'podcast' ? 
                            <Play className="h-5 w-5" /> : 
                            <Eye className="h-5 w-5" />
                          }
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-background/90 p-2 rounded-lg">
                          <IconComponent className="h-4 w-4 text-secondary" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="text-xs text-secondary font-semibold uppercase tracking-wide">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        par {item.artist}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredRealisations.length === 0 && (
              <div className="text-center py-16">
                <Music className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucune réalisation trouvée</h3>
                <p className="text-muted-foreground">Essayez de modifier vos filtres</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-dark-surface">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Albums Produits</div>
              </div>
              <div>
                <div className="text-3xl font-black text-secondary mb-2">8</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Clips Vidéo</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Documentaires</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Épisodes Podcast</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Realisations;
