import { API_BASE_URL } from '@/constants/url-constants'

import { http, HttpResponse } from 'msw'

const postRecoverAccountSend = http.post(
  `${API_BASE_URL}/auth/recover-account/send`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.email) {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse()
  }
)

const postRecoverAccountVerify = http.post(
  `${API_BASE_URL}/auth/recover-account/verify`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.email || !body.verification_code) {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse()
  }
)

export const userRecoverHandlers = [
  postRecoverAccountSend,
  postRecoverAccountVerify,
]
