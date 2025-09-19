import { getAccessToken } from '@/utils'
import { create } from 'zustand'

interface LoginStore {
  isLoggedIn: boolean
  setLoggedIn: () => void
  setLoggedOut: () => void
}

export const useLoginStore = create<LoginStore>((set) => ({
  isLoggedIn: getAccessToken() ? true : false,
  setLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setLoggedOut: () => set(() => ({ isLoggedIn: false })),
}))
