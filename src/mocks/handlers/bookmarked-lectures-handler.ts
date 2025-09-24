import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedLecturesMock } from '@/mocks/data/bookmarked-lectures-data'

const getBookmarkedLectures = http.get(
  `${MSW_BASE_URL}/lectures/bookmarks`,
  () => {
    return HttpResponse.json(bookmarkedLecturesMock)
  }
)

const postBookmarkLectures = http.post<{ lectureId: string }>(
  `${API_BASE_URL}/lectures/:lectureId/bookmark`,
  () => {
    return HttpResponse.json()
  }
)

const deleteBookmarkLectures = http.delete<{ lectureId: string }>(
  `${API_BASE_URL}/lectures/:lectureId/bookmark`,
  () => {
    return HttpResponse.json()
  }
)

export const bookmarkedLecturesHandlers = [
  getBookmarkedLectures,
  postBookmarkLectures,
  deleteBookmarkLectures,
]
