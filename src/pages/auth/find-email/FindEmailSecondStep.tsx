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
  FindEmailStep2Schema,
  type FindEmailStep2Type,
} from '@/schemas/form-schema/find-email-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Phone } from 'lucide-react'
import { useEffect } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'

interface FindEmailSecondStepProps {
  defaultValues: DefaultValues<FindEmailStep2Type>
  phoneNumber: string
  onPrev: () => void
  onNext: (value: FindEmailStep2Type) => void
}

function FindEmailSecondStep({
  defaultValues,
  phoneNumber,
  onPrev,
  onNext,
}: FindEmailSecondStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FindEmailStep2Type>({
    mode: 'onChange',
    resolver: zodResolver(FindEmailStep2Schema),
    defaultValues,
  })
  const { isCodeSent, isCodeVerified, handleCodeSend, handleCodeVerify } =
    useVerificationCode()

  const onSubmit = (value: FindEmailStep2Type) => onNext(value)

  useEffect(() => {
    handleCodeSend('phoneNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <AuthIcon Icon={Phone} />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          휴대폰 인증
        </AuthTitle>
        <AuthDescription>
          {phoneNumber}로 인증코드를 발송했습니다.
        </AuthDescription>
      </div>
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
      <AuthSubmitButton disabled={!isValid || !isCodeVerified.phoneNumber}>
        인증하기
      </AuthSubmitButton>
      <Button variant="outline" onClick={onPrev} className="w-full py-4">
        이전 단계
      </Button>
    </form>
  )
}

export default FindEmailSecondStep
