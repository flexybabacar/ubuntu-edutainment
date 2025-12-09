import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UbuntuSection from "@/components/UbuntuSection";
import ServicesSection from "@/components/ServicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Eye, Users, Star, MapPin, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useArtists, Artist } from '@/hooks/useArtists';

const Index = () => {
  const navigate = useNavigate();
  
  const { data: allArtists = [], isLoading } = useArtists();
  const artists = allArtists.slice(0, 6); // Show only first 6 artists on homepage

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ubuntu Section */}
      <UbuntuSection />

      {/* Artists Section */}
      <section id="artists-section" className="py-24 bg-background relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-muted/20 opacity-30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-muted/10 opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-primary">
                NOS ARTISTES
              </h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
            <p className="text-muted-foreground text-lg tracking-wide">Découvrez les voix du changement social</p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Artistes Engagés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Événements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15</div>
                <div className="text-sm text-muted-foreground">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Personnes Touchées</div>
              </div>
            </div>
          </div>
          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <div className="aspect-square bg-muted rounded-lg mb-6 animate-pulse"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
                  </div>
                </div>
              ))
            ) : (
              artists.map((artist, index) => (
              <div 
                key={artist.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

                    {/* View Profile Button */}
                    <Button 
                      size="sm" 
                      onClick={() => navigate(`/artist/${artist.id}`)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    >
                      <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Voir le Profil
                    </Button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              ))
            )}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/artists')}
              className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              VOIR TOUS LES ARTISTES
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Call to Action Section */}
      <CallToActionSection />
      
      <Footer />
    </div>
  );
};

export default Index;
