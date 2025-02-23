import { createClient } from "@supabase/supabase-js"

const supaURL = process.env.SUPA_URL
const supaAnon = process.env.SUPA_ANON_KEY

const supabase = createClient(supaURL, supaAnon)

export default supabase