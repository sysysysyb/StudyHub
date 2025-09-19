import { useToast } from '@/hooks'
import { useLoginStore } from '@/store/useLoginStore'
import type { UserLogin } from '@/types/api-request-types/auth-request-types'
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
  const { setLoggedIn } = useLoginStore()

  return useMutation<void, Error, UserLogin>({
    mutationKey: ['auth', 'email', 'login'],
    mutationFn: async (payload) => {
      await api.post(`/auth/email/login`, payload)
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['users', 'me'] })
      setLoggedIn()
      triggerToast('success', '로그인에 성공했습니다.')
    },
    onError: () => {
      triggerToast('error', '잘못된 이메일 또는 비밀번호 입니다.')
    },
    ...options,
  })
}
