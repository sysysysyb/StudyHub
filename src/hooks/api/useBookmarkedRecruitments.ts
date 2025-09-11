import { API_BASE_URL } from '@/constants/api-constants'
import type { BookmarkedRecruitments } from '@/types/api-response-types/recruitment-response-types'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useBookmarkedRecruitment(
  searchParam?: URLSearchParams,
  options?: UseQueryOptions<BookmarkedRecruitments>
) {
  return useQuery<BookmarkedRecruitments>({
    queryKey: [
      'recruitment',
      'bookmarked',
      searchParam ? searchParam.toString() : '',
    ],
    queryFn: async () => {
      const res = await api.get(`${API_BASE_URL}/recruitments/bookmarks/me`, {
        params: searchParam,
      })

      return res.data
    },
    ...options,
  })
}
