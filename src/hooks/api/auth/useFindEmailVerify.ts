import { MSW_BASE_URL } from '@/constants/url-constants'
import useToast from '@/hooks/useToast'
import type { UserFindEmailVerify } from '@/types/api-request-types/auth-request-types'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useFindEmailVerify(
  options?: UseMutationOptions<string, Error, UserFindEmailVerify>
) {
  const { triggerToast } = useToast()

  return useMutation<string, Error, UserFindEmailVerify>({
    ...options,
    mutationKey: ['auth', 'find-email', 'verify'],
    mutationFn: async ({ name, phoneNumber, verificationCode }) => {
      const response = await api.post(
        `${MSW_BASE_URL}/auth/find-email/verify`,
        {
          name: name,
          phone_number: phoneNumber,
          verification_code: verificationCode,
        }
      )
      const email = response.data.email
      return email
    },
    onSuccess: () => {
      triggerToast('success', '인증 완료 ✅', '다음 단계를 진행해주세요')
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.status
        if (status === 400) {
          triggerToast('error', '잘못된 인증코드 형식입니다')
        } else {
          triggerToast('error', '잠시 후 다시 시도해주세요')
        }
      } else {
        triggerToast('error', '잠시 후 다시 시도해주세요')
      }
    },
  })
}
