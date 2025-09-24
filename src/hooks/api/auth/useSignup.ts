import useToast from '@/hooks/useToast'
import type { UserSignup } from '@/types/api-request-types/auth-request-types'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export default function useSignup(
  options?: UseMutationOptions<unknown, AxiosError, UserSignup>
) {
  const { triggerToast } = useToast()

  return useMutation<unknown, AxiosError, UserSignup>({
    ...options,
    mutationKey: ['auth', 'email', 'signup'],
    mutationFn: async ({
      phoneNumber,
      emailVerificationCode,
      phoneVerificationCode,
      ...payload
    }) => {
      await api.post(`auth/email/signup`, {
        phone_number: phoneNumber,
        email_verification_code: emailVerificationCode,
        phone_verification_code: phoneVerificationCode,
        ...payload,
      })
    },
    onSuccess: () => {
      triggerToast('success', 'Signup ✨', '회원가입을 완료했습니다')
    },
    onError: (error) => {
      const status = error.status

      if (status === 400) {
        triggerToast('error', '잘못 입력된 항목이 있습니다')
      } else {
        triggerToast('error', '잠시 후 다시 시도해주세요')
      }
    },
  })
}
