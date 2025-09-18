import { API_BASE_URL } from '@/constants/api-constants'
import type { lectureSearchParams } from '@/types'
import type { BookmarkedLectures } from '@/types/api-response-types/lecture-response-type'
import api from '@/utils/axios'
import {
  useInfiniteQuery,
  type InfiniteData,
  type UseInfiniteQueryOptions,
} from '@tanstack/react-query'

const PAGE_SIZE = 5

export default function useInfiniteBookmarkedLecture(
  searchParam?: Pick<lectureSearchParams, 'search'>,
  options?: UseInfiniteQueryOptions<
    BookmarkedLectures,
    Error,
    InfiniteData<BookmarkedLectures>,
    readonly unknown[],
    number | null
  >
) {
  return useInfiniteQuery({
    queryKey: ['lectures', 'bookmarks', searchParam?.search ?? ''],
    queryFn: async ({ pageParam }) => {
      const res = await api.get(`${API_BASE_URL}/lectures/bookmarks`, {
        params: {
          page: pageParam,
          page_size: PAGE_SIZE,
          search: searchParam?.search,
        },
      })

      return res.data
    },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.count < PAGE_SIZE) {
        return undefined
      }

      return lastPageParam ? lastPageParam + 1 : 1
    },
    initialPageParam: 0,
    ...options,
  })
}
