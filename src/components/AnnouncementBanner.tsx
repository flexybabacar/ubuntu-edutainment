import { Megaphone, Calendar, ArrowRight } from "lucide-react";

const AnnouncementBanner = () => {
  const announcement = "🎉 WEBINAIRE suivi du LANCEMENT OFFICIEL de Ubuntu Edutainment — Rejoignez-nous pour cet événement exclusif ! 🎶";
  
  return (
    <div className="bg-gradient-to-r from-primary via-accent to-secondary overflow-hidden py-2.5 relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
      </div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the content multiple times for seamless loop */}
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-8">
            <div className="flex items-center gap-3">
              <Megaphone className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white font-bold text-sm md:text-base tracking-wide">
                {announcement}
              </span>
              <Calendar className="w-4 h-4 text-white/80" />
              <ArrowRight className="w-4 h-4 text-white animate-bounce" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
