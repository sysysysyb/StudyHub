// pages/NotFound.tsx
import { Button } from '@/components'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-8 p-10">
      <h1 className="text-heading1">404 ERROR</h1>
      <div className="flex flex-col gap-1">
        <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
        <p>존재하지 않는 주소를 입력하셨거나</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </div>

      <Button size="lg">
        <Link to="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  )
}
