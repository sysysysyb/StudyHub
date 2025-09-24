import { MSW_BASE_URL } from '@/constants/url-constants'
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
  const { setIsLoggedIn } = useLoginStore()

  return useMutation({
    mutationKey: ['users', 'logout'],
    mutationFn: async () => {
      await api.post(`${MSW_BASE_URL}/users/logout`)
    },
    onSuccess: () => {
      setIsLoggedIn(false)
      clearAccessToken()
      qc.removeQueries({ queryKey: ['users', 'me'] })
      triggerToast('success', 'Logout 👋', '로그아웃이 완료되었습니다.')
    },
    ...options,
  })
}
