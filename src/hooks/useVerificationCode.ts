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
import { useUserRecoverSendCode, useUserRecoverVerify } from '@/hooks/api'
import type { UserRecoverVerifyBody } from '@/types/api-request-types/user-recover-request-types'

const TIMER_DURATION_MS = 180000
type labelType = 'email' | 'phoneNumber' | 'userRecover'

interface VerifyDataMap {
  email: UserEmailVerify
  phoneNumber: UserPhoneVerify
  userRecover: UserRecoverVerifyBody
}

function useVerificationCode() {
  const { triggerToast } = useToast()
  const emailSendCode = useEmailSendCode()
  const phoneSendCode = usePhoneSendCode()
  const userRecoverSendCode = useUserRecoverSendCode()
  const emailVerify = useEmailVerify()
  const phoneVerify = usePhoneVerify()
  const userRecoverVerify = useUserRecoverVerify()

  const [isCodeSent, SetIsCodeSent] = useState({
    email: false,
    phoneNumber: false,
    userRecover: false,
  })
  const [isCodeVerified, SetIsCodeVerified] = useState({
    email: false,
    phoneNumber: false,
    userRecover: false,
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
    userRecover: useTimer(TIMER_DURATION_MS, () =>
      triggerToast(
        'warning',
        '이메일 인증 시간이 만료되었습니다',
        '다시 시도해주세요'
      )
    ),
  }

  const handleCodeSend = async (label: labelType, value: string) => {
    if (label === 'email') {
      const data: UserEmailSendCode = { email: value }
      await emailSendCode.mutateAsync(data)
    }
    if (label === 'phoneNumber') {
      const phoneNumberE164KR = formattedPhoneToE164KR(value)
      const data: UserPhoneSendCode = { phoneNumber: phoneNumberE164KR }
      await phoneSendCode.mutateAsync(data)
    }
    if (label === 'userRecover') {
      await userRecoverSendCode.mutateAsync(value)
    }
    SetIsCodeSent((prev) => ({ ...prev, [label]: true }))
    timer[label].startTimer()
  }

  const handleCodeVerify = async <L extends labelType>(
    label: L,
    verifyData: VerifyDataMap[L]
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
    if (label === 'userRecover') {
      const { email, verificationCode } = verifyData as UserRecoverVerifyBody
      userRecoverVerify.mutate({ email, verificationCode })
    }
    SetIsCodeVerified((prev) => ({ ...prev, [label]: true }))
    SetIsCodeSent((prev) => ({ ...prev, [label]: false }))
    timer[label].resetTimer()
  }

  return { isCodeSent, isCodeVerified, timer, handleCodeSend, handleCodeVerify }
}

export default useVerificationCode
