import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { appliedRecruitmentsMock } from '@/mocks/data/applied-recruitments'

const getAppliedRecruitments = http.get(
  `${API_BASE_URL}/recruitments/applied/me`,
  () => {
    return HttpResponse.json(appliedRecruitmentsMock)
  }
)

const getApplicantDetail = http.get(
  `${API_BASE_URL}/recruitments/applied/me/:recruitmentId`,
  ({ params }) => {
    const { recruitmentId } = params

    const recruitment = appliedRecruitmentsMock.results.find(
      (r) => r.uuid === recruitmentId
    )

    if (!recruitment) {
      return HttpResponse.json(
        { message: '지원 내역을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return HttpResponse.json(recruitment.applicant)
  }
)

export const appliedRecruitmentsHandlers = [
  getAppliedRecruitments,
  getApplicantDetail,
]
