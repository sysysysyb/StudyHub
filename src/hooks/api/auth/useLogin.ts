import useToast from '@/hooks/useToast'
import type { UserLogin } from '@/types/api-response-types/auth'
import { setIsLoggedIn } from '@/utils'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'

export default function useLogin(
  options?: UseMutationOptions<void, Error, UserLogin>
) {
  const qc = useQueryClient()
  const { triggerToast } = useToast()

  return useMutation<void, Error, UserLogin>({
    mutationKey: ['auth', 'email', 'login'],
    mutationFn: async (payload) => {
      await api.post(`/auth/email/login`, payload)
    },
    onSuccess: async () => {
      setIsLoggedIn()
      await qc.invalidateQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', '로그인 성공')
    },
    onError: () => {
      triggerToast('error', '잘못된 이메일 또는 비밀번호 입니다.')
    },
    ...options,
  })
}
