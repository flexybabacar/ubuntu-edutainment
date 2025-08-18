import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AlbumSection from "@/components/AlbumSection";
import ArtistSection from "@/components/ArtistSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 pb-20">
        <HeroSection />
        <AlbumSection />
        <ArtistSection />
      </main>
    </div>
  );
};

export default Index;
