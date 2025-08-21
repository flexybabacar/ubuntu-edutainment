
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  artists: Artist[];
  price: number | 'free';
  status: 'upcoming' | 'past' | 'sold-out';
  image: string;
  description: string;
  category: string;
}

export interface Artist {
  id: number;
  name: string;
  genre: string;
  location: string;
  image: string;
  followers: string;
  rating: number;
  albums: number;
  isAvailable: boolean;
  priceRange: string;
}

export interface BookingRequest {
  artistId?: number;
  eventId?: number;
  serviceType: string;
  date: string;
  duration: number;
  location: string;
  clientInfo: ClientInfo;
  budget: number;
  message: string;
}

export interface ClientInfo {
  name: string;
  email: string;
  phone: string;
  organization?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  duration: string;
}
