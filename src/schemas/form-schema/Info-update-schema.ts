import { z } from 'zod'
import { signupSchema } from './signup-schema'

// 내 정보 수정
const InfoUpdateSchema = signupSchema.pick({
  nickname: true,
  phoneNumber: true,
  verificationCode: true,
})
type InfoUpdateType = z.infer<typeof InfoUpdateSchema>

export { InfoUpdateSchema }

export type { InfoUpdateType }
