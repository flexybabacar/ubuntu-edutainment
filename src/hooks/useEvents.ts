import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Event {
  id: string;
  title: string;
  description?: string;
  event_date: string;
  event_time: string;
  location: string;
  price?: number;
  status: 'upcoming' | 'past' | 'sold-out';
  image_url?: string;
  category: string;
  max_capacity?: number;
  created_at: string;
  updated_at: string;
  artists?: Array<{
    id: string;
    name: string;
    genre: string;
  }>;
}

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async (): Promise<Event[]> => {
      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          event_artists!inner(
            artists!inner(
              id,
              name,
              genre
            )
          )
        `)
        .order('event_date', { ascending: true });

      if (error) {
        throw new Error(`Failed to fetch events: ${error.message}`);
      }

      // Transform the data to match our expected format
      const transformedData = data?.map(event => ({
        ...event,
        artists: event.event_artists?.map((ea: any) => ea.artists) || []
      })) || [];

      return transformedData;
    },
  });
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async (): Promise<Event | null> => {
      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          event_artists!inner(
            artists!inner(
              id,
              name,
              genre
            )
          )
        `)
        .eq('id', id)
        .maybeSingle();

      if (error) {
        throw new Error(`Failed to fetch event: ${error.message}`);
      }

      if (!data) return null;

      // Transform the data to match our expected format
      const transformedData = {
        ...data,
        artists: data.event_artists?.map((ea: any) => ea.artists) || []
      };

      return transformedData;
    },
    enabled: !!id,
  });
};