
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
import ServiceSelector from "@/components/ServiceSelector";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import type { Artist } from '@/hooks/useArtists';
import type { Event } from '@/hooks/useEvents';

const bookingSchema = z.object({
  client_name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  client_email: z.string().trim().email("Email invalide").max(255, "L'email ne peut pas dépasser 255 caractères"),
  client_phone: z.string().trim().min(8, "Numéro de téléphone invalide").max(20, "Le numéro ne peut pas dépasser 20 caractères"),
  client_organization: z.string().trim().max(200, "Le nom de l'organisation ne peut pas dépasser 200 caractères").optional(),
  location: z.string().trim().min(3, "Le lieu doit contenir au moins 3 caractères").max(200, "Le lieu ne peut pas dépasser 200 caractères"),
  message: z.string().trim().max(2000, "Le message ne peut pas dépasser 2000 caractères").optional(),
  budget: z.number().min(0, "Le budget doit être positif").max(1000000000, "Budget trop élevé"),
  duration: z.number().min(1, "La durée doit être d'au moins 1 heure").max(24, "La durée ne peut pas dépasser 24 heures"),
});

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState({
    duration: 2,
    budget: 0,
    message: "",
    location: ""
  });
  
  const [clientInfo, setClientInfo] = useState({
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

  const handleSubmit = async () => {
    if (!date || !selectedService) return;
    
    setIsSubmitting(true);
    
    try {
      // Validate data
      const validatedData = bookingSchema.parse({
        client_name: clientInfo.name,
        client_email: clientInfo.email,
        client_phone: clientInfo.phone,
        client_organization: clientInfo.organization || undefined,
        location: bookingData.location,
        message: bookingData.message || undefined,
        budget: bookingData.budget,
        duration: bookingData.duration,
      });

      // Insert booking request into database
      const { error } = await supabase
        .from('booking_requests')
        .insert({
          artist_id: selectedArtist?.id || null,
          event_id: selectedEvent?.id || null,
          service_type: selectedService,
          event_date: format(date, 'yyyy-MM-dd'),
          duration: validatedData.duration,
          location: validatedData.location,
          budget: validatedData.budget,
          message: validatedData.message,
          client_name: validatedData.client_name,
          client_email: validatedData.client_email,
          client_phone: validatedData.client_phone,
          client_organization: validatedData.client_organization,
        });

      if (error) throw error;

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les 24h pour confirmer votre réservation.",
      });
      
      onStepChange(4);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={!clientInfo.name || !clientInfo.email || !clientInfo.phone || isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
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
