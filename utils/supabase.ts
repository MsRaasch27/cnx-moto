import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function saveUserToSupabase(userData: {
  id: string
  firstName: string
  lastName: string
  email: string
}) {
  const { data, error } = await supabase
    .from('users')
    .upsert({
      user_id: userData.id,
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
    })
    .select()
    .single()

  if (error) throw error
  return data
} 