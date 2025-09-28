import { API_BASE_URL } from '@/constants/url-constants'
import { useToast } from '@/hooks'
import { useLoginStore } from '@/store/useLoginStore'
import { clearAccessToken } from '@/utils'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router'

export default function useLogout(options?: UseMutationOptions) {
  const qc = useQueryClient()
  const { triggerToast } = useToast()
  const { setIsLoggedIn } = useLoginStore()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['auth', 'logout'],
    mutationFn: async () => {
      await api.post(`${API_BASE_URL}/auth/logout`)
    },
    onSuccess: () => {
      setIsLoggedIn(false)
      clearAccessToken()
      qc.removeQueries({ queryKey: ['info'] })
      triggerToast('success', 'Logout 👋', '로그아웃이 완료되었습니다.')
      navigate('/')
    },
    ...options,
  })
}
