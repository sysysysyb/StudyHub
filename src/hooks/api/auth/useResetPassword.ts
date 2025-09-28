import { MSW_BASE_URL } from '@/constants/url-constants'
import useToast from '@/hooks/useToast'
import type { UserResetPassword } from '@/types/api-request-types/auth-request-types'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useResetPassword(
  options?: UseMutationOptions<unknown, Error, UserResetPassword>
) {
  const { triggerToast } = useToast()

  return useMutation<unknown, Error, UserResetPassword>({
    ...options,
    mutationKey: ['auth', 'reset-password'],
    mutationFn: async ({ newPassword }) => {
      await api.patch(`${MSW_BASE_URL}/auth/reset-password`, {
        new_password: newPassword,
      })
    },
    onSuccess: () => {
      triggerToast(
        'success',
        'Reset Password 🎊',
        '비밀번호 재설정이 완료되었습니다'
      )
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.status
        if (status === 400) {
          triggerToast('error', '잘못된 비밀번호 형식입니다')
        } else {
          triggerToast('error', '잠시 후 다시 시도해주세요')
        }
      } else {
        triggerToast('error', '잠시 후 다시 시도해주세요')
      }
    },
  })
}
