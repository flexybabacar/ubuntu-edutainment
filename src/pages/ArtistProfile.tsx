import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Users, Music, Star, MapPin, Calendar, Download, ArrowLeft, Instagram, Facebook, Twitter } from "lucide-react";
import Footer from "@/components/Footer";

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

interface Artist {
  id: string;
  name: string;
  genre: string;
  location: string;
  followers: string;
  rating: number;
  albums_count: number;
  is_available: boolean;
  image_url: string;
  bio: string;
  created_at: string;
}

// Mock data - same as in Index.tsx and Artists.tsx
const mockArtistsData: { [key: string]: Artist } = {
  "1": {
    id: "1",
    name: "Youssou N'Dour",
    genre: "Mbalax / World",
    location: "Sénégal",
    followers: "2.5M",
    rating: 4.9,
    albums_count: 28,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    bio: "Youssou N'Dour est l'un des plus grands artistes africains du 20e siècle. Avec sa voix distinctive et son style unique de mbalax, il a révolutionné la musique sénégalaise et africaine. Engagé socialement et politiquement, il utilise la musique comme vecteur de changement social et de paix.",
    created_at: "2015-01-15"
  },
  "2": {
    id: "2",
    name: "Fela Kuti Legacy",
    genre: "Afrobeat",
    location: "Nigeria",
    followers: "3.1M",
    rating: 4.8,
    albums_count: 45,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    bio: "Fela Kuti est le père de l'afrobeat, un genre révolutionnaire qui fusionne le jazz, le highlife et la musique traditionnelle nigériane. Son héritage perdure à travers sa musique intemporelle et son message d'unité africaine.",
    created_at: "2010-03-20"
  },
  "3": {
    id: "3",
    name: "Miriam Makeba Tribute",
    genre: "Jazz / Soul",
    location: "Afrique du Sud",
    followers: "1.8M",
    rating: 4.7,
    albums_count: 22,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    bio: "Miriam Makeba, icône de la musique sud-africaine, a utilisé sa voix magnifique pour combattre l'apartheid. Son héritage inspire les artistes qui, aujourd'hui, continuent son combat pour la justice et l'égalité.",
    created_at: "2012-05-10"
  },
  "4": {
    id: "4",
    name: "Hugh Masekela Spirit",
    genre: "Jazz / Fusion",
    location: "Namibie",
    followers: "2.2M",
    rating: 4.8,
    albums_count: 35,
    is_available: false,
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    bio: "Hugh Masekela a révolutionné le jazz sud-africain avec sa trompette poétique. Son œuvre, riche et émouvante, reflète les luttes et les rêves du peuple africain.",
    created_at: "2011-07-22"
  },
  "5": {
    id: "5",
    name: "Angelique Kidjo",
    genre: "Afropop / World",
    location: "Bénin",
    followers: "2.8M",
    rating: 4.9,
    albums_count: 32,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    bio: "Angelique Kidjo, ambassadrice culturelle du Bénin, est reconnue pour sa voix puissante et son engagement envers les droits des femmes et l'éducation en Afrique. Elle fusionne les traditions africaines avec la musique contemporaine.",
    created_at: "2013-09-08"
  },
  "6": {
    id: "6",
    name: "Cécile McLorin Salvant",
    genre: "Jazz / Contemporary",
    location: "Martinique",
    followers: "1.5M",
    rating: 4.8,
    albums_count: 18,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    bio: "Cécile McLorin Salvant est une artiste jazz contemporaine qui repoussent les limites du genre. Avec sa voix expressive et son répertoire varié, elle crée une musique profonde et introspective.",
    created_at: "2014-11-30"
  },
  "7": {
    id: "7",
    name: "Ali Farka Touré Spirit",
    genre: "Blues Africain",
    location: "Mali",
    followers: "2.1M",
    rating: 4.9,
    albums_count: 40,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    bio: "Ali Farka Touré a créé une fusion unique entre le blues américain et la musique traditionnelle malienne. Son influence sur la musique mondiale est immense et durable.",
    created_at: "2009-04-12"
  },
  "8": {
    id: "8",
    name: "Oumou Sangaré",
    genre: "Traditionnelle / Moderne",
    location: "Mali",
    followers: "1.9M",
    rating: 4.8,
    albums_count: 12,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    bio: "Oumou Sangaré, l'une des plus grandes voix du Mali, défend les droits des femmes à travers sa musique. Elle respecte les traditions tout en évoluant vers une modernité consciente.",
    created_at: "2016-02-18"
  },
  "9": {
    id: "9",
    name: "Rokia Traoré",
    genre: "World / Jazz Fusion",
    location: "Mali",
    followers: "1.6M",
    rating: 4.7,
    albums_count: 15,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    bio: "Rokia Traoré est une musicienne innovante qui fusionne la musique traditionnelle malienne avec le jazz contemporain. Son art transcende les frontières et les cultures.",
    created_at: "2017-06-25"
  }
};

