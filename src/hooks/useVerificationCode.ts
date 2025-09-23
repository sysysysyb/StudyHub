import { useState } from 'react'
import { useTimer } from './useTimer'
import { useToast } from '@/hooks'

const TIMER_DURATION_MS = 180000

function useVerificationCode() {
  const { triggerToast } = useToast()

  const [isCodeSent, SetIsCodeSent] = useState({
    email: false,
    phoneNumber: false,
  })
  const [isCodeVerified, SetIsCodeVerified] = useState({
    email: false,
    phoneNumber: false,
  })
  const timer = {
    email: useTimer(TIMER_DURATION_MS, () =>
      triggerToast(
        'warning',
        '이메일 인증 시간이 만료되었습니다',
        '다시 시도해주세요'
      )
    ),
    phoneNumber: useTimer(TIMER_DURATION_MS, () =>
      triggerToast(
        'warning',
        '휴대전화 번호 인증 시간이 만료되었습니다',
        '다시 시도해주세요'
      )
    ),
  }

  const handleCodeSend = async (label: 'email' | 'phoneNumber') => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    SetIsCodeSent((prev) => ({ ...prev, [label]: true }))
    timer[label].startTimer()
    triggerToast('success', '인증 코드를 전송했습니다.', '확인 후 입력해주세요')
  }

  const handleCodeVerify = async (label: 'email' | 'phoneNumber') => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    SetIsCodeVerified((prev) => ({ ...prev, [label]: true }))
    SetIsCodeSent((prev) => ({ ...prev, [label]: false }))
    timer[label].resetTimer()
    triggerToast(
      'success',
      '인증코드가 확인되었습니다',
      '다음 단계를 진행해 주세요'
    )
  }

  return { isCodeSent, isCodeVerified, timer, handleCodeSend, handleCodeVerify }
}

export default useVerificationCode
