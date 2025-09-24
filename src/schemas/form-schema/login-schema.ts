import { z } from 'zod'
import { signupSchema } from './signup-schema'

// 로그인
const loginSchema = signupSchema.pick({ email: true, password: true })
type LoginSchemaType = z.infer<typeof loginSchema>

export { loginSchema }

export type { LoginSchemaType }
