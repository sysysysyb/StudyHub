import { Button } from '@/components'
import { AuthDescription, AuthTitle } from '@/components/auth'
import AuthIcon from '@/components/auth/AuthIcon'
import { Check } from 'lucide-react'
import { Link } from 'react-router'

interface FindEmailThirdStepProps {
  email: string
  createdAt: string
}

function FindEmailThirdStep({ email, createdAt }: FindEmailThirdStepProps) {
  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <AuthIcon
          Icon={Check}
          iconClassName="text-success-600"
          bgClassName="bg-success-100"
        />
        <AuthTitle className="pt-4 pb-2 text-lg font-semibold">
          이메일 찾기 완료
        </AuthTitle>
        <AuthDescription>
          입력하신 정보로 가입된 이메일을 찾았습니다
        </AuthDescription>
      </div>
      <div className="mb-15 flex flex-col items-center gap-1 rounded-lg border border-solid border-gray-200 bg-gray-50 py-4">
        <span className="text-base font-medium text-gray-900">{email}</span>
        <span className="text-sm font-normal text-gray-500">
          가입일: {createdAt}
        </span>
      </div>
      <div className="flex gap-2">
        <Button className="bg-success-500 hover:bg-success-600 active:bg-success-800 flex-1 py-3 text-base font-medium">
          <Link to="/auth/login">로그인하기</Link>
        </Button>
        <Button variant="outline" className="flex-1 py-3 text-base font-medium">
          <Link to="/auth/find-password">비밀번호 찾기</Link>
        </Button>
      </div>
    </article>
  )
}

export default FindEmailThirdStep
