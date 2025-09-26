import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsMock } from '@/mocks/data/bookmarked-recruitments-data'

const getBookmarkedRecruitments = http.get(
  `${MSW_BASE_URL}/recruitments/bookmarks/me`,
  ({ request }) => {
    const url = new URL(request.url)
    const title = url.searchParams.get('title')

    if (!title) {
      return HttpResponse.json(bookmarkedRecruitmentsMock)
    }

    const mock = bookmarkedRecruitmentsMock

    mock.results = mock.results.filter((result) => {
      const { title: mockTitle } = result
      return mockTitle.includes(title)
    })

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
