import { API_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { completedStudyMock } from '@/mocks/data/completed-study-data'

const getCompletedStudies = http.get(`${API_BASE_URL}/completed/me`, () => {
  return HttpResponse.json(completedStudyMock)
})

export const completedStudiesHandlers = [getCompletedStudies]
