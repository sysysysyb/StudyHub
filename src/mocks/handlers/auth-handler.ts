import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse, passthrough } from 'msw'
import { userInformationMock } from '../data/user-information-data'
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

// 로그아웃
const logout = http.post(`${MSW_BASE_URL}/auth/logout`, () => {
  return HttpResponse.json(
    { detail: '로그아웃이 완료되었습니다' },
    {
      status: 200,
      headers: { 'Set-Cookie': `${REFRESH_TOKEN} Max-Age=0` },
    }
  )
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

// 이메일 찾기 - 휴대전화 인증코드 전송
const findEmailSendCode = http.post(
  `${MSW_BASE_URL}/auth/find-email/send-code`,
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

// 이메일 찾기 - 휴대전화 인증코드 검증
const findEmailVerify = http.post(
  `${MSW_BASE_URL}/auth/find-email/verify`,
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
        email: userInformationMock[0].email,
      },
      {
        status: 200,
      }
    )
  }
)

// 이메일 찾기
const findEmail = http.post(
  `${MSW_BASE_URL}/info/find-email`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.name || !body.phone_number || !body.code) {
      return HttpResponse.json(
        {
          error: '인증 코드 검증에 실패했습니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '이메일 찾기가 완료되었습니다.',
        email: 'example@test.com',
      },
      {
        status: 200,
      }
    )
  }
)

// 비밀번호 찾기 - 이메일 인증코드 전송
const resetPasswordSendCode = http.post(
  `${MSW_BASE_URL}/auth/reset-password/send`,
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

// 비밀번호 찾기 - 이메일 인증코드 검증
const resetPasswordVerify = http.post(
  `${MSW_BASE_URL}/auth/reset-password/verify`,
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
        email: userInformationMock[0].email,
      },
      {
        status: 200,
      }
    )
  }
)

// 새 비밀번호 설정
const resetPassword = http.patch(
  `${MSW_BASE_URL}/auth/reset-password`,
  async ({ request }) => {
    const body = await request.clone().json()

    if (!body.password) {
      return HttpResponse.json(
        {
          error: '잘못된 입력 형식입니다',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        detail: '새 비밀번호 설정이 완료되었습니다',
      },
      {
        status: 200,
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
  getRefreshToken,
  emailSendCode,
  emailVerify,
  phoneSendCode,
  phoneVerify,
  signup,
  findEmailSendCode,
  findEmailVerify,
  findEmail,
  resetPasswordSendCode,
  resetPasswordVerify,
  resetPassword,
  passthroughPiscumPhotos,
]
