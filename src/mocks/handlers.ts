import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsHandlers } from '@/mocks/handlers/bookmarked-recruitments'
import { userInformationHandlers } from '@/mocks/handlers/user-information'

const getTestMSW = http.get(`${API_BASE_URL}/`, () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [
  getTestMSW,
  ...bookmarkedRecruitmentsHandlers,
  ...userInformationHandlers,
]
