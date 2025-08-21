
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UbuntuSection from "@/components/UbuntuSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedArtistsSection from "@/components/FeaturedArtistsSection";
import CallToActionSection from "@/components/CallToActionSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
      <Navigation />
      <main className="pt-16 pb-0">
        <HeroSection />
        <UbuntuSection />
        <ServicesSection />
        <FeaturedArtistsSection />
        <CallToActionSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
