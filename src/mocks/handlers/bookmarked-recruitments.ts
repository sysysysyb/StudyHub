import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsMock } from '@/mocks/data/bookmarked-recruitments'

const getBookmarkedRecruitments = http.get(
  `${API_BASE_URL}/recruitments/bookmarks/me`,
  () => {
    return HttpResponse.json(bookmarkedRecruitmentsMock)
  }
)

export const bookmarkedRecruitmentsHandlers = [getBookmarkedRecruitments]
