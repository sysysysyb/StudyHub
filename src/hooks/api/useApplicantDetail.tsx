import { API_BASE_URL } from '@/constants/api-constants'
import type { ApplicantDetail } from '@/types/api-response-types/recruitment-response-types'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export function useApplicantDetail(
  recruitmentId: string,
  options?: UseQueryOptions<ApplicantDetail>
) {
  return useQuery<ApplicantDetail>({
    queryKey: ['recruitments', 'applied', recruitmentId],
    queryFn: async () => {
      const res = await api.get(
        `${API_BASE_URL}/recruitments/applied/me/${recruitmentId}`
      )
      return res.data
    },
    enabled: !!recruitmentId, // id 없으면 호출 불가
    ...options,
  })
}
