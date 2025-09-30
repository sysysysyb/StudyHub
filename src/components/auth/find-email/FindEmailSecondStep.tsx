import { Button } from '@/components'
import {
  AuthDescription,
  AuthSubmitButton,
  AuthTitle,
  AuthIcon,
  AuthVerifyButton,
} from '@/components/auth/common'
import { Input, InputErrorMessage } from '@/components/common/input'
import {
  InputFieldColStyle,
  InputFieldRowStyle,
  InputGroupStyle,
} from '@/constants/auth-variants'
import { useVerificationCode } from '@/hooks'
import { useFindEmail } from '@/hooks/api/auth/useFindEmail'
import {
  FindEmailStep2Schema,
  type FindEmailStep2Type,
} from '@/schemas/form-schema/find-email-schema'
import { cn } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Phone } from 'lucide-react'
import { useEffect } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'

interface FindEmailSecondStepProps {
  defaultValues: DefaultValues<FindEmailStep2Type>
  name: string
  phoneNumber: string
  onPrev: () => void
  onNext: (value: FindEmailStep2Type) => void
  onSetEmail: (value: string) => void
}

function FindEmailSecondStep({
  defaultValues,
  name,
  phoneNumber,
  onPrev,
  onNext,
  onSetEmail,
}: FindEmailSecondStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FindEmailStep2Type>({
    mode: 'onChange',
    resolver: zodResolver(FindEmailStep2Schema),
    defaultValues,
  })
  const {
    isCodeSent,
    isCodeVerified,
    handleCodeSend,
    handleCodeVerify,
    // findEmailValue,
  } = useVerificationCode()
  const findEmail = useFindEmail()

  const onSubmit = (code: FindEmailStep2Type) => onNext(code)

  const handleClickVerifyButton = () => {
    handleCodeVerify('findEmail', {
      phoneNumber: phoneNumber,
      verificationCode: getValues('code'),
    })
  }

  useEffect(() => {
    handleCodeSend('findEmail', phoneNumber)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isCodeVerified.findEmail) return

    findEmail.mutate(
      {
        name,
        phoneNumber,
        verificationCode: getValues('code'),
      },
      {
        onSuccess: onSetEmail,
      }
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCodeVerified.findEmail])

  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <AuthIcon Icon={Phone} />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          휴대폰 인증
        </AuthTitle>
        <AuthDescription>
          {phoneNumber}로 인증코드를 발송했습니다.
        </AuthDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={InputGroupStyle}>
        <div className={InputFieldColStyle}>
          <div className={InputFieldRowStyle}>
            <Input
              disabled={!isCodeSent.findEmail}
              {...register('code')}
              placeholder="인증코드 6자리를 입력해주세요"
              className={cn(
                isCodeVerified.findEmail &&
                  'disabled:bg-white disabled:text-black'
              )}
            />
            <AuthVerifyButton
              disabled={!isCodeSent.findEmail}
              onClick={handleClickVerifyButton}
            >
              인증코드확인
            </AuthVerifyButton>
          </div>
          {errors.code && (
            <InputErrorMessage>{`${errors.code.message}`}</InputErrorMessage>
          )}
        </div>

        <AuthSubmitButton disabled={!isCodeVerified.findEmail}>
          인증하기
        </AuthSubmitButton>
        <Button variant="outline" onClick={onPrev} className="w-full py-4">
          이전 단계
        </Button>
      </form>
    </article>
  )
}

export default FindEmailSecondStep
