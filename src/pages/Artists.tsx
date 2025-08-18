import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Users, Music, MapPin, Star } from "lucide-react";

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
  const artists: Artist[] = [
    {
      id: 1,
      name: "KENNY BASS",
      location: "LONDON [IT]",
      image: "",
      genre: "Electronic",
      followers: "2.5M",
      rating: 4.8,
      albums: 12
    },
    {
      id: 2,
      name: "PAUL RICHARDS",
      location: "MIAMI [USA]",
      image: "",
      genre: "House",
      followers: "1.8M",
      rating: 4.6,
      albums: 8
    },
    {
      id: 3,
      name: "R. GALVANIZE",
      location: "ROME [FR]",
      image: "",
      genre: "Techno",
      followers: "3.2M",
      rating: 4.9,
      albums: 15
    },
    {
      id: 4,
      name: "DAVID MOREAU",
      location: "PARIS [FR]",
      image: "",
      genre: "Deep House",
      followers: "1.2M",
      rating: 4.5,
      albums: 6
    },
    {
      id: 5,
      name: "ALEX TURNER",
      location: "BERLIN [DE]",
      image: "",
      genre: "Progressive",
      followers: "2.8M",
      rating: 4.7,
      albums: 10
    },
    {
      id: 6,
      name: "SOPHIA CHEN",
      location: "TOKYO [JP]",
      image: "",
      genre: "Ambient",
      followers: "900K",
      rating: 4.4,
      albums: 7
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Header Section */}
        <section className="relative py-32 bg-dark-surface overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,theme(colors.neon-pink/10)_0%,transparent_50%)]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,theme(colors.neon-cyan/10)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,theme(colors.border/5)_50%,transparent_51%)] bg-[length:20px_20px]" />
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
              <h1 className="text-6xl md:text-8xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-4">
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
                  <div className="relative bg-gradient-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-cyan group-hover:transform group-hover:-translate-y-2">
                    
                    {/* Artist Image */}
                    <div className="relative h-80 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 overflow-hidden">
                      {/* Placeholder for artist image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-black text-primary/30">♫</div>
                      </div>
                      
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
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-neon-pink/60 rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-neon-cyan/40 triangle-border animate-float" />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground neon-border group"
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