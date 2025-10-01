export const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID

export const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`

export const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID

export const NAVER_CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_ID

// export const NAVER_STATE = 'abcdefg'

export const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI

export const NAVER_AUTH_URL = (state: string) =>
  `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${state}&redirect_uri=${NAVER_REDIRECT_URI}`
