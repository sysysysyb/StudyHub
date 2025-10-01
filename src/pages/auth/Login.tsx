import {
  AuthContainer,
  AuthDescription,
  AuthLink,
  AuthSocialLoginButton,
  AuthSubmitButton,
  AuthTitle,
} from '@/components/auth/common'
import {
  Input,
  InputErrorMessage,
  PasswordInput,
} from '@/components/common/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  loginSchema,
  type LoginSchemaType,
} from '@/schemas/form-schema/login-schema'
import { useLogin } from '@/hooks/api'
import {
  InputFieldColStyle,
  InputFieldRowStyle,
  InputGroupStyle,
} from '@/constants/auth-variants'
import { UserRecoverModal } from '@/components/auth/user-recover-modal'
import type { ModalContextValue } from '@/components/common/Modal'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { useWithdrawalDateStore } from '@/store'
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from '@/constants/oauth-constants'
import { createNaverState, setNaverState } from '@/utils/manage-naver-state'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  })
  const login = useLogin()
  const { setWithdrawalDate } = useWithdrawalDateStore()
  const [isUserRecoverModalOpen, setIsUserRecoverModalOpen] = useState(false)

  const userRecoverFormModalControl: ModalContextValue = {
    isOpen: isUserRecoverModalOpen,
    open: () => {
      setIsUserRecoverModalOpen(true)
    },
    close: () => {
      setIsUserRecoverModalOpen(false)
    },
    toggle: () => {
      setIsUserRecoverModalOpen((prev) => !prev)
    },
  }

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      await login.mutateAsync(data)
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.status
        const dueDate = error.response?.data?.error.due_date
        if (status === 401 && dueDate !== 'None') {
          setWithdrawalDate(dueDate)
          userRecoverFormModalControl.open()
        }
      }
    }
  }

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  const handleNaverLogin = () => {
    const str = createNaverState()
    setNaverState(str)
    window.location.href = NAVER_AUTH_URL(str)
  }

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className={InputFieldColStyle}>
        <AuthTitle>로그인</AuthTitle>
        <div className="flex justify-center gap-1">
          <AuthDescription>아직 계정이 없으신가요?</AuthDescription>
          <AuthLink to="/auth/signup">회원가입하기</AuthLink>
        </div>
      </div>

      <div className={InputGroupStyle}>
        <AuthSocialLoginButton socialType="kakao" onClick={handleKakaoLogin} />
        <AuthSocialLoginButton socialType="naver" onClick={handleNaverLogin} />
      </div>

      <form className={InputGroupStyle} onSubmit={handleSubmit(onSubmit)}>
        <div className={InputFieldColStyle}>
          <Input
            {...register('email')}
            type="email"
            placeholder="아이디 (example@gmail.com)"
          />
          {errors.email && (
            <InputErrorMessage>{`${errors.email.message}`}</InputErrorMessage>
          )}
        </div>
        <div className={InputFieldColStyle}>
          <PasswordInput
            {...register('password')}
            placeholder="비밀번호 (8~15자의 영문 대소문자, 숫자, 특수문자 포함)"
          />
          {errors.password && (
            <InputErrorMessage>{`${errors.password.message}`}</InputErrorMessage>
          )}
        </div>
        <div className={InputFieldRowStyle}>
          <AuthLink to="/auth/find-email">아이디 찾기</AuthLink>
          <span className="text-primary-600">|</span>
          <AuthLink to="/auth/find-password">비밀번호 찾기</AuthLink>
        </div>
        <AuthSubmitButton disabled={!isValid || isSubmitting}>
          일반회원 로그인
        </AuthSubmitButton>
      </form>
      <UserRecoverModal userRecoverModalControl={userRecoverFormModalControl} />
    </AuthContainer>
  )
}

export default Login
