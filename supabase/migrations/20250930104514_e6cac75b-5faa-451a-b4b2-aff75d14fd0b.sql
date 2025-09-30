-- Create enum types for status fields
CREATE TYPE event_status AS ENUM ('upcoming', 'past', 'sold-out');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'rejected', 'completed');

-- Create artists table
CREATE TABLE public.artists (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    genre TEXT NOT NULL,
    location TEXT NOT NULL,
    image_url TEXT,
    followers TEXT NOT NULL,
    rating DECIMAL(3,2) NOT NULL DEFAULT 0.0,
    albums_count INTEGER NOT NULL DEFAULT 0,
    is_available BOOLEAN NOT NULL DEFAULT true,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create events table
CREATE TABLE public.events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    location TEXT NOT NULL,
    price DECIMAL(10,2),
    status event_status NOT NULL DEFAULT 'upcoming',
    image_url TEXT,
    category TEXT NOT NULL,
    max_capacity INTEGER,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create event_artists junction table (many-to-many)
CREATE TABLE public.event_artists (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    artist_id UUID NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(event_id, artist_id)
);

-- Create services table
CREATE TABLE public.services (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    base_price DECIMAL(10,2) NOT NULL,
    duration TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create booking_requests table
CREATE TABLE public.booking_requests (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    artist_id UUID REFERENCES public.artists(id) ON DELETE SET NULL,
    event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
    service_type TEXT NOT NULL,
    event_date DATE NOT NULL,
    duration INTEGER NOT NULL,
    location TEXT NOT NULL,
    budget DECIMAL(10,2) NOT NULL,
    message TEXT,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT NOT NULL,
    client_organization TEXT,
    status booking_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to artists, events, services
CREATE POLICY "Artists are viewable by everyone" 
ON public.artists FOR SELECT USING (true);

CREATE POLICY "Events are viewable by everyone" 
ON public.events FOR SELECT USING (true);

CREATE POLICY "Event artists are viewable by everyone" 
ON public.event_artists FOR SELECT USING (true);

CREATE POLICY "Services are viewable by everyone" 
ON public.services FOR SELECT USING (true);

-- Booking requests policies (more restrictive)
CREATE POLICY "Anyone can create booking requests" 
ON public.booking_requests FOR INSERT WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_artists_updated_at
    BEFORE UPDATE ON public.artists
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON public.events
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON public.services
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_booking_requests_updated_at
    BEFORE UPDATE ON public.booking_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample artists data
INSERT INTO public.artists (name, genre, location, followers, rating, albums_count, is_available, bio) VALUES
('Amara Kone', 'Afrobeat', 'Bamako, Mali', '2.5M', 4.8, 12, true, 'Artiste malienne reconnue internationalement pour ses mélodies afrobeat modernes.'),
('Djembe Masters', 'Traditionnel', 'Conakry, Guinée', '890K', 4.9, 8, true, 'Groupe traditionnel spécialisé dans les rythmes djembé authentiques.'),
('Sabar Collective', 'Sabar', 'Dakar, Sénégal', '1.2M', 4.7, 15, true, 'Collectif de musiciens sabar du Sénégal, gardiens des traditions wolof.'),
('Kora Dreams', 'Néo-traditionnel', 'Banjul, Gambie', '650K', 4.6, 6, false, 'Duo moderne revisitant les classiques de la kora avec des influences contemporaines.'),
('Mandingo Fusion', 'World Fusion', 'Bissau, Guinée-Bissau', '1.8M', 4.9, 20, true, 'Groupe fusion mélangeant traditions mandingues et sonorités modernes.');

-- Insert sample events data
INSERT INTO public.events (title, description, event_date, event_time, location, price, status, category, max_capacity) VALUES
('Festival Ubuntu 2024', 'Grand festival célébrant la diversité culturelle africaine', '2024-07-15', '18:00', 'Parc de la Villette, Paris', 45.00, 'upcoming', 'Festival', 5000),
('Nuit Afrobeat', 'Soirée dédiée aux rythmes afrobeat avec Amara Kone', '2024-06-20', '20:30', 'Le Trianon, Paris', 32.00, 'upcoming', 'Concert', 1200),
('Atelier Djembé', 'Atelier participatif avec les Djembe Masters', '2024-05-25', '14:00', 'Maison des Cultures du Monde', 15.00, 'past', 'Atelier', 80),
('Concert Sabar', 'Performance traditionnelle du Sabar Collective', '2024-08-10', '19:00', 'Théâtre de la Cité Internationale', 28.00, 'sold-out', 'Concert', 800);

-- Insert sample services data
INSERT INTO public.services (name, description, base_price, duration) VALUES
('Concert privé', 'Performance musicale pour événement privé', 1500.00, '2-3 heures'),
('Animation mariage', 'Prestation complète pour célébration de mariage', 2000.00, '4-6 heures'),
('Atelier musical', 'Cours et initiation aux instruments traditionnels', 300.00, '1-2 heures'),
('Spectacle corporatif', 'Performance adaptée pour événements d''entreprise', 2500.00, '1-2 heures'),
('Festival', 'Participation à festival ou événement culturel', 5000.00, '30-60 minutes');

-- Link artists to events (sample data)
INSERT INTO public.event_artists (event_id, artist_id) 
SELECT e.id, a.id 
FROM public.events e, public.artists a 
WHERE (e.title = 'Festival Ubuntu 2024' AND a.name IN ('Amara Kone', 'Djembe Masters', 'Sabar Collective'))
   OR (e.title = 'Nuit Afrobeat' AND a.name = 'Amara Kone')
   OR (e.title = 'Atelier Djembé' AND a.name = 'Djembe Masters')
   OR (e.title = 'Concert Sabar' AND a.name = 'Sabar Collective');