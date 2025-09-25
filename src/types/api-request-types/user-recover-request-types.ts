export interface UserRecoverVerifyBody {
  email: string
  verificationCode: string
}

export interface UserRecoverSendBody {
  email: string
}
