import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UbuntuSection from "@/components/UbuntuSection";
import ServicesSection from "@/components/ServicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import FeaturedArtistsSection from "@/components/FeaturedArtistsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ubuntu Section */}
      <UbuntuSection />

      {/* Artists Section - Using FeaturedArtistsSection with DB data */}
      <FeaturedArtistsSection />

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
