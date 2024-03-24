
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kzztysktrqtmworrvfbz.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPERBASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)