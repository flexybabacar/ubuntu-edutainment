import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, Users, Star, MapPin, Music, Eye } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Artists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const navigate = useNavigate();

  // Mock data - same as in Index.tsx
  const mockArtists = [
    {
      id: "1",
      name: "Youssou N'Dour",
      genre: "Mbalax / World",
      location: "Sénégal",
      followers: "2.5M",
      rating: 4.9,
      albums_count: 28,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
    },
    {
      id: "2",
      name: "Fela Kuti Legacy",
      genre: "Afrobeat",
      location: "Nigeria",
      followers: "3.1M",
      rating: 4.8,
      albums_count: 45,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop"
    },
    {
      id: "3",
      name: "Sister LB",
      genre: "Jazz / Soul",
      location: "Sénégal",
      followers: "1.8M",
      rating: 4.7,
      albums_count: 22,
      is_available: true,
      image_url: "/lovable-uploads/sister_lb_big_84275.jpg"
    },
    {
      id: "4",
      name: "Hugh Masekela Spirit",
      genre: "Jazz / Fusion",
      location: "Namibie",
      followers: "2.2M",
      rating: 4.8,
      albums_count: 35,
      is_available: false,
      image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
    },
    {
      id: "5",
      name: "Angelique Kidjo",
      genre: "Afropop / World",
      location: "Bénin",
      followers: "2.8M",
      rating: 4.9,
      albums_count: 32,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop"
    },
    {
      id: "6",
      name: "Cécile McLorin Salvant",
      genre: "Jazz / Contemporary",
      location: "Martinique",
      followers: "1.5M",
      rating: 4.8,
      albums_count: 18,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    },
    {
      id: "7",
      name: "Ali Farka Touré Spirit",
      genre: "Blues Africain",
      location: "Mali",
      followers: "2.1M",
      rating: 4.9,
      albums_count: 40,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
    },
    {
      id: "8",
      name: "Oumou Sangaré",
      genre: "Traditionnelle / Moderne",
      location: "Mali",
      followers: "1.9M",
      rating: 4.8,
      albums_count: 12,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop"
    },
    {
      id: "9",
      name: "Rokia Traoré",
      genre: "World / Jazz Fusion",
      location: "Mali",
      followers: "1.6M",
      rating: 4.7,
      albums_count: 15,
      is_available: true,
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredArtists = mockArtists.filter(artist => {
    const searchTerm = searchQuery.toLowerCase();
    const artistName = artist.name.toLowerCase();
    const artistGenre = artist.genre.toLowerCase();
    const artistLocation = artist.location.toLowerCase();

    const matchesSearch = artistName.includes(searchTerm) ||
                           artistGenre.includes(searchTerm) ||
                           artistLocation.includes(searchTerm);

    if (selectedFilter === "all") {
      return matchesSearch;
    } else if (selectedFilter === "upcoming") {
      return artist.is_available && matchesSearch;
    } else if (selectedFilter === "popular") {
      return artist.rating >= 4.5 && matchesSearch;
    } else if (selectedFilter === "new") {
      return artist.albums_count <= 20 && matchesSearch;
    }

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pb-20">
        {/* Hero Header Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10" />
          
          {/* Floating Geometric Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large gradient blobs */}
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/30 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Animated lines pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 35px)',
              animation: 'slideBackground 20s linear infinite'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center py-20">
            {/* Breadcrumb */}
            <div className="mb-8 animate-fade-in">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                HOME / <span className="text-primary font-semibold">ARTISTES</span>
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6 animate-slide-in bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              TOUS LES ARTISTES
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Découvrez les artistes engagés qui façonnent le paysage culturel africain et transforment la société par la musique
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-primary">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">Artistes</div>
              </div>
              <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/10 backdrop-blur-sm hover:bg-secondary/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-secondary">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">Événements</div>
              </div>
              <div className="p-6 rounded-lg bg-accent/5 border border-accent/10 backdrop-blur-sm hover:bg-accent/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-accent">15</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">Pays</div>
              </div>
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-primary">1M+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">Auditeurs</div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>

        {/* Search & Filters Section */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/2 flex items-center space-x-2 bg-muted/30 rounded-lg px-4 py-2 border border-border">
                <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Rechercher un artiste, genre ou ville..."
                  className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder-muted-foreground"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>

              <div className="flex space-x-2 flex-wrap justify-center md:justify-end">
                {[
                  { id: 'all', label: 'Tous' },
                  { id: 'upcoming', label: 'Disponibles' },
                  { id: 'popular', label: 'Populaires' },
                  { id: 'new', label: 'Récents' },
                ].map(filter => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange(filter.id)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <section className="py-4 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground">
              {filteredArtists.length} artiste{filteredArtists.length > 1 ? 's' : ''} trouvé{filteredArtists.length > 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {filteredArtists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtists.map((artist, index) => (
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
                            src={artist.image_url} 
                            alt={artist.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          
                          {/* Availability Badge */}
                          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            artist.is_available 
                              ? 'bg-green-500/90 text-white' 
                              : 'bg-red-500/90 text-white'
                          }`}>
                            {artist.is_available ? '✓ Disponible' : '✗ Indisponible'}
                          </div>

                          {/* Play Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="w-14 h-14 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform group-hover:scale-110 transition-all">
                              <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Artist Info */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div className="space-y-3 mb-4">
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                              {artist.name}
                            </h3>
                            <p className="text-muted-foreground text-sm font-medium">{artist.genre}</p>
                            <div className="flex items-center justify-center text-muted-foreground mt-2">
                              <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                              <span className="text-xs">{artist.location}</span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                            <div className="text-center">
                              <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                              <div className="font-semibold text-xs">{artist.followers}</div>
                              <div className="text-muted-foreground text-xs">Followers</div>
                            </div>
                            <div className="text-center">
                              <Star className="h-4 w-4 mx-auto mb-1 text-yellow-500" />
                              <div className="font-semibold text-xs">{artist.rating}</div>
                              <div className="text-muted-foreground text-xs">Rating</div>
                            </div>
                            <div className="text-center">
                              <Music className="h-4 w-4 mx-auto mb-1 text-accent" />
                              <div className="font-semibold text-xs">{artist.albums_count}</div>
                              <div className="text-muted-foreground text-xs">Albums</div>
                            </div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-2">
                          <Button 
                            size="sm" 
                            onClick={() => {
                              console.log('Profile clicked for artist:', artist.id, artist.name);
                              navigate(`/artist/${artist.id}`);
                            }}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group/btn"
                          >
                            <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Voir le Profil
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="w-full border-primary/30 text-foreground hover:bg-primary/10 font-medium"
                            onClick={() => navigate(`/booking?artist=${artist.id}`)}
                          >
                            Réserver
                          </Button>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/40 rounded-full animate-pulse" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4">
                  <Users className="h-16 w-16 mx-auto text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aucun artiste trouvé</h3>
                <p className="text-muted-foreground">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artists;
