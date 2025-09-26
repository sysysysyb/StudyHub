import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse, passthrough } from 'msw'
import { userInformationMock } from '@/mocks/data/user-information-data'
const ACCESS_TOKEN = `msw-access-token=access-token-test; Path=/; SameSite=Strict;`
const REFRESH_TOKEN =
  'msw-refresh-token=refresh-token-test; Path=/; SameSite=Strict;'

// 로그인
const login = http.post(
  `${MSW_BASE_URL}/auth/email/login`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.email || !body.password) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '로그인이 완료되었습니다',
        access: `${ACCESS_TOKEN} Max-Age=10`,
      },
      {
        status: 200,
        headers: { 'Set-Cookie': `${REFRESH_TOKEN} Max-Age=360000` },
      }
    )
  }
)

const logout = http.post(`${MSW_BASE_URL}/auth/logout`, () => {
  return HttpResponse.json(
    { detail: '로그아웃이 완료되었습니다' },
    {
      status: 200,
      headers: { 'Set-Cookie': `${REFRESH_TOKEN} Max-Age=0` },
    }
  )
})

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

// 액세스 토큰 재발급
const getRefreshToken = http.post(`${MSW_BASE_URL}/auth/refresh`, () => {
  const currentCookie = document.cookie
  const isRefreshTokenRemain = currentCookie.includes('msw-refresh-token')

  if (!isRefreshTokenRemain) {
    return HttpResponse.json(
      { detail: '리프레시 토큰이 만료됐습니다' },
      { status: 401 }
    )
  }

  return HttpResponse.json(
    {
      detail: '새로운 액세스 토큰을 발급했습니다',
      access: `${ACCESS_TOKEN} Max-Age=10`,
    },
    {
      status: 200,
    }
  )
})

// 이메일 인증코드 전송
const emailSendCode = http.post(
  `${MSW_BASE_URL}/auth/email/send-code`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.email) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '이메일 인증코드를 전송했습니다',
      },
      {
        status: 200,
      }
    )
  }
)

// 이메일 인증코드 검증
const emailVerify = http.post(
  `${MSW_BASE_URL}/auth/email/verify`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.email || !body.verification_code) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '이메일 인증코드가 확인되었습니다',
      },
      {
        status: 200,
      }
    )
  }
)

// 휴대전화 인증코드 전송
const phoneSendCode = http.post(
  `${MSW_BASE_URL}/auth/phone/send-code`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.phone_number) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '휴대전화 인증코드를 전송했습니다',
      },
      {
        status: 200,
      }
    )
  }
)

// 휴대전화 인증코드 검증
const phoneVerify = http.post(
  `${MSW_BASE_URL}/auth/phone/verify`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.phone_number || !body.verification_code) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '휴대전화 인증코드가 확인되었습니다',
      },
      {
        status: 200,
      }
    )
  }
)

// 회원가입
const signup = http.post(
  `${MSW_BASE_URL}/auth/email/signup`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (
      !body.email ||
      !body.password ||
      !body.nickname ||
      !body.name ||
      !body.phone_number ||
      !body.birthday ||
      !body.gender ||
      !body.email_verification_code ||
      !body.phone_verification_code
    ) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '회원가입이 완료되었습니다',
      },
      {
        status: 201,
      }
    )
  }
)

// 외부 이미지 api
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
  emailSendCode,
  emailVerify,
  phoneSendCode,
  phoneVerify,
  signup,
  passthroughPiscumPhotos,
]
