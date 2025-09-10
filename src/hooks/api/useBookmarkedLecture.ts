import { API_BASE_URL } from '@/constants/api-constants'
import type { BookmarkedLectures } from '@/types/api-response-types/lecture-response-type'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useBookmarkedLectures(
  searchParam: string = '',
  options?: UseQueryOptions<BookmarkedLectures>
) {
  return useQuery<BookmarkedLectures>({
    queryKey: ['lectures', 'bookmarks', searchParam],
    queryFn: async () => {
      const res = await api.get(
        `${API_BASE_URL}/lectures/bookmarks?${searchParam}`
      )

      return res.data
    },
    ...options,
  })
}
