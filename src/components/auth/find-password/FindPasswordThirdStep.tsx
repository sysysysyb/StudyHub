import {
  AuthDescription,
  AuthSubmitButton,
  AuthTitle,
  AuthIcon,
} from '@/components/auth/common'
import { InputErrorMessage, PasswordInput } from '@/components/common/input'
import { InputFieldColStyle, InputGroupStyle } from '@/constants/auth-variants'
import {
  FindPasswordStep3Schema,
  type FindPasswordStep3Type,
} from '@/schemas/form-schema/find-password-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key } from 'lucide-react'
import { useForm, type DefaultValues } from 'react-hook-form'

interface FindPasswordThirdStepProps {
  defaultValues: DefaultValues<FindPasswordStep3Type>
  onNext: (value: FindPasswordStep3Type) => void
}

function FindPasswordThirdStep({
  defaultValues,
  onNext,
}: FindPasswordThirdStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FindPasswordStep3Type>({
    mode: 'onChange',
    resolver: zodResolver(FindPasswordStep3Schema),
    defaultValues,
  })

  const onSubmit = (value: FindPasswordStep3Type) => onNext(value)

  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <AuthIcon
          Icon={Key}
          iconClassName="text-success-600"
          bgClassName="bg-success-100"
        />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          비밀번호 재설정
        </AuthTitle>
        <AuthDescription>새로운 비밀번호를 입력해주세요</AuthDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={InputGroupStyle}>
        <div className={InputFieldColStyle}>
          <PasswordInput placeholder="새 비밀번호" {...register('password')} />
          {errors.password && (
            <InputErrorMessage>{`${errors.password.message}`}</InputErrorMessage>
          )}
        </div>
        <div className={InputFieldColStyle}>
          <PasswordInput
            placeholder="비밀번호 확인"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <InputErrorMessage>{`${errors.confirmPassword.message}`}</InputErrorMessage>
          )}
        </div>
        <AuthSubmitButton
          disabled={!isValid}
          className="bg-success-500 hover:bg-success-600 active:bg-success-800 py-3 text-base font-medium"
        >
          비밀번호 변경 완료
        </AuthSubmitButton>
      </form>
    </article>
  )
}

export default FindPasswordThirdStep
