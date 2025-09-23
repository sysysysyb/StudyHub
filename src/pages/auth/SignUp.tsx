import {
  AuthBadge,
  AuthContainer,
  AuthDescription,
  AuthLink,
  AuthLogo,
  AuthSubmitButton,
  AuthTitle,
  AuthVerifyButton,
} from '@/components/auth/common'
import {
  Input,
  InputDescription,
  InputErrorMessage,
  InputLabel,
  PasswordInput,
} from '@/components/common/input'
import { useToast, useVerificationCode } from '@/hooks'
import {
  authSchema,
  type AuthSchemaType,
} from '@/schemas/form-schema/auth-schema'
import { cn } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const flexRowStyle = 'flex gap-3'
const flexColStyle = 'flex flex-col gap-3'

function Signup() {
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    reset,
    watch,
    getFieldState,
  } = useForm<AuthSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(authSchema),
  })
  const navigate = useNavigate()
  const { triggerToast } = useToast()
  const {
    isCodeSent,
    isCodeVerified,
    timer,
    handleCodeSend,
    handleCodeVerify,
  } = useVerificationCode()

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    triggerToast('success', '회원가입이 완료되었습니다!')
    reset()
    navigate('/auth/login')
  }

  const isNicknameNotValid =
    getFieldState('nickname').invalid || !watch('nickname')
  const isEmailNotValid = getFieldState('email').invalid || !watch('email')
  const isPhoneNumberNotValid =
    getFieldState('phoneNumber').invalid || !watch('phoneNumber')

  const handleDuplicateCheck = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsDuplicateChecked(true)
    triggerToast('success', '사용 가능한 닉네임입니다.')
  }

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className={flexColStyle}>
        <AuthLogo />
        <AuthTitle>회원가입</AuthTitle>
        <div className="flex justify-center gap-1">
          <AuthDescription>이미 계정이 있으신가요?</AuthDescription>
          <AuthLink to="/auth/login">로그인하기</AuthLink>
        </div>
      </div>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        {/* 이름 */}
        <div className={flexColStyle}>
          <InputLabel isRequired>이름</InputLabel>
          <Input {...register('name')} placeholder="이름을 입력해주세요" />
          {errors.name && (
            <InputErrorMessage>{`${errors.name.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 닉네임 */}
        <div className={flexColStyle}>
          <InputLabel isRequired>닉네임</InputLabel>
          <div className={flexRowStyle}>
            <Input
              {...register('nickname')}
              placeholder="닉네임을 입력해주세요"
            />
            <AuthVerifyButton
              disabled={isNicknameNotValid}
              onClick={handleDuplicateCheck}
            >
              중복확인
            </AuthVerifyButton>
          </div>
          {errors.nickname && (
            <InputErrorMessage>{`${errors.nickname.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 생년월일 */}
        <div className={flexColStyle}>
          <InputLabel isRequired>생년월일</InputLabel>
          <Input
            {...register('birthday')}
            placeholder="생년월일을 입력해주세요 (ex. 20001004)"
          />
          {errors.birthday && (
            <InputErrorMessage>{`${errors.birthday.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 성별 */}
        <div className={flexColStyle}>
          <InputLabel isRequired>성별</InputLabel>
          <div className={flexRowStyle}>
            <label htmlFor="gender-male">
              <AuthBadge isSelected={watch('gender') === 'male'}>남</AuthBadge>
            </label>
            <input
              id="gender-male"
              type="radio"
              value="male"
              className="hidden"
              {...register('gender')}
            />
            <label htmlFor="gender-female">
              <AuthBadge isSelected={watch('gender') === 'female'}>
                여
              </AuthBadge>
            </label>
            <input
              id="gender-female"
              type="radio"
              value="female"
              className="hidden"
              {...register('gender')}
            />
          </div>
          {errors.gender && (
            <InputErrorMessage>{`${errors.gender.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 이메일 */}
        <div className={flexColStyle}>
          <div className="flex gap-3">
            <InputLabel isRequired>이메일</InputLabel>
            <InputDescription>로그인 시 아이디로 사용합니다.</InputDescription>
          </div>
          <div className={flexRowStyle}>
            <Input {...register('email')} placeholder="이메일을 입력해주세요" />
            <AuthVerifyButton
              className={cn(timer.email.isCounting && 'w-44 p-0')}
              disabled={isEmailNotValid || timer.email.isCounting}
              onClick={() => handleCodeSend('email')}
            >
              {timer.email.isCounting
                ? `재전송 (${timer.email.formatMMSS(timer.email.remainSecond)})`
                : '인증코드전송'}
            </AuthVerifyButton>
          </div>
          {errors.email && (
            <InputErrorMessage>{`${errors.email.message}`}</InputErrorMessage>
          )}
          <div className={flexRowStyle}>
            <Input
              {...register('verificationCode.email')}
              placeholder="인증코드 6자리를 입력해주세요"
            />
            <AuthVerifyButton
              disabled={!isCodeSent.email}
              onClick={() => handleCodeVerify('email')}
            >
              인증코드확인
            </AuthVerifyButton>
          </div>
          {errors.verificationCode?.email && (
            <InputErrorMessage>{`${errors.verificationCode.email.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 휴대전화 */}
        <div className={flexColStyle}>
          <InputLabel isRequired>휴대전화</InputLabel>
          <div className="flex gap-3">
            <Input
              {...register('phoneNumber')}
              placeholder="휴대전화 번호를 입력해주세요 (ex. 01012345678)"
            />
            <AuthVerifyButton
              className={cn(timer.phoneNumber.isCounting && 'w-44 p-0')}
              disabled={isPhoneNumberNotValid || timer.phoneNumber.isCounting}
              onClick={() => handleCodeSend('phoneNumber')}
            >
              {timer.phoneNumber.isCounting
                ? `재전송 (${timer.phoneNumber.formatMMSS(timer.phoneNumber.remainSecond)})`
                : '인증코드전송'}
            </AuthVerifyButton>
          </div>
          {errors.phoneNumber && (
            <InputErrorMessage>{`${errors.phoneNumber.message}`}</InputErrorMessage>
          )}
          <div className={flexRowStyle}>
            <Input
              {...register('verificationCode.phoneNumber')}
              placeholder="인증코드 6자리를 입력해주세요"
            />
            <AuthVerifyButton
              disabled={!isCodeSent.phoneNumber}
              onClick={() => handleCodeVerify('phoneNumber')}
            >
              인증코드확인
            </AuthVerifyButton>
          </div>
          {errors.verificationCode?.phoneNumber && (
            <InputErrorMessage>{`${errors.verificationCode.phoneNumber.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 비밀번호 */}
        <div className={flexColStyle}>
          <div className={flexRowStyle}>
            <InputLabel isRequired>비밀번호</InputLabel>
            <InputDescription>
              8~15자의 영문 대소문자, 숫자, 특수문자 포함
            </InputDescription>
          </div>
          <div className={flexColStyle}>
            <PasswordInput
              {...register('password')}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.password && (
              <InputErrorMessage>{`${errors.password.message}`}</InputErrorMessage>
            )}
          </div>
          <div className={flexColStyle}>
            <PasswordInput
              {...register('confirmPassword')}
              placeholder="비밀번호를 다시 입력해주세요"
            />
            {errors.confirmPassword && (
              <InputErrorMessage>{`${errors.confirmPassword.message}`}</InputErrorMessage>
            )}
          </div>
        </div>
        {/* 가입하기 버튼 */}
        <AuthSubmitButton
          disabled={
            !isValid ||
            isSubmitting ||
            !isDuplicateChecked ||
            !isCodeVerified.email ||
            !isCodeVerified.phoneNumber
          }
        >
          가입하기
        </AuthSubmitButton>
      </form>
    </AuthContainer>
  )
}

export default Signup
