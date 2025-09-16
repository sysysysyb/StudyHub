import { Button } from '@/components'
import { AuthSubmitButton, AuthVerifyButton } from '@/components/auth'
import AuthStep from '@/components/auth/AuthStep'
import { Input, InputErrorMessage } from '@/components/common/input'
import { useCode } from '@/hooks'
import {
  FindEmailStep1Schema,
  FindEmailStep2Schema,
  type FindEmailStep1Type,
  type FindEmailStep2Type,
} from '@/schemas/form-schema/find-email-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'

interface FirstStepProps {
  defaultValues: DefaultValues<FindEmailStep1Type>
  onNext: (value: FindEmailStep1Type) => void
}

function FirstStep({ defaultValues, onNext }: FirstStepProps) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input placeholder="이름" {...register('name')} />
      {errors.name && (
        <InputErrorMessage>{`${errors.name.message}`}</InputErrorMessage>
      )}
      <Input placeholder="휴대전화 번호" {...register('phoneNumber')} />
      {errors.phoneNumber && (
        <InputErrorMessage>{`${errors.phoneNumber.message}`}</InputErrorMessage>
      )}
      <AuthSubmitButton disabled={!isValid}>Next</AuthSubmitButton>
    </form>
  )
}

interface SecondStepProps {
  defaultValues: DefaultValues<FindEmailStep2Type>
  onPrev: () => void
  onNext: (value: FindEmailStep2Type) => void
}

function SecondStep({ defaultValues, onPrev, onNext }: SecondStepProps) {
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
    useCode()

  const onSubmit = (value: FindEmailStep2Type) => onNext(value)

  useEffect(() => {
    handleCodeSend('phoneNumber')
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
        Next
      </AuthSubmitButton>
      <Button variant="outline" onClick={onPrev} className="w-full py-4">
        Prev
      </Button>
    </form>
  )
}

function StepTest() {
  const [currentStep, setCurrentStep] = useState(1)
  const [stepHistory, setStepHistory] = useState({
    step1: { name: '', phoneNumber: '' },
    step2: { code: '' },
    step3: { email: '', date: '' },
  })

  return (
    <div className="flex flex-col gap-10">
      <AuthStep totalIndex={3} currentIndex={currentStep} />
      {currentStep === 1 && (
        <FirstStep
          defaultValues={stepHistory.step1}
          onNext={(value) => {
            setStepHistory((prev) => ({
              ...prev,
              step1: {
                ...prev.step1,
                ...value,
              },
            }))
            setCurrentStep(2)
          }}
        />
      )}
      {currentStep === 2 && (
        <SecondStep
          defaultValues={stepHistory.step2}
          onPrev={() => setCurrentStep(1)}
          onNext={(value) => {
            setStepHistory((prev) => ({
              ...prev,
              step2: {
                ...prev.step2,
                ...value,
              },
              step3: {
                ...prev.step3,
                email: 'test@test.com',
              },
            }))
            setCurrentStep(3)
          }}
        />
      )}
      {currentStep === 3 && (
        <div className="text-center">이메일: {stepHistory.step3.email}</div>
      )}
    </div>
  )
}

export default StepTest
