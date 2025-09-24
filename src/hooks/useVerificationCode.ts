import { useState } from 'react'
import { useTimer } from './useTimer'
import { useToast } from '@/hooks'
import useEmailSendCode from './api/auth/useEmailSendCode'
import usePhoneSendCode from './api/auth/usePhoneSendCode'
import useEmailVerify from './api/auth/useEmailVerify'
import usePhoneVerify from './api/auth/usePhoneVerify'
import type {
  UserEmailSendCode,
  UserEmailVerify,
  UserPhoneSendCode,
  UserPhoneVerify,
} from '@/types/api-request-types/auth-request-types'
import { formattedPhoneToE164KR } from '@/utils/formatted-phone'

const TIMER_DURATION_MS = 180000

function useVerificationCode() {
  const { triggerToast } = useToast()
  const emailSendCode = useEmailSendCode()
  const phoneSendCode = usePhoneSendCode()
  const emailVerify = useEmailVerify()
  const phoneVerify = usePhoneVerify()

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

  const handleCodeSend = async (
    label: 'email' | 'phoneNumber',
    value: string
  ) => {
    if (label === 'email') {
      const data: UserEmailSendCode = { email: value }
      emailSendCode.mutate(data)
    }
    if (label === 'phoneNumber') {
      const phoneNumberE164KR = formattedPhoneToE164KR(value)
      const data: UserPhoneSendCode = { phoneNumber: phoneNumberE164KR }
      phoneSendCode.mutate(data)
    }
    SetIsCodeSent((prev) => ({ ...prev, [label]: true }))
    timer[label].startTimer()
  }

  const handleCodeVerify = async (
    label: 'email' | 'phoneNumber',
    verifyData: UserEmailVerify | UserPhoneVerify
  ) => {
    if (label === 'email') {
      const data: UserEmailVerify = verifyData as UserEmailVerify
      emailVerify.mutate(data)
    }
    if (label === 'phoneNumber') {
      const { phoneNumber, verificationCode } = verifyData as UserPhoneVerify
      const data = {
        phoneNumber: formattedPhoneToE164KR(phoneNumber),
        verificationCode: verificationCode,
      }
      phoneVerify.mutate(data)
    }
    SetIsCodeVerified((prev) => ({ ...prev, [label]: true }))
    SetIsCodeSent((prev) => ({ ...prev, [label]: false }))
    timer[label].resetTimer()
  }

  return { isCodeSent, isCodeVerified, timer, handleCodeSend, handleCodeVerify }
}

export default useVerificationCode
