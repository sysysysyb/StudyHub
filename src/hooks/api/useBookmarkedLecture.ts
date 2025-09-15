import { API_BASE_URL } from '@/constants/api-constants'
import type { lectureSearchParams } from '@/types'
import type { BookmarkedLectures } from '@/types/api-response-types/lecture-response-type'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useBookmarkedLectures(
  searchParam?: lectureSearchParams,
  options?: UseQueryOptions<BookmarkedLectures>
) {
  return useQuery<BookmarkedLectures>({
    queryKey: [
      'lectures',
      'bookmarks',
      searchParam ? JSON.stringify(searchParam) : '',
    ],
    queryFn: async () => {
      const res = await api.get(`${API_BASE_URL}/lectures/bookmarks`, {
        params: {
          page: searchParam?.page,
          page_size: searchParam?.pageSize,
          search: searchParam?.search,
        },
      })

      return res.data
    },
    ...options,
  })
}
