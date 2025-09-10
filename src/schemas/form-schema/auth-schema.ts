import { z } from 'zod'

export const authSchema = z
  .object({
    email: z
      .email('유효한 이메일 주소를 입력해주세요')
      .trim()
      .min(1, '이메일은 필수로 입력해야 합니다'),
    password: z
      .string()
      .regex(/^\S+$/, '공백은 사용할 수 없습니다')
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
      .max(15, '비밀번호는 최대 15자까지 가능합니다')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        '비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다'
      ),
    confirmPassword: z
      .string()
      .min(1, '비밀번호 확인은 필수로 입력해야 합니다'),
    name: z
      .string()
      .trim()
      .min(1, '이름은 필수로 입력해야 합니다')
      .max(30, '이름은 최대 30자까지 가능합니다'),
    nickname: z
      .string()
      .trim()
      .min(2, '닉네임은 최소 2자 이상이어야 합니다')
      .max(10, '닉네임은 최대 10자까지 가능합니다'),
    birthday: z
      .string()
      .min(1, '생년월일은 필수로 입력해야 합니다')
      .length(8, '생년월일은 8자리(YYYYMMDD)로 입력해주세요')
      .regex(/^\d{8}$/, '생년월일은 숫자만 입력해주세요'),
    phoneNumber: z
      .string()
      .min(1, '휴대전화 번호는 필수로 입력해야 합니다')
      .length(11, '휴대전화 번호는 11자리(ex. 01012345678)로 입력해주세요')
      .regex(
        /^010\d{8}$/,
        '휴대전화 번호는 하이픈(-) 없이 010으로 시작하는 11자리여야 합니다'
      ),
    verificationCode: z
      .string()
      .min(1, '인증코드는 필수로 입력해야 합니다')
      .length(6, '인증코드는 6자리(숫자 + 영문)로 입력해주세요'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호와 일치하지 않습니다',
    path: ['confirmPassword'],
  })

export type AuthSchemaType = z.infer<typeof authSchema>
