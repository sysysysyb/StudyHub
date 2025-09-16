import useToast from '@/hooks/useToast'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'

export default function useLogout(options?: UseMutationOptions) {
  const qc = useQueryClient()
  const { triggerToast } = useToast()

  return useMutation({
    mutationKey: ['users', 'auth', 'logout'],
    mutationFn: async () => {
      await api.post(`/users/auth/logout`)
    },
    onSuccess: async () => {
      await qc.cancelQueries()
      qc.removeQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', '로그아웃 성공')
    },
    ...options,
  })
}
