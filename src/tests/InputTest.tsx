import { AuthVerifyButton } from '@/components/auth'
import {
  Input,
  InputDescription,
  InputErrorMessage,
  InputIcon,
  InputLabel,
} from '@/components/common/input'

import { Mail } from 'lucide-react'

function InputTest() {
  return (
    <section className="flex w-full flex-col gap-10">
      <h3 className="text-center text-xl font-semibold">입력 필드 Test</h3>
      <article className="flex flex-col gap-6">
        <div>
          <Input placeholder="아이디를 입력하세요" />
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>이메일</InputLabel>
          <div className="relative">
            <InputIcon icon={Mail} className="absolute" />
            <Input type="email" placeholder="이메일을 입력하세요" hasIcon />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>비밀번호</InputLabel>

          <Input type="password" placeholder="비밀번호를 입력하세요" isError />
          <InputErrorMessage>잘못된 비밀번호 형식입니다</InputErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <InputLabel>인증코드</InputLabel>
            <InputDescription>
              본인인증을 위해 인증코드를 입력해주세요
            </InputDescription>
          </div>
          <div className="flex gap-3">
            <Input placeholder="6자리 인증 코드를 입력하세요" />
            <AuthVerifyButton className="whitespace-nowrap">
              인증코드확인
            </AuthVerifyButton>
          </div>
        </div>
      </article>
    </section>
  )
}

export default InputTest
