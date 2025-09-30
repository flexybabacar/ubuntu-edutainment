import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Tag, Filter } from "lucide-react";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import EventFilters from "@/components/EventFilters";
import Footer from "@/components/Footer";
import { useEvents, Event } from '@/hooks/useEvents';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const { data: events = [], isLoading, error } = useEvents();

  const filteredEvents = events.filter(event => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "upcoming") return event.status === "upcoming";
    if (selectedFilter === "past") return event.status === "past";
    if (selectedFilter === "free") return event.price === null;
    return event.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des événements...</p>
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
            <p className="text-destructive mb-4">Erreur lors du chargement des événements</p>
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
                HOME / <span className="text-primary">ÉVÉNEMENTS</span>
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-4">
                ÉVÉNEMENTS
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos événements engagés qui transforment l'art en action sociale
              </p>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <EventFilters 
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard 
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun événement trouvé</h3>
                <p className="text-muted-foreground">Essayez de modifier vos filtres de recherche</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
