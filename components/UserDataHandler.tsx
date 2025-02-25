'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { saveUserToSupabase } from '@/utils/supabase'

export function UserDataHandler() {
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      saveUserToSupabase({
        id: user.id,
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        email: user.emailAddresses[0]?.emailAddress ?? '',
      }).catch(console.error)
    }
  }, [user])

  return null
} 