export interface UserLogin {
  email: string
  password: string
}

export interface UserSignup {
  email: string
  password: string
  nickname: string
  name: string
  phone_number: string
  birthday: string
  gender: string
  email_verification_code: string
  phone_verification_code: string
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
