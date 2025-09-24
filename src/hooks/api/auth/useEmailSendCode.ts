import useToast from '@/hooks/useToast'
import type { UserEmailSendCode } from '@/types/api-request-types/auth-request-types'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export default function useEmailSendCode(
  options?: UseMutationOptions<unknown, AxiosError, UserEmailSendCode>
) {
  const { triggerToast } = useToast()

  return useMutation<unknown, AxiosError, UserEmailSendCode>({
    ...options,
    mutationKey: ['auth', 'email', 'send-code'],
    mutationFn: async ({ email }) => {
      await api.post(`auth/email/send-code`, { email: email })
    },
    onSuccess: () => {
      triggerToast(
        'success',
        '이메일 인증 코드를 전송했습니다 ✉️',
        '확인 후 입력해주세요'
      )
    },
    onError: (error) => {
      const status = error.status

      if (status === 400) {
        triggerToast('error', '잘못된 이메일 형식입니다')
      } else {
        triggerToast('error', '잠시 후 다시 시도해주세요')
      }
    },
  })
}
