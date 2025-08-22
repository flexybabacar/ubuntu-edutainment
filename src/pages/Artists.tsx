
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Users, Music, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Artist {
  id: number;
  name: string;
  location: string;
  image: string;
  genre: string;
  followers: string;
  rating: number;
  albums: number;
}

const Artists = () => {
  const navigate = useNavigate();
  const artists: Artist[] = [
    {
      id: 1,
      name: "KENNY BASS",
      location: "LONDON [IT]",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=800&fit=crop&crop=face",
      genre: "Electronic",
      followers: "2.5M",
      rating: 4.8,
      albums: 12
    },
    {
      id: 2,
      name: "PAUL RICHARDS",
      location: "MIAMI [USA]",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
      genre: "House",
      followers: "1.8M",
      rating: 4.6,
      albums: 8
    },
    {
      id: 3,
      name: "R. GALVANIZE",
      location: "ROME [FR]",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
      genre: "Techno",
      followers: "3.2M",
      rating: 4.9,
      albums: 15
    },
    {
      id: 4,
      name: "DAVID MOREAU",
      location: "PARIS [FR]",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face",
      genre: "Deep House",
      followers: "1.2M",
      rating: 4.5,
      albums: 6
    },
    {
      id: 5,
      name: "ALEX TURNER", 
      location: "BERLIN [DE]",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=800&fit=crop&crop=face",
      genre: "Progressive",
      followers: "2.8M",
      rating: 4.7,
      albums: 10
    },
    {
      id: 6,
      name: "SOPHIA CHEN",
      location: "TOKYO [JP]",
      image: "https://images.unsplash.com/photo-1494790108755-2616c669a1ec?w=600&h=800&fit=crop&crop=face",
      genre: "Ambient",
      followers: "900K",
      rating: 4.4,
      albums: 7
    }
  ];

  const handleViewProfile = (artistId: number) => {
    navigate(`/artist/${artistId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Header Section */}
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-secondary/10 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,hsl(var(--border))_50%,transparent_51%)] bg-[length:20px_20px] opacity-20" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground tracking-widest">
                HOME / <span className="text-primary">ARTISTS</span>
              </p>
            </div>

            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-black tracking-wider text-primary mb-4">
                ARTISTS
              </h1>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <div 
                  key={artist.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Artist Card */}
                  <div className="relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg group-hover:transform group-hover:-translate-y-2">
                    
                    {/* Artist Image */}
                    <div className="relative h-80 bg-muted overflow-hidden">
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="lg" className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg">
                          <Play className="h-6 w-6 fill-current" />
                        </Button>
                      </div>

                      {/* Artist Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {artist.name}
                        </h3>
                        <p className="text-sm text-gray-300 tracking-wider flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {artist.location}
                        </p>
                      </div>
                    </div>

                    {/* Artist Details */}
                    <div className="p-6 space-y-4">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-4 w-4 text-primary mr-1" />
                            <span className="text-sm font-semibold">{artist.followers}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Followers</p>
                        </div>
                        <div>
                          <div className="flex items-center justify-center mb-1">
                            <Music className="h-4 w-4 text-secondary mr-1" />
                            <span className="text-sm font-semibold">{artist.albums}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Albums</p>
                        </div>
                        <div>
                          <div className="flex items-center justify-center mb-1">
                            <Star className="h-4 w-4 text-accent mr-1" />
                            <span className="text-sm font-semibold">{artist.rating}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Rating</p>
                        </div>
                      </div>

                      {/* Genre Tag */}
                      <div className="text-center">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {artist.genre}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          size="sm" 
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          Follow
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => handleViewProfile(artist.id)}
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary/40 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group"
              >
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LOAD MORE ARTISTS
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Artists;
