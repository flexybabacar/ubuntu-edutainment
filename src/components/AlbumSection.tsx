import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Plus, ShoppingCart, Heart, Share2 } from "lucide-react";

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  price: string;
  genre: string;
  year: number;
}

const AlbumSection = () => {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null);

  const albums: Album[] = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "Cyber Beats",
      cover: "",
      price: "$12.99",
      genre: "Electronic",
      year: 2024
    },
    {
      id: 2,
      title: "Future Bass",
      artist: "Synthwave",
      cover: "",
      price: "$14.99",
      genre: "Future Bass",
      year: 2024
    },
    {
      id: 3,
      title: "Digital Horizon",
      artist: "VirtualSound",
      cover: "",
      price: "$13.99",
      genre: "Ambient",
      year: 2024
    },
    {
      id: 4,
      title: "Pulse",
      artist: "BeatMaster",
      cover: "",
      price: "$11.99",
      genre: "Dubstep",
      year: 2024
    },
    {
      id: 5,
      title: "Cosmic Journey",
      artist: "SpaceWave",
      cover: "",
      price: "$15.99",
      genre: "Trance",
      year: 2024
    },
    {
      id: 6,
      title: "Electric Soul",
      artist: "NeonVibes",
      cover: "",
      price: "$12.99",
      genre: "House",
      year: 2024
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-glow opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-hero opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent">
              NEW ALBUMS
            </h2>
            <div className="w-12 h-0.5 bg-gradient-hero"></div>
          </div>
          <p className="text-muted-foreground text-lg tracking-wide">Latest releases from our featured artists</p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div 
              key={album.id}
              className="group relative"
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Album Card */}
              <div className="relative bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-neon overflow-hidden">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
                
                {/* Album Cover */}
                <div className="relative mb-6">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center">
                      <div className="text-6xl font-black text-primary/30">♪</div>
                    </div>
                    
                    {/* Play Overlay */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                      hoveredAlbum === album.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <Button 
                        size="lg" 
                        className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-neon hover:shadow-purple transition-all duration-300"
                      >
                        <Play className="h-6 w-6 fill-current" />
                      </Button>
                    </div>
                  </div>

                  {/* Genre Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-dark-surface/80 backdrop-blur-sm text-xs font-medium rounded-full border border-border/50">
                      {album.genre}
                    </span>
                  </div>
                </div>

                {/* Album Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{album.artist}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">{album.price}</span>
                    <span className="text-xs text-muted-foreground">{album.year}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="outline" className="border-border hover:border-primary">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-border hover:border-primary">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-cyan/30 rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-neon-pink/40 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border group"
          >
            <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform" />
            VIEW ALL ALBUMS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;