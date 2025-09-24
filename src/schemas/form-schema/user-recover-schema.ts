import z from 'zod'

const UserRecoverSchema = z.object({
  email: z.email(),
  verificationCode: z.string(),
})

type UserRecover = z.infer<typeof UserRecoverSchema>

export { UserRecoverSchema }
export type { UserRecover }
