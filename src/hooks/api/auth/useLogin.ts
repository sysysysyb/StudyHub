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
      const response = await api.post(`/auth/email/login`, payload)
      const newAccessToken = response.data.access_token
      return newAccessToken
    },
    onSuccess: async (newAccessToken: string) => {
      setAccessToken(newAccessToken)
      setIsLoggedIn(true)
      await qc.invalidateQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', '로그인이 완료되었습니다.')
      navigate('/')
    },
    onError: () => {
      triggerToast('error', '잘못된 이메일 또는 비밀번호 입니다.')
    },
  })
}
