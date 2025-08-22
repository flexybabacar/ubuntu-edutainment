
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, Users, Music, Star, MapPin, Calendar, Download, Plus } from "lucide-react";
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
  bio: string;
  joinedYear: string;
}

interface Track {
  id: number;
  title: string;
  duration: string;
  plays: string;
  likes: string;
}

interface Album {
  id: number;
  title: string;
  year: string;
  tracks: number;
  image: string;
}

const ArtistProfile = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, fetch based on artistId
  const artist: Artist = {
    id: parseInt(artistId || "1"),
    name: "KENNY BASS",
    location: "LONDON [IT]",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=600&fit=crop&crop=face",
    genre: "Electronic",
    followers: "2.5M",
    rating: 4.8,
    albums: 12,
    bio: "Kenny Bass is a pioneering electronic music producer known for his innovative soundscapes and captivating live performances. With over a decade of experience, he has shaped the electronic music scene with his unique blend of deep house and ambient techno.",
    joinedYear: "2018"
  };

  const topTracks: Track[] = [
    { id: 1, title: "Neon Dreams", duration: "4:32", plays: "2.1M", likes: "45K" },
    { id: 2, title: "Digital Waves", duration: "3:45", plays: "1.8M", likes: "38K" },
    { id: 3, title: "Cyber City", duration: "5:12", plays: "1.5M", likes: "32K" },
    { id: 4, title: "Electric Soul", duration: "4:08", plays: "1.2M", likes: "28K" },
    { id: 5, title: "Future Bass", duration: "3:56", plays: "980K", likes: "24K" }
  ];

  const albums: Album[] = [
    { id: 1, title: "Digital Revolution", year: "2024", tracks: 12, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
    { id: 2, title: "Neon Nights", year: "2023", tracks: 10, image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop" },
    { id: 3, title: "Electronic Dreams", year: "2022", tracks: 8, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Artist Header */}
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-secondary/10 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Artist Image */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden relative border-4 border-primary/20">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Play Button */}
                <div className="absolute bottom-8 right-8">
                  <Button size="lg" className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg">
                    <Play className="h-8 w-8 fill-current" />
                  </Button>
                </div>
              </div>

              {/* Artist Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-6xl md:text-8xl font-black tracking-wider text-primary mb-4">
                  {artist.name}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
                  <span className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-2" />
                    {artist.location}
                  </span>
                  <span className="flex items-center text-muted-foreground">
                    <Calendar className="h-5 w-5 mr-2" />
                    Joined {artist.joinedYear}
                  </span>
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {artist.genre}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mb-8 max-w-md mx-auto lg:mx-0">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-primary mr-2" />
                      <span className="text-2xl font-bold">{artist.followers}</span>
                    </div>
                    <p className="text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Music className="h-6 w-6 text-secondary mr-2" />
                      <span className="text-2xl font-bold">{artist.albums}</span>
                    </div>
                    <p className="text-muted-foreground">Albums</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-6 w-6 text-accent mr-2" />
                      <span className="text-2xl font-bold">{artist.rating}</span>
                    </div>
                    <p className="text-muted-foreground">Rating</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => navigate(`/booking?artist=${artist.id}`)}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Réserver cet artiste
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Plus className="mr-2 h-5 w-5" />
                    Follow
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Heart className="mr-2 h-5 w-5" />
                    Like
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Bio */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">About {artist.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                {artist.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Top Tracks */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Top Tracks</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {topTracks.map((track, index) => (
                <div key={track.id} className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-semibold">{track.plays}</p>
                        <p className="text-xs text-muted-foreground">Plays</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold">{track.likes}</p>
                        <p className="text-xs text-muted-foreground">Likes</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="hover:bg-secondary hover:text-secondary-foreground">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Albums */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Albums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {albums.map((album) => (
                <div key={album.id} className="group">
                  <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg group-hover:transform group-hover:-translate-y-2">
                    {/* Album Cover */}
                    <div className="relative h-64 bg-muted overflow-hidden">
                      <img 
                        src={album.image} 
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="lg" className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90">
                          <Play className="h-6 w-6 fill-current" />
                        </Button>
                      </div>
                    </div>

                    {/* Album Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {album.title}
                      </h3>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>{album.year}</span>
                        <span>{album.tracks} tracks</span>
                      </div>
                      <Button size="sm" className="w-full">
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtistProfile;
