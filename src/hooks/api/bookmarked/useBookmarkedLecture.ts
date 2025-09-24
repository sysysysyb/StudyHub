import { MSW_BASE_URL } from '@/constants/url-constants'
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
      const res = await api.get(`${MSW_BASE_URL}/lectures/bookmarks`, {
        params: {
          cursor: searchParam?.cursor,
          page_size: searchParam?.pageSize,
          search: searchParam?.search,
        },
      })

      return res.data
    },
    ...options,
  })
}
