
import { Button } from "@/components/ui/button";
import { Calendar, Music, Users, Gift, Filter } from "lucide-react";

interface EventFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const EventFilters = ({ selectedFilter, onFilterChange }: EventFiltersProps) => {
  const filters = [
    { id: "all", label: "Tous", icon: Filter },
    { id: "upcoming", label: "À venir", icon: Calendar },
    { id: "past", label: "Passés", icon: Calendar },
    { id: "free", label: "Gratuits", icon: Gift },
    { id: "concert", label: "Concerts", icon: Music },
    { id: "festival", label: "Festivals", icon: Users },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <Button
            key={filter.id}
            variant={selectedFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter.id)}
            className={`${
              selectedFilter === filter.id 
                ? "bg-primary text-primary-foreground" 
                : "border-border hover:bg-muted"
            } transition-all duration-200`}
          >
            <Icon className="h-4 w-4 mr-2" />
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
};

export default EventFilters;
