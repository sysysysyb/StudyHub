import { API_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { appliedRecruitmentsMock } from '@/mocks/data/applied-recruitments-data'
import { applicationsMock } from '@/mocks/data/applications-data'

const getAppliedRecruitments = http.get(
  `${API_BASE_URL}/applications/me`,
  () => {
    return HttpResponse.json(appliedRecruitmentsMock)
  }
)

const getApplication = http.get<{ application_id: string }>(
  `${API_BASE_URL}/applications/me/:application_id`,
  ({ params }) => {
    const { application_id } = params

    const recruitment = applicationsMock.find((r) => r.uuid === application_id)

    if (!recruitment) {
      return HttpResponse.json(
        { message: '지원 내역을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return HttpResponse.json(recruitment)
  }
)

export const appliedRecruitmentsHandlers = [
  getAppliedRecruitments,
  getApplication,
]
