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
    mutationKey: ['users', 'logout'],
    mutationFn: async () => {
      await api.post(`/users/logout`)
    },
    onSuccess: async () => {
      qc.removeQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', '로그아웃 성공')
    },
    ...options,
  })
}
