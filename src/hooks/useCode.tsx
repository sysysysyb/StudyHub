import { useState } from 'react'
import { useTimer } from './useTimer'
import useToast from './useToast'

function useCode() {
  const [isCodeSent, SetIsCodeSent] = useState({
    email: false,
    phoneNumber: false,
  })
  const [isCodeVerified, SetIsCodeVerified] = useState({
    email: false,
    phoneNumber: false,
  })
  const timer = {
    email: useTimer(180000),
    phoneNumber: useTimer(180000),
  }
  const { triggerToast } = useToast()

  const handleCodeSend = async (label: 'email' | 'phoneNumber') => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    SetIsCodeSent((prev) => ({ ...prev, [label]: true }))
    timer[label].startTimer()
    triggerToast('success', '인증 코드를 전송했습니다.')
  }

  const handleCodeVerify = async (label: 'email' | 'phoneNumber') => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    SetIsCodeVerified((prev) => ({ ...prev, [label]: true }))
    SetIsCodeSent((prev) => ({ ...prev, [label]: false }))
    timer[label].resetTimer()
    triggerToast('success', '인증을 완료했습니다!')
  }

  return { isCodeSent, isCodeVerified, timer, handleCodeSend, handleCodeVerify }
}

export default useCode
