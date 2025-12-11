import { useQuery } from '@tanstack/react-query';

export interface Artist {
  id: string;
  name: string;
  genre: string;
  location: string;
  image_url?: string;
  followers: string;
  rating: number;
  albums_count: number;
  is_available: boolean;
  bio?: string;
  created_at: string;
}

// Mock data - same as used in pages
const mockArtistsData: Artist[] = [
  {
    id: "1",
    name: "Youssou N'Dour",
    genre: "Mbalax / World",
    location: "Sénégal",
    followers: "2.5M",
    rating: 4.9,
    albums_count: 28,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    bio: "Youssou N'Dour est l'un des plus grands artistes africains du 20e siècle.",
    created_at: "2015-01-15"
  },
  {
    id: "2",
    name: "Fela Kuti Legacy",
    genre: "Afrobeat",
    location: "Nigeria",
    followers: "3.1M",
    rating: 4.8,
    albums_count: 45,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    bio: "Fela Kuti est le père de l'afrobeat.",
    created_at: "2010-03-20"
  },
  {
    id: "3",
    name: "Miriam Makeba Tribute",
    genre: "Jazz / Soul",
    location: "Afrique du Sud",
    followers: "1.8M",
    rating: 4.7,
    albums_count: 22,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    bio: "Miriam Makeba, icône de la musique sud-africaine.",
    created_at: "2012-05-10"
  },
  {
    id: "4",
    name: "Hugh Masekela Spirit",
    genre: "Jazz / Fusion",
    location: "Namibie",
    followers: "2.2M",
    rating: 4.8,
    albums_count: 35,
    is_available: false,
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    bio: "Hugh Masekela a révolutionné le jazz sud-africain.",
    created_at: "2011-07-22"
  },
  {
    id: "5",
    name: "Angelique Kidjo",
    genre: "Afropop / World",
    location: "Bénin",
    followers: "2.8M",
    rating: 4.9,
    albums_count: 32,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    bio: "Angelique Kidjo, ambassadrice culturelle du Bénin.",
    created_at: "2013-09-08"
  },
  {
    id: "6",
    name: "Cécile McLorin Salvant",
    genre: "Jazz / Contemporary",
    location: "Martinique",
    followers: "1.5M",
    rating: 4.8,
    albums_count: 18,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    bio: "Cécile McLorin Salvant est une artiste jazz contemporaine.",
    created_at: "2014-11-30"
  },
  {
    id: "7",
    name: "Ali Farka Touré Spirit",
    genre: "Blues Africain",
    location: "Mali",
    followers: "2.1M",
    rating: 4.9,
    albums_count: 40,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    bio: "Ali Farka Touré a créé une fusion unique entre le blues américain et la musique traditionnelle malienne.",
    created_at: "2009-04-12"
  },
  {
    id: "8",
    name: "Oumou Sangaré",
    genre: "Traditionnelle / Moderne",
    location: "Mali",
    followers: "1.9M",
    rating: 4.8,
    albums_count: 12,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    bio: "Oumou Sangaré, l'une des plus grandes voix du Mali.",
    created_at: "2016-02-18"
  },
  {
    id: "9",
    name: "Rokia Traoré",
    genre: "World / Jazz Fusion",
    location: "Mali",
    followers: "1.6M",
    rating: 4.7,
    albums_count: 15,
    is_available: true,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    bio: "Rokia Traoré est une musicienne innovante qui fusionne la musique traditionnelle malienne avec le jazz contemporain.",
    created_at: "2017-06-25"
  }
];

export const useArtists = () => {
  return useQuery({
    queryKey: ['artists'],
    queryFn: async (): Promise<Artist[]> => {
      // Simulate a small delay like a real API call
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockArtistsData;
    },
  });
};

export const useArtist = (id: string) => {
  return useQuery({
    queryKey: ['artist', id],
    queryFn: async (): Promise<Artist | null> => {
      // Simulate a small delay like a real API call
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockArtistsData.find(artist => artist.id === id) || null;
    },
    enabled: !!id,
  });
};