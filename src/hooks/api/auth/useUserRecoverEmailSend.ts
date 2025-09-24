import { API_BASE_URL } from '@/constants/url-constants'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

export default function useUserRecoverEmailSend(
  options: UseMutationOptions<void, Error, string>
) {
  return useMutation({
    mutationFn: async (email) => {
      await api.post(`${API_BASE_URL}/auth/recover-account/send`, { email })
    },
    ...options,
  })
}
