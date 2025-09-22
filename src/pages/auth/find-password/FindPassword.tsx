import { AuthContainer, AuthDescription, AuthTitle } from '@/components/auth'
import AuthStep from '@/components/auth/AuthStep'
import { useState } from 'react'
import FindPasswordFirstStep from './FindPasswordFirstStep'
import FindPasswordSecondStep from './FindPasswordSecondStep'
import FindPasswordThirdStep from './FindPasswordThirdStep'
import { useNavigate } from 'react-router'
import { useToast } from '@/hooks'

const FIND_EMAIL_STEP_LIST = ['이메일입력', '이메일인증', '비밀번호재설정']

function FindPassword() {
  const [currentStep, setCurrentStep] = useState(1)
  const [stepHistory, setStepHistory] = useState({
    step1: { email: '' },
    step2: { code: '' },
    step3: { password: '', confirmPassword: '' },
  })
  const navigate = useNavigate()
  const { triggerToast } = useToast()

  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-1">
        <AuthTitle>비밀번호 찾기</AuthTitle>
        <AuthDescription>
          가입한 이메일로 비밀번호를 재설정할 수 있습니다
        </AuthDescription>
      </div>
      <AuthStep
        currentStep={currentStep}
        stepLabelList={FIND_EMAIL_STEP_LIST}
      />
      {currentStep === 1 && (
        <FindPasswordFirstStep
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
        <FindPasswordSecondStep
          defaultValues={stepHistory.step2}
          email={stepHistory.step1.email}
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
        <FindPasswordThirdStep
          defaultValues={stepHistory.step3}
          onNext={() => {
            navigate('/auth/login')
            triggerToast('success', '비밀번호 변경이 완료되었습니다.')
          }}
        />
      )}
    </AuthContainer>
  )
}

export default FindPassword
