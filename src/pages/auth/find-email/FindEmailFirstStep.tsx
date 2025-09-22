import { AuthDescription, AuthSubmitButton, AuthTitle } from '@/components/auth'
import AuthIcon from '@/components/auth/AuthIcon'
import { Input, InputErrorMessage } from '@/components/common/input'
import {
  FindEmailStep1Schema,
  type FindEmailStep1Type,
} from '@/schemas/form-schema/find-email-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRoundSearch } from 'lucide-react'
import { useForm, type DefaultValues } from 'react-hook-form'
import { Link } from 'react-router'

interface FindEmailFirstStepProps {
  defaultValues: DefaultValues<FindEmailStep1Type>
  onNext: (value: FindEmailStep1Type) => void
}

function FindEmailFirstStep({
  defaultValues,
  onNext,
}: FindEmailFirstStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FindEmailStep1Type>({
    mode: 'onChange',
    resolver: zodResolver(FindEmailStep1Schema),
    defaultValues,
  })

  const onSubmit = (value: FindEmailStep1Type) => onNext(value)

  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <AuthIcon Icon={UserRoundSearch} />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          회원 정보 입력
        </AuthTitle>
        <AuthDescription>
          가입 시 입력한 이름과 휴대폰 번호를 입력해주세요
        </AuthDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Input placeholder="이름" {...register('name')} />
          {errors.name && (
            <InputErrorMessage>{`${errors.name.message}`}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input placeholder="휴대전화 번호" {...register('phoneNumber')} />
          {errors.phoneNumber && (
            <InputErrorMessage>{`${errors.phoneNumber.message}`}</InputErrorMessage>
          )}
        </div>
        <AuthSubmitButton disabled={!isValid}>다음 단계</AuthSubmitButton>
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

export default FindEmailFirstStep
