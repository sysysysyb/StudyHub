import { useToast } from '@/hooks'
import { useLoginStore } from '@/store/useLoginStore'
import { clearAccessToken } from '@/utils'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'

export default function useLogout(options?: UseMutationOptions) {
  const qc = useQueryClient()
  const { triggerToast } = useToast()
  const { setLoggedOut } = useLoginStore()

  return useMutation({
    mutationKey: ['users', 'logout'],
    mutationFn: async () => {
      await api.post(`/users/logout`)
    },
    onSuccess: () => {
      setLoggedOut()
      clearAccessToken()
      qc.removeQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', '로그아웃 성공')
    },
    ...options,
  })
}
