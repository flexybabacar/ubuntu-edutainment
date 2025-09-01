
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, Users, Star, MapPin, Music } from "lucide-react";
import { useState } from "react";
import { Artist } from "@/types/booking";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

interface ArtistFilterProps {
  onFilter: (filter: string) => void;
  activeFilter: string;
}

const ArtistFilter: React.FC<ArtistFilterProps> = ({ onFilter, activeFilter }) => {
  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'upcoming', label: 'À Venir' },
    { id: 'popular', label: 'Populaires' },
    { id: 'new', label: 'Nouveaux' },
  ];

  return (
    <div className="flex space-x-2">
      {filters.map(filter => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilter(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

const Artists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const navigate = useNavigate();

  const artists: Artist[] = [
    {
      id: 1,
      name: "Sister LB",
      genre: "Afro-Pop Engagé",
      location: "Dakar",
      image: "/lovable-uploads/sister_lb_big_84275.jpg",
      followers: "45K",
      rating: 4.8,
      albums: 3,
      isAvailable: true,
      priceRange: "500K-1M CFA"
    },
    {
      id: 2,
      name: "Khalil Senghor",
      genre: "Rap Conscient",
      location: "Dakar",
      image: "/lovable-uploads/sister_lb_big_84275.jpg",
      followers: "32K",
      rating: 4.6,
      albums: 2,
      isAvailable: true,
      priceRange: "300K-800K CFA"
    },
    {
      id: 3,
      name: "Fatou Diallo",
      genre: "World Music",
      location: "Thiès",
      image: "/lovable-uploads/sister_lb_big_84275.jpg",
      followers: "28K",
      rating: 4.7,
      albums: 4,
      isAvailable: false,
      priceRange: "400K-900K CFA"
    },
    {
      id: 4,
      name: "Moussa Ba",
      genre: "Spoken Word",
      location: "Saint-Louis",
      image: "/lovable-uploads/sister_lb_big_84275.jpg",
      followers: "18K",
      rating: 4.5,
      albums: 1,
      isAvailable: true,
      priceRange: "200K-500K CFA"
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleArtistClick = (artistId: number) => {
    navigate(`/artist/${artistId}`);
  };

  const filteredArtists = artists.filter(artist => {
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
      return artist.isAvailable && matchesSearch;
    } else if (selectedFilter === "popular") {
      return artist.rating >= 4.5 && matchesSearch;
    } else if (selectedFilter === "new") {
      return artist.albums <= 2 && matchesSearch;
    }

    return matchesSearch;
  });

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
                HOME / <span className="text-primary">ARTISTES</span>
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-4">
                ARTISTES
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez les artistes engagés qui façonnent le paysage culturel africain
              </p>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Search & Filters Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 w-full md:w-auto bg-muted/30 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un artiste, genre ou ville..."
                className="bg-transparent border-none outline-none text-sm text-foreground w-full"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>

            <ArtistFilter
              onFilter={handleFilterChange}
              activeFilter={selectedFilter}
            />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtists.map((artist) => (
                <div 
                  key={artist.id} 
                  className="bg-dark-surface rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:-translate-y-2"
                  onClick={() => handleArtistClick(artist.id)}
                >
                  <div className="relative">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Availability Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      artist.isAvailable 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-red-500/90 text-white'
                    }`}>
                      {artist.isAvailable ? 'Disponible' : 'Indisponible'}
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Voir le profil
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {artist.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{artist.genre}</p>
                    
                    {/* Stats Row */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{artist.followers}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        <span>{artist.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Music className="h-4 w-4 mr-1" />
                        <span>{artist.albums} albums</span>
                      </div>
                    </div>
                    
                    {/* Location and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{artist.location}</span>
                      </div>
                      <div className="text-sm font-semibold text-secondary">
                        {artist.priceRange}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleArtistClick(artist.id);
                        }}
                      >
                        Voir le profil
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/booking?artist=${artist.id}`);
                        }}
                      >
                        Réserver
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredArtists.length === 0 && (
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
