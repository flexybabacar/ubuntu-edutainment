import { Button } from "@/components/ui/button";
import { Eye, Users, Star, MapPin, Music } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Artist } from "@/hooks/useArtists";

interface ArtistCardProps {
  artist: Artist;
  index?: number;
  variant?: "default" | "compact";
}

const ArtistCard = ({ artist, index = 0, variant = "default" }: ArtistCardProps) => {
  const navigate = useNavigate();

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/booking?artist=${artist.id}`);
  };

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/artist/${artist.id}`} className="block">
        <div className="relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg overflow-hidden group-hover:transform group-hover:-translate-y-2">
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          {/* Artist Photo */}
          <div className="relative mb-6">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
              <img 
                src={artist.image_url || "/placeholder.svg"} 
                alt={artist.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Availability Badge */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                artist.is_available 
                  ? 'bg-green-500/90 text-white' 
                  : 'bg-red-500/90 text-white'
              }`}>
                {artist.is_available ? 'Disponible' : 'Indisponible'}
              </div>
            </div>
          </div>

          {/* Artist Info */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {artist.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{artist.genre}</p>
              <div className="flex items-center justify-center text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="text-xs">{artist.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                <span>{artist.followers}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1 text-yellow-500" />
                <span>{artist.rating}</span>
              </div>
              <div className="flex items-center">
                <Music className="h-3 w-3 mr-1" />
                <span>{artist.albums_count} albums</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Eye className="h-4 w-4 mr-2" />
                Voir le Profil
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="flex-1"
                onClick={handleBookClick}
              >
                Réserver
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </Link>
    </div>
  );
};

export default ArtistCard;
