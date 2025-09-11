import { AuthBadge, AuthSubmitButton } from '@/components/auth'
import { Input, InputErrorMessage, InputLabel } from '@/components/common/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  authSchema,
  type AuthSchemaType,
} from '@/schemas/form-schema/auth-schema'
import { useToast } from '@/hooks'

function AuthFormVerificationTest() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<AuthSchemaType>({
    resolver: zodResolver(authSchema),
  })
  const { triggerToast } = useToast()

  const onSubmit = async (data: AuthSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    triggerToast('success', 'Auth 유효성 검사 성공!')
    console.log('입력 내용: ', data)
    reset()
  }

  return (
    <section className="flex w-full flex-col gap-10">
      <h3 className="text-center text-xl font-semibold">유효성 검사 Test</h3>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>이메일</InputLabel>
          <Input
            {...register('email')}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          {errors.email && (
            <InputErrorMessage>{`${errors.email.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>비밀번호</InputLabel>
          <Input
            {...register('password')}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {errors.password && (
            <InputErrorMessage>{`${errors.password.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>비밀번호 확인</InputLabel>
          <Input
            {...register('confirmPassword')}
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
          {errors.confirmPassword && (
            <InputErrorMessage>{`${errors.confirmPassword.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>이름</InputLabel>
          <Input {...register('name')} placeholder="이름을 입력해주세요" />
          {errors.name && (
            <InputErrorMessage>{`${errors.name.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>닉네임</InputLabel>
          <Input
            {...register('nickname')}
            placeholder="닉네임을 입력해주세요"
          />
          {errors.nickname && (
            <InputErrorMessage>{`${errors.nickname.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>생년월일</InputLabel>
          <Input
            {...register('birthday')}
            placeholder="생년월일 8자리를 입력해주세요 (ex. 20001010)"
          />
          {errors.birthday && (
            <InputErrorMessage>{`${errors.birthday.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>휴대전화</InputLabel>
          <Input
            {...register('phoneNumber')}
            type="tel"
            placeholder="01012345678"
          />
          {errors.phoneNumber && (
            <InputErrorMessage>{`${errors.phoneNumber.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>인증번호</InputLabel>
          <Input
            {...register('verificationCode.email')}
            placeholder="인증번호 6자리를 입력해주세요"
          />
          {errors.verificationCode?.email && (
            <InputErrorMessage>{`${errors.verificationCode.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>성별</InputLabel>
          <div className="flex gap-3">
            <label htmlFor="gender-male">
              <AuthBadge isSelected={watch('gender') === 'male'}>남</AuthBadge>
            </label>
            <input
              id="gender-male"
              type="radio"
              value="male"
              {...register('gender')}
              className="hidden"
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
              {...register('gender')}
              className="hidden"
            />
          </div>
          {errors.gender && (
            <InputErrorMessage>{`${errors.gender.message}`}</InputErrorMessage>
          )}
        </div>
        <AuthSubmitButton disabled={isSubmitting}>Submit</AuthSubmitButton>
      </form>
    </section>
  )
}

export default AuthFormVerificationTest
