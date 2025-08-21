
import { Button } from "@/components/ui/button";
import { Eye, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
}

const FeaturedArtistsSection = () => {
  const navigate = useNavigate();

  const artists: Artist[] = [
    {
      id: 1,
      name: "Amara Kone",
      genre: "Afro-Pop Engagé",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Khalil Senghor",
      genre: "Rap Conscient",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Fatou Diallo",
      genre: "World Music",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Moussa Ba",
      genre: "Electro-Traditionnel",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Aïcha Camara",
      genre: "Folk Moderne",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Ibrahim Fall",
      genre: "Jazz Fusion",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="artists-section" className="py-24 bg-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-glow opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-hero opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent">
              NOS ARTISTES
            </h2>
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
          </div>
          <p className="text-muted-foreground text-lg tracking-wide">Découvrez les voix du changement social</p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artists.map((artist, index) => (
            <div 
              key={artist.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-neon overflow-hidden group-hover:transform group-hover:-translate-y-2">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
                
                {/* Artist Photo */}
                <div className="relative mb-6">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>

                {/* Artist Info */}
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{artist.genre}</p>
                  </div>

                  {/* View Profile Button */}
                  <Button 
                    size="sm" 
                    onClick={() => navigate(`/artist/${artist.id}`)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Voir le Profil
                  </Button>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-cyan/30 rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-neon-pink/40 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/artists')}
            className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border group"
          >
            <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            VOIR TOUS LES ARTISTES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtistsSection;
