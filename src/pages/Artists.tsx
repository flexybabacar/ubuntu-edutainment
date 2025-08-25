import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, Users, Star, MapPin, Music } from "lucide-react";
import { useState } from "react";
import { Artist } from "@/types/booking";
import Footer from "@/components/Footer";

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

  const artists: Artist[] = [
    {
      id: 1,
      name: "Amara Kone",
      genre: "Afro-Pop Engagé",
      location: "Dakar",
      image: "/lovable-uploads/6499b747-59a7-489a-8391-5a81c0a94c6b.jpg",
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
      image: "/lovable-uploads/6499b747-59a7-489a-8391-5a81c0a94c6b.jpg",
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
      image: "/lovable-uploads/6499b747-59a7-489a-8391-5a81c0a94c6b.jpg",
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
      image: "/lovable-uploads/6499b747-59a7-489a-8391-5a81c0a94c6b.jpg",
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
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un artiste..."
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

        {/* Artists Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtists.map((artist) => (
                <div key={artist.id} className="bg-dark-surface rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground">{artist.genre}</p>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{artist.followers}</span>
                      <Star className="h-4 w-4 ml-2 mr-1" />
                      <span>{artist.rating}</span>
                      <MapPin className="h-4 w-4 ml-2 mr-1" />
                      <span>{artist.location}</span>
                    </div>
                    <Button variant="secondary" size="sm" className="mt-4">
                      Voir le profil
                    </Button>
                  </div>
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

export default Artists;
