import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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
  updated_at: string;
}

export const useArtists = () => {
  return useQuery({
    queryKey: ['artists'],
    queryFn: async (): Promise<Artist[]> => {
      const { data, error } = await supabase
        .from('artists')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch artists: ${error.message}`);
      }

      return data || [];
    },
  });
};

export const useArtist = (id: string) => {
  return useQuery({
    queryKey: ['artist', id],
    queryFn: async (): Promise<Artist | null> => {
      const { data, error } = await supabase
        .from('artists')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        throw new Error(`Failed to fetch artist: ${error.message}`);
      }

      return data;
    },
    enabled: !!id,
  });
};