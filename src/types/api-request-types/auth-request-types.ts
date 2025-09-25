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
