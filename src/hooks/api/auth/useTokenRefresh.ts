import { useLoginStore } from '@/store/useLoginStore'
import { setAccessToken } from '@/utils'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'

export default function useTokenRefresh(options?: UseMutationOptions) {
  const qc = useQueryClient()
  const { setIsLoggedIn } = useLoginStore()

  return useMutation({
    ...options,
    mutationKey: ['token', 'refresh'],
    mutationFn: async () => {
      const response = await api.post(`/token/refresh`)
      const newAccessToken = response.data.access_token
      return newAccessToken
    },
    onSuccess: (newAccessToken: string) => {
      setAccessToken(newAccessToken)
      setIsLoggedIn(true)
      qc.invalidateQueries({ queryKey: ['users', 'me'] })
    },
    onError: () => {
      setIsLoggedIn(false)
      qc.removeQueries({ queryKey: ['users', 'me'] })
    },
  })
}
