import { PUBLIC_ENDPOINTS } from '@/constants/api-endpoints'

export const isPublicEndpoint = (url: string) => {
  return PUBLIC_ENDPOINTS.some((endpoint) => url.includes(endpoint))
}
