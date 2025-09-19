import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { getAccessToken, isPublicEndpoint, setAccessToken } from '@/utils'
import api from '@/utils/axios'
import { useEffect } from 'react'
import useTokenRefresh from '@/hooks/api/auth/useTokenRefresh'
import { useLocation, useNavigate } from 'react-router'
import { useToast } from '@/hooks'

export default function useAxiosInterceptor() {
  const tokenRefresh = useTokenRefresh()
  const navigate = useNavigate()
  const location = useLocation()
  const { triggerToast } = useToast()

  const requestHandler = async (config: InternalAxiosRequestConfig) => {
    const { url } = config

    if (url && !isPublicEndpoint(url)) {
      const accessToken = getAccessToken()

      if (!accessToken) {
        const newAccessToken = await tokenRefresh.mutateAsync()
        config.headers.Authorization = `Bearer ${newAccessToken}`
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    }

    return config
  }

  const responseHandler = (response: AxiosResponse) => {
    const { config, data } = response
    const isLogin = config.url?.includes('auth/email/login')
    const isTokenRefresh = config.url?.includes('token/refresh')
    const accessToken = data?.access_token

    if ((isLogin || isTokenRefresh) && accessToken) {
      setAccessToken(accessToken)
    }

    return response
  }

  const errorHandler = (error: AxiosError) => {
    const { config, response } = error
    const isTokenRefresh = config?.url?.includes('token/refresh')
    const isMypageLocated = location.pathname.includes('my-page')

    if (response?.status === 401 && isTokenRefresh && isMypageLocated) {
      navigate('/auth/login')
      triggerToast('error', '로그인이 만료되었습니다. 다시 로그인 해주세요.')
    }

    return Promise.reject(error)
  }

  const requestInterceptor = api.interceptors.request.use(requestHandler)

  const responseInterceptor = api.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  )

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [requestInterceptor, responseInterceptor])
}
