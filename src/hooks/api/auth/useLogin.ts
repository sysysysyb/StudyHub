import useToast from '@/hooks/useToast'
import type { UserLogin } from '@/types/api-response-types/auth'
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
    mutationKey: ['users', 'auth', 'login'],
    mutationFn: async (payload) => {
      await api.post(`/users/auth/login`, payload)
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', '로그인 성공')
    },
    ...options,
  })
}
