import { Megaphone, Sparkles } from "lucide-react";

const AnnouncementBanner = () => {
  const announcement = "🎉 WEBINAIRE suivi du LANCEMENT OFFICIEL de Ubuntu Edutainment — Rejoignez-nous pour cet événement exclusif ! 🎶";
  
  return (
    <div className="bg-gradient-to-r from-primary via-accent to-secondary overflow-hidden py-3 relative z-50">
      {/* Scrolling container */}
      <div className="flex whitespace-nowrap" style={{ animation: 'scroll-banner 25s linear infinite' }}>
        {/* Repeat the content multiple times for seamless loop */}
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-6 px-8">
            <Megaphone className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white font-bold text-sm md:text-base tracking-wide">
              {announcement}
            </span>
            <Sparkles className="w-5 h-5 text-white flex-shrink-0" />
          </div>
        ))}
      </div>
      
      {/* Inline style for animation */}
      <style>{`
        @keyframes scroll-banner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;
