import { API_BASE_URL } from '@/constants/url-constants'
import type { CompletedStudy } from '@/types/api-response-types/completed-study-type'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useCompletedStudy(
  options?: UseQueryOptions<CompletedStudy[]>
) {
  return useQuery<CompletedStudy[]>({
    queryKey: ['completed'],
    queryFn: async () => {
      const res = await api.get(`${API_BASE_URL}/completed/me/`)
      return res.data
    },
    ...options,
  })
}
