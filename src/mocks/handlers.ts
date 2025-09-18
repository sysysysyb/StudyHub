import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { bookmarkedRecruitmentsHandlers } from '@/mocks/handlers/bookmarked-recruitments-handler'
import { appliedRecruitmentsHandlers } from '@/mocks/handlers/applied-recruitments-handler'
import { userInformationHandlers } from '@/mocks/handlers/user-information-handler'
import { chatHandlers } from '@/mocks/handlers/chat-handler'
import { bookmarkedLecturesHandlers } from '@/mocks/handlers/bookmarked-lectures-handler'
import { notificationHandlers } from '@/mocks/handlers/notification-handler'
import { completedStudiesHandlers } from '@/mocks/handlers/completed-study-handler'

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
  ...completedStudiesHandlers,
]
