import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useArtists } from '@/hooks/useArtists';
import ArtistCard from "@/components/ArtistCard";

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
  
  const { data: artists = [], isLoading, error } = useArtists();

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
      return artist.is_available && matchesSearch;
    } else if (selectedFilter === "popular") {
      return artist.rating >= 4.5 && matchesSearch;
    } else if (selectedFilter === "new") {
      return artist.albums_count <= 2 && matchesSearch;
    }

    return matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des artistes...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-destructive mb-4">Erreur lors du chargement des artistes</p>
            <Button onClick={() => window.location.reload()}>Réessayer</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
              {filteredArtists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
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
