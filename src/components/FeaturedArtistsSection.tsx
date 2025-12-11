import { Button } from "@/components/ui/button";
import { Eye, Users, Star, MapPin, Music, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useArtists } from "@/hooks/useArtists";

const FeaturedArtistsSection = () => {
  const navigate = useNavigate();
  const { data: artists = [], isLoading } = useArtists();
  
  // Limiter à 6 artistes pour la section featured
  const featuredArtists = artists.slice(0, 6);

  return (
    <section id="artists-section" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 opacity-40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 flex-wrap justify-center">
            <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-wider text-primary">
              NOS ARTISTES
            </h2>
            <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg tracking-wide px-4">
            Découvrez les voix du changement social
          </p>
          
          {/* Statistics - Mobile optimized */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-8 md:mt-12">
            <div className="text-center p-3 rounded-lg bg-card/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Artistes Engagés</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/50">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">200+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Événements</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/50">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">15</div>
              <div className="text-xs md:text-sm text-muted-foreground">Pays</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1M+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Personnes Touchées</div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Chargement des artistes...</span>
          </div>
        )}

        {/* Artists Grid - Mobile optimized */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
            {featuredArtists.map((artist, index) => (
              <div 
                key={artist.id}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                  
                  {/* Artist Photo */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <div className="aspect-square bg-muted overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={artist.image_url || "/placeholder.svg"} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Availability Badge */}
                      <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        artist.is_available 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-red-500/90 text-white'
                      }`}>
                        {artist.is_available ? '✓ Disponible' : '✗ Indisponible'}
                      </div>

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform group-hover:scale-110 transition-all">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3 mb-4">
                      <div className="text-center">
                        <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                          {artist.name}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">{artist.genre}</p>
                        <div className="flex items-center justify-center text-muted-foreground mt-2">
                          <MapPin className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1 flex-shrink-0" />
                          <span className="text-xs">{artist.location}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                        <div className="text-center">
                          <Users className="h-3 w-3 md:h-4 md:w-4 mx-auto mb-1 text-primary" />
                          <div className="font-semibold text-xs">{artist.followers}</div>
                          <div className="text-muted-foreground text-[10px] md:text-xs">Followers</div>
                        </div>
                        <div className="text-center">
                          <Star className="h-3 w-3 md:h-4 md:w-4 mx-auto mb-1 text-yellow-500" />
                          <div className="font-semibold text-xs">{artist.rating}</div>
                          <div className="text-muted-foreground text-[10px] md:text-xs">Rating</div>
                        </div>
                        <div className="text-center">
                          <Music className="h-3 w-3 md:h-4 md:w-4 mx-auto mb-1 text-accent" />
                          <div className="font-semibold text-xs">{artist.albums_count}</div>
                          <div className="text-muted-foreground text-[10px] md:text-xs">Albums</div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-2">
                      <Button 
                        size="sm" 
                        onClick={() => navigate(`/artist/${artist.id}`)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group/btn text-sm"
                      >
                        <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Voir le Profil
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-primary/30 text-foreground hover:bg-primary/10 font-medium text-sm"
                      >
                        Suivre
                      </Button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 bg-primary/40 rounded-full animate-pulse" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 md:w-3 md:h-3 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && featuredArtists.length === 0 && (
          <div className="text-center py-16">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Aucun artiste disponible pour le moment</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center pt-4 md:pt-8">
          <Button 
            size="lg" 
            onClick={() => navigate('/artists')}
            className="px-6 md:px-10 py-5 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg group w-full sm:w-auto"
          >
            <Users className="mr-2 md:mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            DÉCOUVRIR TOUS LES ARTISTES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtistsSection;
