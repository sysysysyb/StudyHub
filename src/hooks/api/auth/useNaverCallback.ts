import { API_BASE_URL } from '@/constants/url-constants'
import { useToast } from '@/hooks'
import { useLoginStore } from '@/store/useLoginStore'
import type { UserNaverLogin } from '@/types/api-request-types/auth-request-types'
import { setAccessToken } from '@/utils'
import api from '@/utils/axios'
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router'

export default function useNaverCallback(
  options?: UseMutationOptions<string, Error, UserNaverLogin>
) {
  const qc = useQueryClient()
  const { triggerToast } = useToast()
  const { setIsLoggedIn } = useLoginStore()
  const navigate = useNavigate()

  return useMutation<string, Error, UserNaverLogin>({
    ...options,
    mutationKey: ['auth', 'naver', 'callback'],
    mutationFn: async ({ code }) => {
      const response = await api.post(`${API_BASE_URL}/auth/naver/callback`, {
        code: code,
      })
      const newAccessToken = response.data.access_token
      return newAccessToken
    },
    onSuccess: async (newAccessToken: string) => {
      setAccessToken(newAccessToken)
      setIsLoggedIn(true)
      await qc.invalidateQueries({ queryKey: ['info'] })
      triggerToast(
        'success',
        'Naver Login 🎉',
        '네이버 로그인이 완료되었습니다.'
      )
      navigate('/')
    },
    onError: () => {
      triggerToast('error', '잠시 후 다시 시도해주세요')
      navigate('/auth/login')
    },
  })
}
