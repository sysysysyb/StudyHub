import { MSW_BASE_URL } from '@/constants/url-constants'
import type { recruitmentSearchParams } from '@/types'
import type { BookmarkedRecruitments } from '@/types/api-response-types/recruitment-response-types'
import api from '@/utils/axios'
import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type InfiniteData,
} from '@tanstack/react-query'

const LIMIT = 10

export default function useInfiniteBookmarkedRecruitment(
  searchParam?: Pick<recruitmentSearchParams, 'title'>,
  options?: UseInfiniteQueryOptions<
    BookmarkedRecruitments,
    Error,
    InfiniteData<BookmarkedRecruitments>,
    readonly unknown[],
    string | null
  >
) {
  return useInfiniteQuery({
    queryKey: ['recruitment', 'bookmarked', searchParam?.title ?? ''],
    queryFn: async ({ pageParam }) => {
      const cursor = pageParam || ''

      const res = await api.get(`${MSW_BASE_URL}/recruitments/bookmarks/me`, {
        params: {
          title: searchParam?.title,
          limit: LIMIT,
          cursor,
        } satisfies Partial<recruitmentSearchParams>,
      })

      return res.data
    },
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.next_cursor,
    ...options,
  })
}
