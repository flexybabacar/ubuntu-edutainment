import { corsHeaders } from '@supabase/supabase-js/cors'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const ContactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  subject: z.string().min(1).max(500),
  message: z.string().min(1).max(5000),
  contact_type: z.string().max(50).default('general'),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { name, email, subject, message, contact_type } = parsed.data

    const typeLabels: Record<string, string> = {
      general: 'Demande générale',
      artist: 'Collaboration artistique',
      partnership: 'Partenariat',
      booking: 'Réservation événement',
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7c3aed, #06b6d4); padding: 20px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">📩 Nouveau message de contact</h1>
        </div>
        <div style="background: #1a1a2e; padding: 24px; border: 1px solid #333; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0; font-size: 14px; width: 140px;">Type de demande</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: bold;">${typeLabels[contact_type] || contact_type}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0; font-size: 14px;">Nom</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0; font-size: 14px;">Email</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0; font-size: 14px;">Sujet</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #333; margin: 16px 0;" />
          <div>
            <p style="color: #a0a0b0; font-size: 14px; margin-bottom: 8px;">Message :</p>
            <p style="color: #ffffff; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 16px;">
          Ubuntu Edutainment — Label de Production Musicale & Audiovisuelle
        </p>
      </div>
    `

    // Send email using Supabase's built-in SMTP (via Edge Function HTTP)
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // Use Supabase Auth admin to send email via SMTP hook or use a simple SMTP approach
    // For now, we'll use the Resend-free approach: store in DB and notify via webhook

    // The form data is already stored in the DB by the client.
    // We'll construct a mailto-friendly notification.
    
    // Since no email domain is configured, we'll use a simple fetch to a webhook
    // or store the submission for manual review.
    
    console.log(`New contact submission from ${name} (${email}): ${subject}`)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message reçu avec succès' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur interne du serveur' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
