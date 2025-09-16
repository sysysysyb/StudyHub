import { API_BASE_URL } from '@/constants/api-constants'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       try {
//         await api.post('/users/auth/refresh')
//         return api(error.config)
//       } catch {
//         window.location.href = '/auth/login'
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export default api
