import { API_BASE_URL } from '@/constants/api-constants'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE_URL,
})

//TODO: 자동 토큰 refresh등 기능 추가

export default api
