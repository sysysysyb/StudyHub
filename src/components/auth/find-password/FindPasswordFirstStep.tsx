import {
  AuthDescription,
  AuthSubmitButton,
  AuthTitle,
  AuthIcon,
} from '@/components/auth/common'
import { Input, InputErrorMessage } from '@/components/common/input'
import {
  FindPasswordStep1Schema,
  type FindPasswordStep1Type,
} from '@/schemas/form-schema/find-password-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockKeyholeOpen } from 'lucide-react'
import { useForm, type DefaultValues } from 'react-hook-form'
import { Link } from 'react-router'

interface FindPasswordFirstStepProps {
  defaultValues: DefaultValues<FindPasswordStep1Type>
  onNext: (value: FindPasswordStep1Type) => void
}

function FindPasswordFirstStep({
  defaultValues,
  onNext,
}: FindPasswordFirstStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FindPasswordStep1Type>({
    mode: 'onChange',
    resolver: zodResolver(FindPasswordStep1Schema),
    defaultValues,
  })

  const onSubmit = (value: FindPasswordStep1Type) => onNext(value)

  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <AuthIcon Icon={LockKeyholeOpen} />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          이메일 입력
        </AuthTitle>
        <AuthDescription>
          가입하신 이메일을 입력하면 인증코드를 보내드립니다
        </AuthDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Input placeholder="이메일" {...register('email')} />
          {errors.email && (
            <InputErrorMessage>{`${errors.email.message}`}</InputErrorMessage>
          )}
        </div>
        <AuthSubmitButton disabled={!isValid}>인증코드 전송</AuthSubmitButton>
        <Link
          to="/auth/login"
          className="text-primary-600 text-center text-sm font-normal"
        >
          로그인으로 돌아가기
        </Link>
      </form>
    </article>
  )
}

export default FindPasswordFirstStep
