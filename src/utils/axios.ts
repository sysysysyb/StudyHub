import { API_BASE_URL } from '@/constants/api-constants'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access-token')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    const { config, data } = response
    const isLogin = config.url?.includes('auth/email/login')
    const accessToken = data?.access_token

    if (isLogin && accessToken) {
      localStorage.setItem('access-token', accessToken)
    }

    return response
  },
  async (error) => {
    const { config } = error
    const isTokenRefreshRequest = config.url?.includes('/token/refresh')

    if (error.response?.status === 401 && !isTokenRefreshRequest) {
      try {
        await api.post(`${API_BASE_URL}/token/refresh`)
        return api(error.config)
      } catch {
        const pathname = window.location.pathname
        if (pathname.includes('my-page')) window.location.href = '/auth/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
