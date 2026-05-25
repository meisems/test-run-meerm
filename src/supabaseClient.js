import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate env vars at startup so the error is immediately obvious
// instead of a cryptic "Cannot read properties of undefined" at runtime.
if (!supabaseUrl || !supabaseKey) {
  const missing = [
    !supabaseUrl && 'VITE_SUPABASE_URL',
    !supabaseKey && 'VITE_SUPABASE_ANON_KEY',
  ].filter(Boolean).join(', ')
  throw new Error(
    `[supabaseClient] Missing required environment variable(s): ${missing}. ` +
    `Add them to your .env file locally, or to the Render environment variables panel.`
  )
}

export const supabase = createClient(supabaseUrl, supabaseKey)
