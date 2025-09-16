import { z } from 'zod'
import { authSchema } from './auth-schema'

export const FindEmailStep1Schema = authSchema.pick({
  name: true,
  phoneNumber: true,
})

export type FindEmailStep1Type = z.infer<typeof FindEmailStep1Schema>

export const FindEmailStep2Schema = z.object({
  code: z
    .string()
    .min(1, '인증코드는 필수로 입력해야 합니다')
    .length(6, '인증코드는 6자리(숫자 + 영문)로 입력해주세요'),
})

export type FindEmailStep2Type = z.infer<typeof FindEmailStep2Schema>
