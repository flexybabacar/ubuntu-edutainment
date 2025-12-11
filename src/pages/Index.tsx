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

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ubuntu Section */}
      <UbuntuSection />

      {/* Artists Section */}
      <section id="artists-section" className="py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent opacity-40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent opacity-30 rounded-full blur-3xl" />
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
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

          {/* Artists Grid with Mock Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: "1",
                name: "Youssou N'Dour",
                genre: "Mbalax / World",
                location: "Sénégal",
                followers: "2.5M",
                rating: 4.9,
                albums_count: 28,
                is_available: true,
                image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
              },
              {
                id: "2",
                name: "Fela Kuti Legacy",
                genre: "Afrobeat",
                location: "Nigeria",
                followers: "3.1M",
                rating: 4.8,
                albums_count: 45,
                is_available: true,
                image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop"
              },
              {
                id: "3",
                name: "Miriam Makeba Tribute",
                genre: "Jazz / Soul",
                location: "Afrique du Sud",
                followers: "1.8M",
                rating: 4.7,
                albums_count: 22,
                is_available: true,
                image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
              },
              {
                id: "4",
                name: "Hugh Masekela Spirit",
                genre: "Jazz / Fusion",
                location: "Namibie",
                followers: "2.2M",
                rating: 4.8,
                albums_count: 35,
                is_available: false,
                image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
              },
              {
                id: "5",
                name: "Angelique Kidjo",
                genre: "Afropop / World",
                location: "Bénin",
                followers: "2.8M",
                rating: 4.9,
                albums_count: 32,
                is_available: true,
                image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop"
              },
              {
                id: "6",
                name: "Cécile McLorin Salvant",
                genre: "Jazz / Contemporary",
                location: "Martinique",
                followers: "1.5M",
                rating: 4.8,
                albums_count: 18,
                is_available: true,
                image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
              }
            ].map((artist, index) => (
              <div 
                key={artist.id}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                  
                  {/* Artist Photo */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <div className="aspect-square bg-muted overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={artist.image_url} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Availability Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        artist.is_available 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-red-500/90 text-white'
                      }`}>
                        {artist.is_available ? '✓ Disponible' : '✗ Indisponible'}
                      </div>

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="w-14 h-14 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform group-hover:scale-110 transition-all">
                          <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3 mb-4">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                          {artist.name}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">{artist.genre}</p>
                        <div className="flex items-center justify-center text-muted-foreground mt-2">
                          <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                          <span className="text-xs">{artist.location}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                        <div className="text-center">
                          <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <div className="font-semibold text-xs">{artist.followers}</div>
                          <div className="text-muted-foreground text-xs">Followers</div>
                        </div>
                        <div className="text-center">
                          <Star className="h-4 w-4 mx-auto mb-1 text-yellow-500" />
                          <div className="font-semibold text-xs">{artist.rating}</div>
                          <div className="text-muted-foreground text-xs">Rating</div>
                        </div>
                        <div className="text-center">
                          <Music className="h-4 w-4 mx-auto mb-1 text-accent" />
                          <div className="font-semibold text-xs">{artist.albums_count}</div>
                          <div className="text-muted-foreground text-xs">Albums</div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-2">
                      <Button 
                        size="sm" 
                        onClick={() => {
                          console.log('Profile clicked for artist:', artist.id, artist.name);
                          navigate(`/artist/${artist.id}`);
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group/btn"
                      >
                        <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Voir le Profil
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-primary/30 text-foreground hover:bg-primary/10 font-medium"
                      >
                        Suivre
                      </Button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/40 rounded-full animate-pulse" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center pt-8">
            <Button 
              size="lg" 
              onClick={() => navigate('/artists')}
              className="px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg group"
            >
              <Users className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              DÉCOUVRIR TOUS LES ARTISTES
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
