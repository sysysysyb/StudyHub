import { z } from 'zod'
import { signupSchema } from './signup-schema'

// 내 정보 수정
const InfoUpdateSchema = z.object({
  nickname: signupSchema.shape.nickname,
  phoneNumber: signupSchema.shape.phoneNumber,
  infoUpdateVerificationCode:
    signupSchema.shape.verificationCode.shape.phoneNumber,
})

type InfoUpdateType = z.infer<typeof InfoUpdateSchema>

export { InfoUpdateSchema }
export type { InfoUpdateType }
