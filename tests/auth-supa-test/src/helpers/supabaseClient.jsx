import { createClient } from "@supabase/supabase-js"

const supaURL = import.meta.env.VITE_SUPABASE_URL
const supaAnon = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supaURL, supaAnon)

export default supabase