import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { appliedRecruitmentsMock } from '@/mocks/data/applied-recruitments'

const getAppliedRecruitments = http.get(
  `${API_BASE_URL}/recruitments/applied/me`,
  () => {
    return HttpResponse.json(appliedRecruitmentsMock)
  }
)

export const appliedRecruitmentsHandlers = [getAppliedRecruitments]
