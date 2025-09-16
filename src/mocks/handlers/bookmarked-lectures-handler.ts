import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedLecturesMock } from '@/mocks/data/bookmarked-lectures-data'

const getBookmarkedLectures = http.get(
  `${API_BASE_URL}/lectures/bookmarks`,
  () => {
    return HttpResponse.json(bookmarkedLecturesMock)
  }
)

export const bookmarkedLecturesHandlers = [getBookmarkedLectures]
