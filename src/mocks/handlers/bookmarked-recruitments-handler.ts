import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsMock } from '@/mocks/data/bookmarked-recruitments-data'

const getBookmarkedRecruitments = http.get(
  `${MSW_BASE_URL}/recruitments/bookmarks/me`,
  ({ request }) => {
    const url = new URL(request.url)
    const title = url.searchParams.get('title')

    if (!title || title.length < 1) {
      return HttpResponse.json(bookmarkedRecruitmentsMock)
    }

    const mock = structuredClone(bookmarkedRecruitmentsMock)

    mock.results = mock.results.filter((result) => {
      const { title: mockTitle } = result
      return mockTitle.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    })

    mock.next_cursor = ''

    return HttpResponse.json(mock)
  }
)

const postBookmarkRecruitment = http.post<{ recruitmentId: string }>(
  `${MSW_BASE_URL}/recruitments/:recruitmentId/bookmarks/add`,
  () => {
    return HttpResponse.json()
  }
)

const deleteBookmarkRecruitment = http.delete<{ recruitmentId: string }>(
  `${MSW_BASE_URL}/recruitments/:recruitmentId/bookmarks/remove`,
  () => {
    return HttpResponse.json()
  }
)

export const bookmarkedRecruitmentsHandlers = [
  getBookmarkedRecruitments,
  postBookmarkRecruitment,
  deleteBookmarkRecruitment,
]
