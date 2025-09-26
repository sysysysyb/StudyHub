import {
  AuthBadge,
  AuthContainer,
  AuthDescription,
  AuthLink,
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
import {
  InputFieldColStyle,
  InputFieldRowStyle,
} from '@/constants/auth-variants'
import { useVerificationCode } from '@/hooks'
import useSignup from '@/hooks/api/auth/useSignup'
import {
  signupSchema,
  type SignupSchemaType,
} from '@/schemas/form-schema/signup-schema'
import { cn } from '@/utils'
import { formattedDateWithHyphen } from '@/utils/formatted-dates'
import { formattedPhoneToE164KR } from '@/utils/formatted-phone'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    watch,
    getFieldState,
    getValues,
  } = useForm<SignupSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(signupSchema),
  })
  const navigate = useNavigate()
  const {
    isCodeSent,
    isCodeVerified,
    timer,
    handleCodeSend,
    handleCodeVerify,
  } = useVerificationCode()
  const signup = useSignup()

  const onSubmit = async (data: SignupSchemaType) => {
    const signupData = {
      email: data.email,
      password: data.password,
      name: data.name,
      nickname: data.nickname,
      birthday: formattedDateWithHyphen(data.birthday),
      phoneNumber: formattedPhoneToE164KR(data.phoneNumber),
      emailVerificationCode: data.verificationCode.email,
      phoneVerificationCode: data.verificationCode.phoneNumber,
      gender: data.gender,
    }
    signup.mutate(signupData)
    navigate('/auth/login')
  }

  const isEmailNotValid = getFieldState('email').invalid || !watch('email')
  const isPhoneNumberNotValid =
    getFieldState('phoneNumber').invalid || !watch('phoneNumber')

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className={InputFieldColStyle}>
        <AuthTitle>회원가입</AuthTitle>
        <div className="flex justify-center gap-1">
          <AuthDescription>이미 계정이 있으신가요?</AuthDescription>
          <AuthLink to="/auth/login">로그인하기</AuthLink>
        </div>
      </div>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        {/* 이름 */}
        <div className={InputFieldColStyle}>
          <InputLabel isRequired>이름</InputLabel>
          <Input {...register('name')} placeholder="이름을 입력해주세요" />
          {errors.name && (
            <InputErrorMessage>{`${errors.name.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 닉네임 */}
        <div className={InputFieldColStyle}>
          <InputLabel isRequired>닉네임</InputLabel>
          <div className={InputFieldRowStyle}>
            <Input
              {...register('nickname')}
              placeholder="닉네임을 입력해주세요"
            />
          </div>
          {errors.nickname && (
            <InputErrorMessage>{`${errors.nickname.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 생년월일 */}
        <div className={InputFieldColStyle}>
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
        <div className={InputFieldColStyle}>
          <InputLabel isRequired>성별</InputLabel>
          <div className={InputFieldRowStyle}>
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
        <div className={InputFieldColStyle}>
          <div className="flex gap-3">
            <InputLabel isRequired>이메일</InputLabel>
            <InputDescription>로그인 시 아이디로 사용합니다.</InputDescription>
          </div>
          <div className={InputFieldRowStyle}>
            <Input {...register('email')} placeholder="이메일을 입력해주세요" />
            <AuthVerifyButton
              className={cn(timer.email.isCounting && 'w-44 p-0')}
              disabled={isEmailNotValid || timer.email.isCounting}
              onClick={() => handleCodeSend('email', getValues('email'))}
            >
              {timer.email.isCounting
                ? `재전송 (${timer.email.formatMMSS(timer.email.remainSecond)})`
                : '인증코드전송'}
            </AuthVerifyButton>
          </div>
          {errors.email && (
            <InputErrorMessage>{`${errors.email.message}`}</InputErrorMessage>
          )}
          <div className={InputFieldRowStyle}>
            <Input
              disabled={!isCodeSent.email}
              {...register('verificationCode.email')}
              placeholder="인증코드 6자리를 입력해주세요"
              className={cn(
                isCodeVerified.email && 'disabled:bg-white disabled:text-black'
              )}
            />
            <AuthVerifyButton
              disabled={!isCodeSent.email}
              onClick={() =>
                handleCodeVerify('email', {
                  email: getValues('email'),
                  verificationCode: getValues('verificationCode.email'),
                })
              }
            >
              인증코드확인
            </AuthVerifyButton>
          </div>
          {errors.verificationCode?.email && (
            <InputErrorMessage>{`${errors.verificationCode.email.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 휴대전화 */}
        <div className={InputFieldColStyle}>
          <InputLabel isRequired>휴대전화</InputLabel>
          <div className={InputFieldRowStyle}>
            <Input
              {...register('phoneNumber')}
              placeholder="휴대전화 번호를 입력해주세요 (ex. 01012345678)"
            />
            <AuthVerifyButton
              className={cn(timer.phoneNumber.isCounting && 'w-44 p-0')}
              disabled={isPhoneNumberNotValid || timer.phoneNumber.isCounting}
              onClick={() =>
                handleCodeSend('phoneNumber', getValues('phoneNumber'))
              }
            >
              {timer.phoneNumber.isCounting
                ? `재전송 (${timer.phoneNumber.formatMMSS(timer.phoneNumber.remainSecond)})`
                : '인증코드전송'}
            </AuthVerifyButton>
          </div>
          {errors.phoneNumber && (
            <InputErrorMessage>{`${errors.phoneNumber.message}`}</InputErrorMessage>
          )}
          <div className={InputFieldRowStyle}>
            <Input
              disabled={!isCodeSent.phoneNumber}
              {...register('verificationCode.phoneNumber')}
              placeholder="인증코드 6자리를 입력해주세요"
              className={cn(
                isCodeVerified.phoneNumber &&
                  'disabled:bg-white disabled:text-black'
              )}
            />
            <AuthVerifyButton
              disabled={!isCodeSent.phoneNumber}
              onClick={() =>
                handleCodeVerify('phoneNumber', {
                  phoneNumber: getValues('phoneNumber'),
                  verificationCode: getValues('verificationCode.phoneNumber'),
                })
              }
            >
              인증코드확인
            </AuthVerifyButton>
          </div>
          {errors.verificationCode?.phoneNumber && (
            <InputErrorMessage>{`${errors.verificationCode.phoneNumber.message}`}</InputErrorMessage>
          )}
        </div>
        {/* 비밀번호 */}
        <div className={InputFieldColStyle}>
          <div className={InputFieldRowStyle}>
            <InputLabel isRequired>비밀번호</InputLabel>
            <InputDescription>
              8~15자의 영문 대소문자, 숫자, 특수문자 포함
            </InputDescription>
          </div>
          <div className={InputFieldColStyle}>
            <PasswordInput
              {...register('password')}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.password && (
              <InputErrorMessage>{`${errors.password.message}`}</InputErrorMessage>
            )}
          </div>
          <div className={InputFieldColStyle}>
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
