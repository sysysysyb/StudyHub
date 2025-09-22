import { AuthContainer, AuthDescription, AuthTitle } from '@/components/auth'
import AuthStep from '@/components/auth/AuthStep'
import { useState } from 'react'
import FindEmailFirstStep from './FindEmailFirstStep'
import FindEmailSecondStep from './FindEmailSecondStep'
import FindEmailThirdStep from './FindEmailThirdStep'

const FIND_EMAIL_STEP_LIST = ['정보입력', '휴대폰인증', '결과확인']

function FindEmail() {
  const [currentStep, setCurrentStep] = useState(1)
  const [stepHistory, setStepHistory] = useState({
    step1: { name: '', phoneNumber: '' },
    step2: { code: '' },
    step3: { email: '', createdAt: '' },
  })

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-1">
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
        <FindEmailSecondStep
          defaultValues={stepHistory.step2}
          phoneNumber={stepHistory.step1.phoneNumber}
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
                createdAt: '2025-01-15',
              },
            }))
            setCurrentStep(3)
          }}
        />
      )}
      {currentStep === 3 && (
        <FindEmailThirdStep
          email={stepHistory.step3.email}
          createdAt={stepHistory.step3.createdAt}
        />
      )}
    </AuthContainer>
  )
}

export default FindEmail
