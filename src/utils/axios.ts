import { API_BASE_URL } from '@/constants/api-constants'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config
    const isNotTokenRefresh = originalRequest.url?.includes('/token/refresh')

    if (error.response?.status === 401 && isNotTokenRefresh) {
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
