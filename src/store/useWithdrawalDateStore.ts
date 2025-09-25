import { formattedDateWithKorean } from '@/utils/formatted-dates'
import { create } from 'zustand'

interface WithdrawalDateStore {
  withdrawalDate: string | null
  setWithdrawalDate: (value: string | null) => void
}

export const useWithdrawalDateStore = create<WithdrawalDateStore>((set) => ({
  withdrawalDate: null,
  setWithdrawalDate: (newValue) =>
    set(() => {
      if (!newValue) return { withdrawalDate: null }
      return { withdrawalDate: formattedDateWithKorean(newValue) }
    }),
}))
