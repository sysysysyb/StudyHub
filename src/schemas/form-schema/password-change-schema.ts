import z from 'zod'

const PasswordChangeSchema = z
  .object({
    currentPassword: z.string().min(6, '현재 비밀번호를 입력해주세요.'),
    newPassword: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
    newPasswordConfirm: z.string().min(8, '비밀번호 확인을 입력해주세요.'),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다.',
  })

type PasswordChangeFormType = z.infer<typeof PasswordChangeSchema>

export { PasswordChangeSchema, type PasswordChangeFormType }
