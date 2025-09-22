import { http, HttpResponse } from 'msw'
import { mockNotificationList } from '@/mocks/data/notification-data'
import { API_BASE_URL } from '@/constants/url-constants'

const getNotifications = http.get(`${API_BASE_URL}/notifications`, () => {
  return HttpResponse.json(mockNotificationList)
})

export const notificationHandlers = [getNotifications]
