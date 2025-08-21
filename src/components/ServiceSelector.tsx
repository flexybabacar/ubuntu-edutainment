
import { Button } from "@/components/ui/button";
import { Music, Video, Users, Calendar, Briefcase, Megaphone } from "lucide-react";
import { Service } from "@/types/booking";

interface ServiceSelectorProps {
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
  artistType?: string;
}

const ServiceSelector = ({ selectedService, onServiceSelect, artistType }: ServiceSelectorProps) => {
  const services: Service[] = [
    {
      id: "concert",
      name: "Concert / Performance Live",
      description: "Performance live pour votre événement",
      basePrice: 500000,
      duration: "2-4 heures"
    },
    {
      id: "studio",
      name: "Session Studio",
      description: "Enregistrement en studio professionnel",
      basePrice: 200000,
      duration: "Journée complète"
    },
    {
      id: "collaboration",
      name: "Collaboration Artistique",
      description: "Création d'une œuvre collaborative",
      basePrice: 300000,
      duration: "Selon projet"
    },
    {
      id: "workshop",
      name: "Atelier / Formation",
      description: "Atelier artistique ou formation",
      basePrice: 150000,
      duration: "2-3 heures"
    },
    {
      id: "event",
      name: "Animation Événementielle",
      description: "Animation pour votre événement corporate",
      basePrice: 400000,
      duration: "Selon événement"
    },
    {
      id: "campaign",
      name: "Campagne Sociale",
      description: "Création pour campagne d'engagement social",
      basePrice: 600000,
      duration: "Projet complet"
    }
  ];

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case "concert": return Music;
      case "studio": return Video;
      case "collaboration": return Users;
      case "workshop": return Calendar;
      case "event": return Briefcase;
      case "campaign": return Megaphone;
      default: return Music;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service) => {
        const Icon = getServiceIcon(service.id);
        const isSelected = selectedService === service.id;
        
        return (
          <button
            key={service.id}
            onClick={() => onServiceSelect(service.id)}
            className={`relative p-6 rounded-lg border-2 transition-all duration-300 text-left hover:shadow-lg ${
              isSelected 
                ? "border-primary bg-primary/5 shadow-lg" 
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}>
                <Icon className="h-6 w-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    À partir de {service.basePrice.toLocaleString()} CFA
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {service.duration}
                  </span>
                </div>
              </div>
            </div>
            
            {isSelected && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ServiceSelector;
