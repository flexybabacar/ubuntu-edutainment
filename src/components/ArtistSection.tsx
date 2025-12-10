
import { Button } from "@/components/ui/button";
import { Eye, Users, Music, Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useArtists } from "@/hooks/useArtists";

const ArtistSection = () => {
  const navigate = useNavigate();
  const { data: artists = [], isLoading } = useArtists();
  
  // Limiter à 4 artistes pour cette section
  const featuredArtists = artists.slice(0, 4);

  return (
    <section className="py-24 bg-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-secondary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider text-primary">
              ARTISTES EN VEDETTE
            </h2>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-lg tracking-wide">Découvrez les voix qui façonnent le paysage culturel</p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="w-24 h-24 mx-auto rounded-full bg-muted animate-pulse mb-4"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-muted rounded animate-pulse mx-auto w-3/4"></div>
                  <div className="h-4 bg-muted rounded animate-pulse mx-auto w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            featuredArtists.map((artist, index) => (
              <div 
                key={artist.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Artist Card */}
                <div className="relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg overflow-hidden group-hover:transform group-hover:-translate-y-2">
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden relative group-hover:scale-110 transition-transform duration-500 border-2 border-muted">
                      <img 
                        src={artist.image_url || "/placeholder.svg"} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    {/* Availability Badge */}
                    {artist.is_available && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Artist Info */}
                  <div className="text-center space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{artist.genre}</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center text-muted-foreground text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{artist.location}</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                        <div className="font-semibold">{artist.followers}</div>
                        <div className="text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center">
                        <Music className="h-4 w-4 mx-auto mb-1 text-secondary" />
                        <div className="font-semibold">{artist.albums_count}</div>
                        <div className="text-muted-foreground">Albums</div>
                      </div>
                      <div className="text-center">
                        <Star className="h-4 w-4 mx-auto mb-1 text-yellow-500" />
                        <div className="font-semibold">{artist.rating}</div>
                        <div className="text-muted-foreground">Note</div>
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <Button 
                      size="sm" 
                      onClick={() => navigate(`/artist/${artist.id}`)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Voir le Profil
                    </Button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-secondary/30 rounded-full animate-pulse" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Artists Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/artists')}
            className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
          >
            <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            VOIR TOUS LES ARTISTES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
