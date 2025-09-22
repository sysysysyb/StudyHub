import { Button } from '@/components'
import {
  AuthDescription,
  AuthSubmitButton,
  AuthTitle,
  AuthVerifyButton,
} from '@/components/auth'
import AuthIcon from '@/components/auth/AuthIcon'
import { Input, InputErrorMessage } from '@/components/common/input'
import { useVerificationCode } from '@/hooks'
import {
  FindPasswordStep2Schema,
  type FindPasswordStep2Type,
} from '@/schemas/form-schema/find-password-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { MailCheck } from 'lucide-react'
import { useEffect } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'

interface FindPasswordSecondStepProps {
  defaultValues: DefaultValues<FindPasswordStep2Type>
  email: string
  onPrev: () => void
  onNext: (value: FindPasswordStep2Type) => void
}

function FindPasswordSecondStep({
  defaultValues,
  email,
  onPrev,
  onNext,
}: FindPasswordSecondStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FindPasswordStep2Type>({
    mode: 'onChange',
    resolver: zodResolver(FindPasswordStep2Schema),
    defaultValues,
  })
  const { isCodeSent, isCodeVerified, handleCodeSend, handleCodeVerify } =
    useVerificationCode()

  const onSubmit = (value: FindPasswordStep2Type) => onNext(value)

  useEffect(() => {
    handleCodeSend('phoneNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <AuthIcon Icon={MailCheck} />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          이메일 인증
        </AuthTitle>
        <AuthDescription>{email}로 인증코드를 발송했습니다.</AuthDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Input
              {...register('code')}
              placeholder="인증코드 6자리를 입력해주세요"
            />
            <AuthVerifyButton
              disabled={!isCodeSent.phoneNumber}
              onClick={() => handleCodeVerify('phoneNumber')}
            >
              인증코드확인
            </AuthVerifyButton>
          </div>
          {errors.code && (
            <InputErrorMessage>{`${errors.code.message}`}</InputErrorMessage>
          )}
        </div>

        <AuthSubmitButton disabled={!isValid || !isCodeVerified.phoneNumber}>
          인증하기
        </AuthSubmitButton>
        <Button variant="outline" onClick={onPrev} className="w-full py-4">
          이전 단계
        </Button>
      </form>
    </article>
  )
}

export default FindPasswordSecondStep
