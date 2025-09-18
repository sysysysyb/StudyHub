import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse, passthrough } from 'msw'
import { userInformationMock } from '@/mocks/data/user-information-data'
import { getIsLoggedIn } from '@/utils'
import { loginSchema } from '@/schemas/form-schema/auth-schema'

const login = http.post(
  `${API_BASE_URL}/auth/email/login`,
  async ({ request }) => {
    const body = await request.json()
    const parsedBody = loginSchema.safeParse(body)

    if (!parsedBody.success) {
      return HttpResponse.json(
        {
          error: 'Invalid credentials.',
        },
        { status: 400 }
      )
    }

    const data = parsedBody.data

    if (data.email === 'qwerty@test.com' && data.password === 'Qwer1234!!') {
      return HttpResponse.json({ message: 'Login successful' }, { status: 200 })
    } else {
      return HttpResponse.json(
        {
          error: 'Invalid credentials.',
        },
        { status: 400 }
      )
    }
  }
)

const logout = http.post(`${API_BASE_URL}/users/logout`, () => {
  return HttpResponse.json({ message: 'Logout successful' }, { status: 200 })
})

const getUserInformation = http.get(`${API_BASE_URL}/users/me`, () => {
  if (!getIsLoggedIn()) {
    return HttpResponse.json(
      { message: 'Authentication required.' },
      { status: 401 }
    )
  }
  return HttpResponse.json(userInformationMock[0])
})

const passthroughPiscumPhotos = http.get(
  `https://picsum.photos/id/:rest*`,
  () => {
    return passthrough()
  }
)

export const authHandlers = [
  login,
  logout,
  getUserInformation,
  passthroughPiscumPhotos,
]
