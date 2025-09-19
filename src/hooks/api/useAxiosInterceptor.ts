import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { getAccessToken, isPublicEndpoint, setAccessToken } from '@/utils'
import api from '@/utils/axios'
import { useEffect } from 'react'
import useTokenRefresh from '@/hooks/api/auth/useTokenRefresh'

export default function useAxiosInterceptor() {
  const tokenRefresh = useTokenRefresh()

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
    if (response?.status === 401 && isTokenRefresh) {
      window.location.href = '/auth/login'
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
