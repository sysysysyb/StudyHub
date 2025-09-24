import { API_BASE_URL } from '@/constants/url-constants'
import type { userRecoverVerifyBody } from '@/types/api-request-types/user-recover-request-types'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

export default function useUserRecover(
  options?: UseMutationOptions<void, Error, userRecoverVerifyBody>
) {
  return useMutation({
    mutationFn: async ({ email, verificationCode }) => {
      await api.post(`${API_BASE_URL}/auth/recover-account/verify`, {
        email,
        verification_code: verificationCode,
      })
    },
    ...options,
  })
}
