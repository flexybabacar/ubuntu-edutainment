
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Calendar, User, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import { Artist, Event } from "@/types/booking";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const artistId = searchParams.get('artist');
  const eventId = searchParams.get('event');

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Mock data - remplacer par des appels API
  const mockArtist: Artist = {
    id: 1,
    name: "Amara Kone",
    genre: "Afro-Pop Engagé",
    location: "Dakar",
    image: "",
    followers: "45K",
    rating: 4.8,
    albums: 3,
    isAvailable: true,
    priceRange: "500K-1M CFA"
  };

  const mockEvent: Event = {
    id: 1,
    title: "Concert pour le Climat",
    date: "2024-09-15",
    time: "20:00",
    location: "Théâtre National, Dakar",
    artists: [mockArtist],
    price: 15000,
    status: "upcoming",
    image: "",
    description: "Un concert engagé pour sensibiliser au changement climatique",
    category: "Concert"
  };

  useEffect(() => {
    if (artistId) {
      setSelectedArtist(mockArtist);
    }
    if (eventId) {
      setSelectedEvent(mockEvent);
    }
  }, [artistId, eventId]);

  const steps = [
    { id: 1, title: "Service", icon: User },
    { id: 2, title: "Détails", icon: Calendar },
    { id: 3, title: "Contact", icon: User },
    { id: 4, title: "Confirmation", icon: Check }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        {/* Header */}
        <section className="py-16 bg-dark-surface">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-wider bg-gradient-hero bg-clip-text text-transparent mb-4">
                {selectedArtist ? `RÉSERVER ${selectedArtist.name.toUpperCase()}` : 
                 selectedEvent ? `RÉSERVER - ${selectedEvent.title.toUpperCase()}` : 
                 'RÉSERVATION'}
              </h1>
              
              {selectedArtist && (
                <p className="text-lg text-muted-foreground">
                  {selectedArtist.genre} • {selectedArtist.location} • {selectedArtist.priceRange}
                </p>
              )}
              
              {selectedEvent && (
                <p className="text-lg text-muted-foreground">
                  {new Date(selectedEvent.date).toLocaleDateString('fr-FR')} • {selectedEvent.location}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-8 max-w-2xl">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;
                  
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        isCompleted ? 'bg-primary border-primary text-primary-foreground' :
                        isActive ? 'border-primary text-primary' :
                        'border-border text-muted-foreground'
                      }`}>
                        {isCompleted ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <Icon className="h-5 w-5" />
                        )}
                      </div>
                      
                      <div className="ml-3 hidden sm:block">
                        <p className={`text-sm font-medium ${
                          isActive ? 'text-primary' : 
                          isCompleted ? 'text-foreground' : 
                          'text-muted-foreground'
                        }`}>
                          Étape {step.id}
                        </p>
                        <p className={`text-xs ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                          {step.title}
                        </p>
                      </div>
                      
                      {index < steps.length - 1 && (
                        <div className={`w-16 h-0.5 mx-6 ${
                          isCompleted ? 'bg-primary' : 'bg-border'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <BookingForm 
              currentStep={currentStep}
              onStepChange={setCurrentStep}
              selectedArtist={selectedArtist}
              selectedEvent={selectedEvent}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Booking;
