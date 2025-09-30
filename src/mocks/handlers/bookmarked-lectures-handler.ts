import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedLecturesMock } from '@/mocks/data/bookmarked-lectures-data'

const getBookmarkedLectures = http.get(
  `${MSW_BASE_URL}/lectures/bookmarks`,
  ({ request }) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('search')

    if (!search || search.length < 1) {
      return HttpResponse.json(bookmarkedLecturesMock)
    }

    const mock = structuredClone(bookmarkedLecturesMock)

    mock.results = mock.results.filter((result) => {
      const { title: mockTitle, instructor: mockInstructor } = result
      return (
        mockTitle.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        mockInstructor.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    })

    mock.next_cursor = ''

    return HttpResponse.json(mock)
  }
)

const postBookmarkLectures = http.post<{ lectureId: string }>(
  `${MSW_BASE_URL}/lectures/:lectureId/bookmark`,
  () => {
    return HttpResponse.json()
  }
)

const deleteBookmarkLectures = http.delete<{ lectureId: string }>(
  `${MSW_BASE_URL}/lectures/:lectureId/bookmark`,
  () => {
    return HttpResponse.json()
  }
)

export const bookmarkedLecturesHandlers = [
  getBookmarkedLectures,
  postBookmarkLectures,
  deleteBookmarkLectures,
]
