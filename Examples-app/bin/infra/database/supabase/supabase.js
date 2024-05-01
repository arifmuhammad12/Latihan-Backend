const supabaseClient = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_TOKEN = process.env.SUPABASE_TOKEN

const supabase = supabaseClient.createClient(SUPABASE_URL, SUPABASE_TOKEN)

module.exports = supabase