
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Tag, Filter } from "lucide-react";
import { useState } from "react";
import { Event } from "@/types/booking";
import EventCard from "@/components/EventCard";
import EventFilters from "@/components/EventFilters";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const events: Event[] = [
    {
      id: 1,
      title: "Concert pour le Climat",
      date: "2024-09-15",
      time: "20:00",
      location: "Théâtre National, Dakar",
      artists: [
        { id: 1, name: "Amara Kone", genre: "Afro-Pop Engagé", location: "Dakar", image: "", followers: "45K", rating: 4.8, albums: 3, isAvailable: true, priceRange: "500K-1M CFA" }
      ],
      price: 15000,
      status: "upcoming",
      image: "",
      description: "Un concert engagé pour sensibiliser au changement climatique",
      category: "Concert"
    },
    {
      id: 2,
      title: "Festival Ubuntu Arts",
      date: "2024-10-20",
      time: "14:00",
      location: "Centre Culturel Blaise Senghor, Dakar",
      artists: [
        { id: 2, name: "Khalil Senghor", genre: "Rap Conscient", location: "Dakar", image: "", followers: "32K", rating: 4.6, albums: 2, isAvailable: true, priceRange: "300K-800K CFA" },
        { id: 3, name: "Fatou Diallo", genre: "World Music", location: "Thiès", image: "", followers: "28K", rating: 4.7, albums: 4, isAvailable: false, priceRange: "400K-900K CFA" }
      ],
      price: "free",
      status: "upcoming",
      image: "",
      description: "Festival célébrant l'art engagé et la philosophie Ubuntu",
      category: "Festival"
    },
    {
      id: 3,
      title: "Soirée Poésie & Justice",
      date: "2024-08-10",
      time: "19:30",
      location: "Institut Français, Saint-Louis",
      artists: [
        { id: 4, name: "Moussa Ba", genre: "Spoken Word", location: "Saint-Louis", image: "", followers: "18K", rating: 4.5, albums: 1, isAvailable: true, priceRange: "200K-500K CFA" }
      ],
      price: 8000,
      status: "past",
      image: "",
      description: "Une soirée mêlant poésie et engagement social",
      category: "Soirée"
    }
  ];

  const filteredEvents = events.filter(event => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "upcoming") return event.status === "upcoming";
    if (selectedFilter === "past") return event.status === "past";
    if (selectedFilter === "free") return event.price === "free";
    return event.category.toLowerCase() === selectedFilter.toLowerCase();
  });

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
    </div>
  );
};

export default Events;
