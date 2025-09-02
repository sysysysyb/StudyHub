import type { ToastItemProps } from '@/types/Toast'
import { create } from 'zustand'

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (newToast: ToastItemProps) =>
    set((state: ToastItemProps[]) => [...state, newToast]),
}))