const ArtistProfile = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const navigate = useNavigate();
  
  console.log("ID reçu dans la page profil :", artistId);
  
  // Get artist data from mock data
  const artist = artistId ? mockArtistsData[artistId] : null;

  if (!artist) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-destructive mb-4">Artiste non trouvé</p>
            <Button onClick={() => navigate('/artists')}>Retour aux artistes</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const topTracks: Track[] = [
    { id: 1, title: "Révolution Silencieuse", duration: "4:32", plays: "2.1M", likes: "45K" },
    { id: 2, title: "Voix de l'Afrique", duration: "3:45", plays: "1.8M", likes: "38K" },
    { id: 3, title: "Ubuntu", duration: "5:12", plays: "1.5M", likes: "32K" },
    { id: 4, title: "Liberté", duration: "4:08", plays: "1.2M", likes: "28K" },
    { id: 5, title: "Renaissance", duration: "3:56", plays: "980K", likes: "24K" }
  ];

  const albums: Album[] = [
    { id: 1, title: "Héritage Moderne", year: "2024", tracks: 12, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
    { id: 2, title: "Racines Urbaines", year: "2023", tracks: 10, image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop" },
    { id: 3, title: "Échos d'Afrique", year: "2022", tracks: 8, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Back Button */}
        <section className="py-4 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/artists')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux artistes
            </Button>
          </div>
        </section>

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
                    src={artist.image_url || "/placeholder.svg"} 
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

                {/* Availability Badge */}
                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-medium ${
                  artist.is_available 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-red-500/90 text-white'
                }`}>
                  {artist.is_available ? 'Disponible' : 'Indisponible'}
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
                    Actif depuis {new Date(artist.created_at).getFullYear()}
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
                      <span className="text-2xl font-bold">{artist.albums_count}</span>
                    </div>
                    <p className="text-muted-foreground">Albums</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-6 w-6 text-accent mr-2" />
                      <span className="text-2xl font-bold">{artist.rating}</span>
                    </div>
                    <p className="text-muted-foreground">Note</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => navigate(`/booking?artist=${artist.id}`)}
                    disabled={!artist.is_available}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    {artist.is_available ? 'Réserver cet artiste' : 'Indisponible'}
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
              <h2 className="text-3xl font-bold mb-6 text-center">À propos de {artist.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                {artist.bio || "Aucune biographie disponible pour le moment."}
              </p>
            </div>
          </div>
        </section>

        {/* Top Tracks */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Morceaux populaires</h2>
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
                        <p className="text-xs text-muted-foreground">Écoutes</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold">{track.likes}</p>
                        <p className="text-xs text-muted-foreground">J'aime</p>
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
                        <span>{album.tracks} morceaux</span>
                      </div>
                      <Button size="sm" className="w-full">
                        Écouter maintenant
                      </Button>
                    </div>
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

export default ArtistProfile;
