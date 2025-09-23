import useToast from '@/hooks/useToast'
import type { UserPhoneVerify } from '@/types/api-request-types/auth-request-types'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export default function usePhoneVerify(
  options?: UseMutationOptions<unknown, AxiosError, UserPhoneVerify>
) {
  const { triggerToast } = useToast()

  return useMutation<unknown, AxiosError, UserPhoneVerify>({
    ...options,
    mutationKey: ['auth', 'phone', 'verify'],
    mutationFn: async (payload) => {
      await api.post(`auth/phone/verify`, payload)
    },
    onSuccess: () => {
      triggerToast('success', '인증 완료 ✅', '다음 단계를 진행해주세요')
    },
    onError: (error) => {
      const status = error.status

      if (status === 400) {
        triggerToast('error', '잘못된 인증코드 형식입니다')
      } else {
        triggerToast('error', '잠시 후 다시 시도해주세요')
      }
    },
  })
}
