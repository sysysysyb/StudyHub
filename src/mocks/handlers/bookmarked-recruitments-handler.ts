import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsMock } from '@/mocks/data/bookmarked-recruitments-data'

const getBookmarkedRecruitments = http.get(
  `${MSW_BASE_URL}/recruitments/bookmarks/me`,
  () => {
    return HttpResponse.json(bookmarkedRecruitmentsMock)
  }
)

const postBookmarkRecruitment = http.post<{ recruitmentId: string }>(
  `${API_BASE_URL}/recruitments/:recruitmentId/bookmarks/add`,
  () => {
    return HttpResponse.json()
  }
)

const deleteBookmarkRecruitment = http.delete<{ recruitmentId: string }>(
  `${API_BASE_URL}/recruitments/:recruitmentId/bookmarks/remove`,
  () => {
    return HttpResponse.json()
  }
)

export const bookmarkedRecruitmentsHandlers = [
  getBookmarkedRecruitments,
  postBookmarkRecruitment,
  deleteBookmarkRecruitment,
]
