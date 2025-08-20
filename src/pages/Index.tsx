import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArtistSection from "@/components/ArtistSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
      <Navigation />
      <main className="pt-16 pb-20">
        <HeroSection />
        <ArtistSection />
      </main>
    </div>
  );
};

export default Index;
