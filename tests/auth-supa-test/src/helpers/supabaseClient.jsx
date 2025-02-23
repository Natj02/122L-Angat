import { createClient } from "@supabase/supabase-js"

//const supaURL = import.meta.env.VITE_SUPABASE_URL
//const supaAnon = import.meta.env.VITE_SUPABASE_KEY
const supaURL = "https://rjgjjeayhanbeqdqfakk.supabase.co"
const supaAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2pqZWF5aGFuYmVxZHFmYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NzAzOTYsImV4cCI6MjA1MzA0NjM5Nn0.jfTPtVriPfhNfer5_kNojf6aQW5lwKBWNiEGhiOTQD0"
const supabase = createClient(supaURL, supaAnon)

export default supabase