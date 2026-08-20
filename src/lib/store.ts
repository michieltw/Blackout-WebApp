import { create } from 'zustand'
import { Session } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'

interface AuthState {
  session: Session | null
  initialized: boolean
  setSession: (session: Session | null) => void
  initializeAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  initialized: false,
  setSession: (session) => set({ session }),
  initializeAuth: async () => {
    // Get initial session
    const { data: { session } } = await supabase.auth.getSession()
    set({ session, initialized: true })

    // Listen for auth changes
    supabase.auth.onAuthStateChange((_event, session) => {
      set({ session })
    })
  }
}))
