import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsHandlers } from '@/mocks/handlers/bookmarked-recruitments'
import { appliedRecruitmentsHandlers } from '@/mocks/handlers/applied-recruitments-handler'
import { userInformationHandlers } from '@/mocks/handlers/user-information'
import { chatHandlers } from '@/mocks/handlers/chat'
import { bookmarkedLecturesHandlers } from '@/mocks/handlers/bookmarked-lectures'
import { notificationHandlers } from '@/mocks/handlers/notification'

const getTestMSW = http.get(`${API_BASE_URL}/`, () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [
  getTestMSW,
  ...bookmarkedRecruitmentsHandlers,
  ...appliedRecruitmentsHandlers,
  ...userInformationHandlers,
  ...chatHandlers,
  ...bookmarkedLecturesHandlers,
  ...notificationHandlers,
]
