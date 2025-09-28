import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse } from 'msw'
import { userInformationMock } from '../data/user-information-data'

// 내 정보 조회
const getUserInformation = http.get(`${MSW_BASE_URL}/info`, ({ request }) => {
  const header = request.headers.get('Authorization')
  const hasBearerToken = header?.includes('Bearer')

  if (!hasBearerToken) {
    return HttpResponse.json(
      { detail: 'Authentication required.' },
      { status: 401 }
    )
  }
  return HttpResponse.json(userInformationMock[0])
})

// 내 정보 수정 -> http.patch(`${MSW_BASE_URL}/info/edit`)

export const userInfoHandlers = [getUserInformation]
