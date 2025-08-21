
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Artist, Event, BookingRequest, ClientInfo } from "@/types/booking";
import ServiceSelector from "@/components/ServiceSelector";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  selectedArtist: Artist | null;
  selectedEvent: Event | null;
}

const BookingForm = ({ currentStep, onStepChange, selectedArtist, selectedEvent }: BookingFormProps) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [bookingData, setBookingData] = useState<Partial<BookingRequest>>({
    duration: 2,
    budget: 0,
    message: ""
  });
  
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: "",
    email: "",
    phone: "",
    organization: ""
  });

  const handleNext = () => {
    if (currentStep < 4) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simuler l'envoi du formulaire
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les 24h pour confirmer votre réservation.",
    });
    
    setTimeout(() => {
      onStepChange(4);
    }, 1000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Sélectionnez un service</h2>
              <p className="text-muted-foreground mb-6">
                Choisissez le type de prestation que vous souhaitez réserver
              </p>
            </div>
            
            <ServiceSelector 
              selectedService={selectedService}
              onServiceSelect={setSelectedService}
              artistType={selectedArtist?.genre}
            />

            <div className="flex justify-end">
              <Button 
                onClick={handleNext}
                disabled={!selectedService}
                className="px-8"
              >
                Continuer
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Détails de l'événement</h2>
              <p className="text-muted-foreground mb-6">
                Précisez les informations sur votre événement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date souhaitée</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Durée (heures)</Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  max="12"
                  value={bookingData.duration}
                  onChange={(e) => setBookingData({...bookingData, duration: parseInt(e.target.value)})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="location">Lieu de l'événement</Label>
                <Input
                  id="location"
                  placeholder="Ex: Centre Culturel, Dakar"
                  value={bookingData.location}
                  onChange={(e) => setBookingData({...bookingData, location: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="budget">Budget estimé (CFA)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Ex: 500000"
                  value={bookingData.budget}
                  onChange={(e) => setBookingData({...bookingData, budget: parseInt(e.target.value)})}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                Retour
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!date || !bookingData.location}
              >
                Continuer
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Vos informations</h2>
              <p className="text-muted-foreground mb-6">
                Nous avons besoin de ces informations pour finaliser la réservation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  placeholder="Votre nom complet"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  placeholder="+221 XX XXX XX XX"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organisation (optionnel)</Label>
                <Input
                  id="organization"
                  placeholder="Nom de votre organisation"
                  value={clientInfo.organization}
                  onChange={(e) => setClientInfo({...clientInfo, organization: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message additionnel</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet, vos attentes particulières..."
                  rows={4}
                  value={bookingData.message}
                  onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                Retour
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!clientInfo.name || !clientInfo.email || !clientInfo.phone}
              >
                Envoyer la demande
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6 py-12">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Demande envoyée !</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Merci pour votre demande de réservation. Notre équipe va l'examiner et vous contacter 
                dans les 24 heures pour confirmer les détails et finaliser la réservation.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6 max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Récapitulatif de votre demande</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                {selectedArtist && <p><strong>Artiste :</strong> {selectedArtist.name}</p>}
                {selectedService && <p><strong>Service :</strong> {selectedService}</p>}
                {date && <p><strong>Date :</strong> {format(date, "PPP", { locale: fr })}</p>}
                {bookingData.location && <p><strong>Lieu :</strong> {bookingData.location}</p>}
              </div>
            </div>

            <Button onClick={() => window.location.href = "/"} size="lg">
              Retour à l'accueil
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-card rounded-xl p-8 border border-border/50">
      {renderStepContent()}
    </div>
  );
};

export default BookingForm;
