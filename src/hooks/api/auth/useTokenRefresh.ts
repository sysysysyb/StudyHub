import useToast from '@/hooks/useToast'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router'

export default function useTokenRefresh(options?: UseMutationOptions) {
  const qc = useQueryClient()
  const navigate = useNavigate()
  const { triggerToast } = useToast()

  return useMutation({
    ...options,
    mutationKey: ['token', 'refresh'],
    mutationFn: async () => {
      const response = await api.post(`/token/refresh`)
      const newAccessToken = response.data.access_token
      return newAccessToken
    },
    onError: () => {
      // TODO: 로그인 여부 전역 상태 false로 설정
      qc.removeQueries({ queryKey: ['users', 'me'] })
      triggerToast('error', '로그인이 만료되었습니다. 다시 로그인 해주세요.')
      navigate('/auth/login')
    },
  })
}
