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

  const onSubmit = async (data: LoginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    login.mutate(data)
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
        <AuthSocialLoginButton socialType="kakao" />
        <AuthSocialLoginButton socialType="naver" />
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
    </AuthContainer>
  )
}

export default Login
