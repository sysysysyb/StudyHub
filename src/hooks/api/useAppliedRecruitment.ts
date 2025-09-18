import { API_BASE_URL } from '@/constants/api-constants'
import type { AppliedRecruitments } from '@/types/api-response-types/recruitment-response-types'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useAppliedRecruitment(
  options?: UseQueryOptions<AppliedRecruitments>
) {
  return useQuery<AppliedRecruitments>({
    queryKey: ['applications'],
    queryFn: async () => {
      const res = await api.get(`${API_BASE_URL}/applications/me`)
      return res.data
    },
    ...options,
  })
}
