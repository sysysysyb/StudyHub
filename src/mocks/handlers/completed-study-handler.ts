import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { completedStudyMock } from '../data/completed-study-data'

const getCompletedStudies = http.get(`${API_BASE_URL}/completed/me`, () => {
  return HttpResponse.json(completedStudyMock)
})

export const completedStudiesHandlers = [getCompletedStudies]
