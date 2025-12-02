
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Calendar, User } from "lucide-react";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import { useArtist } from '@/hooks/useArtists';
import { useEvent } from '@/hooks/useEvents';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const artistId = searchParams.get('artist');
  const eventId = searchParams.get('event');

  const [currentStep, setCurrentStep] = useState(1);
  
  const { data: selectedArtist, isLoading: artistLoading } = useArtist(artistId || '');
  const { data: selectedEvent, isLoading: eventLoading } = useEvent(eventId || '');

  const isLoading = artistLoading || eventLoading;

  const steps = [
    { id: 1, title: "Service", icon: User },
    { id: 2, title: "Détails", icon: Calendar },
    { id: 3, title: "Contact", icon: User },
    { id: 4, title: "Confirmation", icon: Check }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </div>
      </div>
    );
  }

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
                  {selectedArtist.genre} • {selectedArtist.location}
                </p>
              )}
              
              {selectedEvent && (
                <p className="text-lg text-muted-foreground">
                  {new Date(selectedEvent.event_date).toLocaleDateString('fr-FR')} • {selectedEvent.location}
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
