import { bigint } from 'zod'

export interface UserLogin {
  email: string
  password: string
}

export interface UserSignup {
  email: string
  password: string
  nickname: string
  name: string
  phoneNumber: string
  birthday: string
  gender: string
  emailVerificationCode: string
  phoneVerificationCode: string
}

export interface UserEmailSendCode {
  email: string
}

export interface UserEmailVerify {
  email: string
  verificationCode: string
}

export interface UserPhoneSendCode {
  phoneNumber: string
}

export interface UserPhoneVerify {
  phoneNumber: string
  verificationCode: string
}

export interface UpdateUserInfoRequest {
  nickname: string
  phoneNumber: string
}

export interface UserKakaoLogin {
  code: string
}

export interface UserFindEmailSendCode {
  phoneNumber: string
}

export interface UserFindEmailVerify {
  name: string
  phoneNumber: string
  verificationCode: string
}

export interface UserResetPasswordSendCode {
  email: string
}

export interface UserResetPasswordVerify {
  email: string
  verificationCode: string
}

export interface UserResetPassword {
  password: string
}
// ERD 참조하여 생성
export interface Withdrawals {
  id: bigint
  userId: bigint
  reason: WithdrawalReasonEnum
  reason_detail: string
  dueDate: Date
  createdAt: Date
  updatedAt: Date
}

export enum WithdrawalReasonEnum {
  dissatisfaction = 'dissatisfaction',
  privacy = 'privacy',
  lowUsage = 'low_usage',
  competitor = 'competitor',
  other = 'other',
}
