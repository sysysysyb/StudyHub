import { create } from 'zustand'

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (newToast) => set((state) => [...state, newToast]),
}))
