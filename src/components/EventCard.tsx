
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Tag } from "lucide-react";
import { Event } from "@/types/booking";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking?event=${event.id}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-primary';
      case 'past': return 'text-muted-foreground';
      case 'sold-out': return 'text-destructive';
      default: return 'text-primary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'À venir';
      case 'past': return 'Passé';
      case 'sold-out': return 'Complet';
      default: return 'À venir';
    }
  };

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative bg-gradient-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-cyan group-hover:transform group-hover:-translate-y-2">
        
        {/* Event Image */}
        <div className="relative h-48 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-black text-primary/30">♪</div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm ${getStatusColor(event.status)}`}>
              {getStatusText(event.status)}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {event.category}
            </span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Event Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </p>
          </div>

          {/* Event Details */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              {formatDate(event.date)} à {event.time}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 text-secondary" />
              {event.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2 text-accent" />
              {event.artists.map(artist => artist.name).join(", ")}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">
              {event.price === 'free' ? (
                <span className="text-primary">Gratuit</span>
              ) : (
                <span>{event.price.toLocaleString()} CFA</span>
              )}
            </div>
            
            {event.status === 'upcoming' && (
              <Button 
                size="sm"
                onClick={handleBooking}
                className="bg-primary hover:bg-primary/90"
              >
                Réserver
              </Button>
            )}
            
            {event.status === 'past' && (
              <Button 
                size="sm"
                variant="outline"
                disabled
              >
                Terminé
              </Button>
            )}
            
            {event.status === 'sold-out' && (
              <Button 
                size="sm"
                variant="destructive"
                disabled
              >
                Complet
              </Button>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-neon-cyan/60 rounded-full animate-pulse-glow" />
      </div>
    </div>
  );
};

export default EventCard;
