export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      artists: {
        Row: {
          albums_count: number
          bio: string | null
          created_at: string
          followers: string
          genre: string
          id: string
          image_url: string | null
          is_available: boolean
          location: string
          name: string
          rating: number
          updated_at: string
        }
        Insert: {
          albums_count?: number
          bio?: string | null
          created_at?: string
          followers: string
          genre: string
          id?: string
          image_url?: string | null
          is_available?: boolean
          location: string
          name: string
          rating?: number
          updated_at?: string
        }
        Update: {
          albums_count?: number
          bio?: string | null
          created_at?: string
          followers?: string
          genre?: string
          id?: string
          image_url?: string | null
          is_available?: boolean
          location?: string
          name?: string
          rating?: number
          updated_at?: string
        }
        Relationships: []
      }
      booking_requests: {
        Row: {
          artist_id: string | null
          budget: number
          client_email: string
          client_name: string
          client_organization: string | null
          client_phone: string
          created_at: string
          duration: number
          event_date: string
          event_id: string | null
          id: string
          location: string
          message: string | null
          service_type: string
          status: Database["public"]["Enums"]["booking_status"]
          updated_at: string
        }
        Insert: {
          artist_id?: string | null
          budget: number
          client_email: string
          client_name: string
          client_organization?: string | null
          client_phone: string
          created_at?: string
          duration: number
          event_date: string
          event_id?: string | null
          id?: string
          location: string
          message?: string | null
          service_type: string
          status?: Database["public"]["Enums"]["booking_status"]
          updated_at?: string
        }
        Update: {
          artist_id?: string | null
          budget?: number
          client_email?: string
          client_name?: string
          client_organization?: string | null
          client_phone?: string
          created_at?: string
          duration?: number
          event_date?: string
          event_id?: string | null
          id?: string
          location?: string
          message?: string | null
          service_type?: string
          status?: Database["public"]["Enums"]["booking_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_requests_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_requests_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_artists: {
        Row: {
          artist_id: string
          created_at: string
          event_id: string
          id: string
        }
        Insert: {
          artist_id: string
          created_at?: string
          event_id: string
          id?: string
        }
        Update: {
          artist_id?: string
          created_at?: string
          event_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_artists_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          category: string
          created_at: string
          description: string | null
          event_date: string
          event_time: string
          id: string
          image_url: string | null
          location: string
          max_capacity: number | null
          price: number | null
          status: Database["public"]["Enums"]["event_status"]
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          event_date: string
          event_time: string
          id?: string
          image_url?: string | null
          location: string
          max_capacity?: number | null
          price?: number | null
          status?: Database["public"]["Enums"]["event_status"]
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          event_date?: string
          event_time?: string
          id?: string
          image_url?: string | null
          location?: string
          max_capacity?: number | null
          price?: number | null
          status?: Database["public"]["Enums"]["event_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          base_price: number
          created_at: string
          description: string
          duration: string
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          base_price: number
          created_at?: string
          description: string
          duration: string
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          base_price?: number
          created_at?: string
          description?: string
          duration?: string
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      booking_status: "pending" | "confirmed" | "rejected" | "completed"
      event_status: "upcoming" | "past" | "sold-out"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      booking_status: ["pending", "confirmed", "rejected", "completed"],
      event_status: ["upcoming", "past", "sold-out"],
    },
  },
} as const
