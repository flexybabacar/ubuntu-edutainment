
import { Button } from "@/components/ui/button";
import { Play, Users, Music, Calendar } from "lucide-react";

interface Artist {
  id: number;
  name: string;
  genre: string;
  followers: string;
  albums: number;
  avatar: string;
  isVerified: boolean;
}

const ArtistSection = () => {
  const artists: Artist[] = [
    {
      id: 1,
      name: "Cyber Beats",
      genre: "Electronic",
      followers: "2.5M",
      albums: 8,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
      isVerified: true
    },
    {
      id: 2,
      name: "Synthwave",
      genre: "Future Bass",
      followers: "1.8M",
      albums: 12,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      isVerified: true
    },
    {
      id: 3,
      name: "VirtualSound",
      genre: "Ambient",
      followers: "967K",
      albums: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      isVerified: false
    },
    {
      id: 4,
      name: "BeatMaster",
      genre: "Dubstep",
      followers: "3.2M",
      albums: 15,
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      isVerified: true
    }
  ];

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
              FEATURED ARTISTS
            </h2>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-lg tracking-wide">Discover the voices shaping tomorrow's sound</p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
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
                      src={artist.avatar} 
                      alt={artist.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="rounded-full w-10 h-10 bg-primary hover:bg-primary/90">
                        <Play className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  {artist.isVerified && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
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

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">{artist.followers}</div>
                      <div className="text-muted-foreground">Followers</div>
                    </div>
                    <div className="text-center">
                      <Music className="h-4 w-4 mx-auto mb-1 text-secondary" />
                      <div className="font-semibold">{artist.albums}</div>
                      <div className="text-muted-foreground">Albums</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-4 w-4 mx-auto mb-1 text-accent" />
                      <div className="font-semibold">2024</div>
                      <div className="text-muted-foreground">Active</div>
                    </div>
                  </div>

                  {/* Follow Button */}
                  <Button 
                    size="sm" 
                    className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Follow
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-secondary/30 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Artists Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group"
          >
            <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            DISCOVER ALL ARTISTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
