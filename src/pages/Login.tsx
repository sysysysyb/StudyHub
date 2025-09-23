import {
  AuthContainer,
  AuthDescription,
  AuthLink,
  AuthLogo,
  AuthSocialLoginButton,
  AuthSubmitButton,
  AuthTitle,
} from '@/components/auth'
import { Input, InputErrorMessage } from '@/components/common/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  loginSchema,
  type LoginSchemaType,
} from '@/schemas/form-schema/auth-schema'
import { useLogin } from '@/hooks/api'

const flexStyle = 'flex flex-col gap-3'

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
      <div className={flexStyle}>
        <AuthLogo />
        <AuthTitle>로그인</AuthTitle>
        <div className="flex justify-center gap-1">
          <AuthDescription>아직 계정이 없으신가요?</AuthDescription>
          <AuthLink to="/auth/signup">회원가입하기</AuthLink>
        </div>
      </div>

      <div className={flexStyle}>
        <AuthSocialLoginButton socialType="kakao" />
        <AuthSocialLoginButton socialType="naver" />
      </div>

      <form className={flexStyle} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          type="email"
          placeholder="아이디 (example@gmail.com)"
        />
        {errors.email && (
          <InputErrorMessage>{`${errors.email.message}`}</InputErrorMessage>
        )}
        <Input
          {...register('password')}
          type="password"
          placeholder="비밀번호 (8~15자의 영문 대소문자, 숫자, 특수문자 포함)"
        />
        {errors.password && (
          <InputErrorMessage>{`${errors.password.message}`}</InputErrorMessage>
        )}

        <div className="flex gap-2">
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
