import { API_BASE_URL } from '@/constants/url-constants'
import { useToast } from '@/hooks'
import { useLoginStore } from '@/store/useLoginStore'
import type { UserLogin } from '@/types/api-request-types/auth-request-types'
import { setAccessToken } from '@/utils'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router'

export default function useLogin(
  options?: UseMutationOptions<string, Error, UserLogin>
) {
  const qc = useQueryClient()
  const { triggerToast } = useToast()
  const { setIsLoggedIn } = useLoginStore()
  const navigate = useNavigate()

  return useMutation<string, Error, UserLogin>({
    ...options,
    mutationKey: ['auth', 'email', 'login'],
    mutationFn: async (payload) => {
      const response = await api.post(
        `${API_BASE_URL}/auth/email/login`,
        payload
      )
      const newAccessToken = response.data.access_token
      return newAccessToken
    },
    onSuccess: async (newAccessToken: string) => {
      setAccessToken(newAccessToken)
      setIsLoggedIn(true)
      await qc.invalidateQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', 'Login 🎉', '로그인이 완료되었습니다.')
      navigate('/')
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.status
        const dueDate = error.response?.data?.due_date
        if (status === 400) {
          triggerToast('error', '잘못된 이메일 또는 비밀번호 입니다')
        } else if (status === 401) {
          if (dueDate) {
            triggerToast('warning', '탈퇴 예정 회원입니다')
          } else {
            triggerToast(
              'error',
              'Login Failed 😥',
              '이메일 또는 비밀번호가 올바르지 않습니다'
            )
          }
        } else {
          triggerToast('error', '잠시 후 다시 시도해주세요')
        }
      } else {
        triggerToast('error', '잠시 후 다시 시도해주세요')
      }
    },
  })
}
