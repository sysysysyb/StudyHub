import { API_BASE_URL } from '@/constants/api-constants'
import type { ApplicationDetail } from '@/types/api-response-types/recruitment-response-types'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export function useApplicationDetail(
  application_id: string,
  options?: UseQueryOptions<ApplicationDetail>
) {
  return useQuery<ApplicationDetail>({
    queryKey: ['applications', application_id],
    queryFn: async () => {
      const res = await api.get(
        `${API_BASE_URL}/applications/me/${application_id}`
      )
      return res.data
    },
    enabled: !!application_id, // id 없으면 호출 불가
    ...options,
  })
}
