import {
  AuthContainer,
  AuthDescription,
  AuthLink,
  AuthLogo,
  AuthSocialLoginButton,
  AuthSubmitButton,
  AuthTitle,
} from '@/components/auth'
import { Input } from '@/components/common/input'
import KakaoIcon from '@/assets/images/KakaoIcon.svg'
import NaverIcon from '@/assets/images/NaverIcon.svg'
import { useState } from 'react'

const flexStyle = 'flex flex-col gap-3'

function Login() {
  const [idInputValue, setIdInputValue] = useState('')
  const [passwordInputValue, setPasswordInputValue] = useState('')

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className={flexStyle}>
        <AuthLogo />
        <AuthTitle>로그인</AuthTitle>
        <div className="flex justify-center gap-1">
          <AuthDescription>아직 계정이 없으신가요?</AuthDescription>
          <AuthLink to="/auth/signup">회원가입하기</AuthLink>
        </div>
      </div>

      <div className={flexStyle}>
        <AuthSocialLoginButton className="bg-[#FEE500] text-[#391c1a] hover:bg-[#FEE500] active:bg-[#FEE500]">
          <img src={KakaoIcon} alt="Kakao Login" />
          카카오 간편 로그인 / 가입
        </AuthSocialLoginButton>
        <AuthSocialLoginButton className="bg-[#03C75A] hover:bg-[#03C75A] active:bg-[#03C75A]">
          <img src={NaverIcon} alt="Naver Login" />
          네이버 간편 로그인 / 가입
        </AuthSocialLoginButton>
      </div>
      <div className={flexStyle}>
        <Input
          type="email"
          placeholder="아이디 (example@gmail.com)"
          value={idInputValue}
          onChange={(event) => setIdInputValue(event.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호 (8~15자의 영문 대소문자, 숫자, 특수문자 포함)"
          value={passwordInputValue}
          onChange={(event) => setPasswordInputValue(event.target.value)}
        />
        <div className="flex gap-2">
          <AuthLink to="/auth/find-email">아이디 찾기</AuthLink>
          <span className="text-primary-600">|</span>
          <AuthLink to="/auth/find-password">비밀번호 찾기</AuthLink>
        </div>
        <AuthSubmitButton disabled={!idInputValue || !passwordInputValue}>
          일반회원 로그인
        </AuthSubmitButton>
      </div>
    </AuthContainer>
  )
}

export default Login
