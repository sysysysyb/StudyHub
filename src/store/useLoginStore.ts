import { getAccessToken } from '@/utils'
import { create } from 'zustand'

interface LoginStore {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

export const useLoginStore = create<LoginStore>((set) => ({
  isLoggedIn: getAccessToken() ? true : false,
  setIsLoggedIn: (newValue) => set({ isLoggedIn: newValue }),
}))
