import {
  AuthContainer,
  AuthDescription,
  AuthTitle,
  AuthStep,
} from '@/components/auth/common'
import { lazy, Suspense, useState } from 'react'
import FindEmailFirstStep from '@/components/auth/find-email/FindEmailFirstStep'
import { InputFieldColStyle } from '@/constants/auth-variants'
import { cn } from '@/utils'

const FindEmailSecondStep = lazy(
  () => import('@/components/auth/find-email/FindEmailSecondStep')
)
const FindEmailThirdStep = lazy(
  () => import('@/components/auth/find-email/FindEmailThirdStep')
)

const FIND_EMAIL_STEP_LIST = ['정보입력', '휴대폰인증', '결과확인']

function FindEmail() {
  const [currentStep, setCurrentStep] = useState(1)
  const [stepHistory, setStepHistory] = useState({
    step1: { name: '', phoneNumber: '' },
    step2: { code: '' },
    step3: { email: '' },
  })

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className={cn(InputFieldColStyle, 'text-center')}>
        <AuthTitle>이메일 찾기</AuthTitle>
        <AuthDescription>
          가입 시 입력한 정보로 이메일을 찾을 수 있습니다
        </AuthDescription>
      </div>
      <AuthStep
        currentStep={currentStep}
        stepLabelList={FIND_EMAIL_STEP_LIST}
      />
      {currentStep === 1 && (
        <FindEmailFirstStep
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
        <Suspense fallback={<div>Loading...</div>}>
          <FindEmailSecondStep
            defaultValues={stepHistory.step2}
            name={stepHistory.step1.name}
            phoneNumber={stepHistory.step1.phoneNumber}
            onPrev={() => setCurrentStep(1)}
            onNext={(value) => {
              setStepHistory((prev) => ({
                ...prev,
                step2: {
                  ...prev.step2,
                  ...value,
                },
              }))
              setCurrentStep(3)
            }}
            onSetEmail={(value) => {
              setStepHistory((prev) => ({
                ...prev,
                step3: {
                  ...prev.step3,
                  email: value,
                },
              }))
            }}
          />
        </Suspense>
      )}
      {currentStep === 3 && (
        <Suspense fallback={<div>Loading...</div>}>
          <FindEmailThirdStep email={stepHistory.step3.email} />
        </Suspense>
      )}
    </AuthContainer>
  )
}

export default FindEmail
