import { API_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse, passthrough } from 'msw'
import { userInformationMock } from '@/mocks/data/user-information-data'
import { loginSchema } from '@/schemas/form-schema/auth-schema'

const ACCESS_TOKEN = `msw-access-token=access-token-test; Path=/; SameSite=Strict;`
const REFRESH_TOKEN =
  'msw-refresh-token=refresh-token-test; Path=/; SameSite=Strict;'

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
      return HttpResponse.json(
        {
          detail: 'Login successful',
          access_token: `${ACCESS_TOKEN} Max-Age=10`,
        },
        {
          status: 200,
          headers: { 'Set-Cookie': `${REFRESH_TOKEN} Max-Age=360000` },
        }
      )
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
  return HttpResponse.json(
    { detail: 'Logout successful' },
    {
      status: 200,
      headers: { 'Set-Cookie': `${REFRESH_TOKEN} Max-Age=0` },
    }
  )
})

const getUserInformation = http.get(
  `${API_BASE_URL}/users/me`,
  ({ request }) => {
    const header = request.headers.get('Authorization')
    const hasBearerToken = header
      ?.substring(7)
      .includes('msw-access-token=access-token-test;')

    if (!hasBearerToken) {
      return HttpResponse.json(
        { detail: 'Authentication required.' },
        { status: 401 }
      )
    }
    return HttpResponse.json(userInformationMock[0])
  }
)

const getRefreshToken = http.post(`${API_BASE_URL}/token/refresh`, () => {
  const currentCookie = document.cookie
  const isRefreshTokenRemain = currentCookie.includes('refresh-token')

  if (!isRefreshTokenRemain) {
    return HttpResponse.json(
      { detail: '리프레시 토큰이 만료됐습니다' },
      { status: 401 }
    )
  }

  return HttpResponse.json(
    {
      detail: '새로운 액세스 토큰을 발급했습니다',
      access_token: `${ACCESS_TOKEN} Max-Age=10`,
    },
    {
      status: 200,
    }
  )
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
  getRefreshToken,
  passthroughPiscumPhotos,
]
