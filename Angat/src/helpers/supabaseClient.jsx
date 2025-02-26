import { createClient } from "@supabase/supabase-js"

const supaURL = "https://gosbhdxwvazjourrauik.supabase.co"
const supaAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvc2JoZHh3dmF6am91cnJhdWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTM3MzgsImV4cCI6MjA1NjA2OTczOH0.9SJnEhew8tT2nl07U2DDWPZTTk33E3qbsgAfyEhhHf4"
const supabase = createClient(supaURL, supaAnon)

export default supabase