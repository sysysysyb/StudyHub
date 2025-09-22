import { z } from 'zod'
import { authSchema } from './auth-schema'

export const FindPasswordStep1Schema = authSchema.pick({
  email: true,
})

export type FindPasswordStep1Type = z.infer<typeof FindPasswordStep1Schema>

export const FindPasswordStep2Schema = z.object({
  code: z
    .string()
    .min(1, '인증코드는 필수로 입력해야 합니다')
    .length(6, '인증코드는 6자리(숫자 + 영문)로 입력해주세요'),
})

export type FindPasswordStep2Type = z.infer<typeof FindPasswordStep2Schema>

export const FindPasswordStep3Schema = authSchema.pick({
  password: true,
  confirmPassword: true,
})

export type FindPasswordStep3Type = z.infer<typeof FindPasswordStep2Schema>
