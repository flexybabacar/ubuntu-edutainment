
import { Button } from "@/components/ui/button";
import { Music, Video, Users, Calendar, Briefcase, Megaphone } from "lucide-react";
import { useServices } from '@/hooks/useServices';

interface ServiceSelectorProps {
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
  artistType?: string;
}

const ServiceSelector = ({ selectedService, onServiceSelect, artistType }: ServiceSelectorProps) => {
  const { data: services = [], isLoading } = useServices();
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-lg border-2 border-border animate-pulse">
            <div className="h-16 bg-muted rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  const getServiceIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase();
    if (name.includes("concert") || name.includes("performance")) return Music;
    if (name.includes("studio") || name.includes("enregistrement")) return Video;
    if (name.includes("collaboration")) return Users;
    if (name.includes("atelier") || name.includes("formation")) return Calendar;
    if (name.includes("événement") || name.includes("corporate")) return Briefcase;
    if (name.includes("campagne") || name.includes("social")) return Megaphone;
    return Music;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.filter(service => service.is_active).map((service) => {
        const Icon = getServiceIcon(service.name);
        const isSelected = selectedService === service.name;
        
        return (
          <button
            key={service.id}
            onClick={() => onServiceSelect(service.name)}
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
                    À partir de {Number(service.base_price).toLocaleString()} CFA
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
