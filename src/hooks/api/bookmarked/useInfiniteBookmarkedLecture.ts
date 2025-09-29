import { MSW_BASE_URL } from '@/constants/url-constants'
import type { BookmarkedLectures } from '@/types/api-response-types/lecture-response-type'
import api from '@/utils/axios'
import {
  useInfiniteQuery,
  type InfiniteData,
  type UseInfiniteQueryOptions,
} from '@tanstack/react-query'

const PAGE_SIZE = 5

export default function useInfiniteBookmarkedLecture(
  searchParam?: string,
  options?: UseInfiniteQueryOptions<
    BookmarkedLectures,
    Error,
    InfiniteData<BookmarkedLectures>,
    readonly unknown[],
    string | null
  >
) {
  return useInfiniteQuery({
    queryKey: ['lectures', 'bookmarks', searchParam ?? ''],
    queryFn: async ({ pageParam }) => {
      const res = await api.get(`${MSW_BASE_URL}/lectures/bookmarks`, {
        params: {
          cursor: pageParam,
          page_size: PAGE_SIZE,
          search:
            searchParam && searchParam?.length > 0 ? searchParam : undefined,
        },
      })

      return res.data
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.next_cursor || lastPage.next_cursor.length < 1) {
        return null
      }
      return lastPage.next_cursor
    },
    initialPageParam: '',
    ...options,
  })
}
