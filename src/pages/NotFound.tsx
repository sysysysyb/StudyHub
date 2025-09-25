// pages/NotFound.tsx
import { Button } from '@/components'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-10">
      <h1 className="text-primary-500 text-6xl font-bold sm:text-8xl">404</h1>
      <h1 className="text-2xl font-medium text-gray-700 sm:text-3xl">
        찾으시는 페이지가 없습니다
      </h1>
      <div className="flex flex-col items-center justify-center gap-1 text-base text-gray-700 sm:text-xl">
        <p>
          방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수
          없습니다.
        </p>
        <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
      </div>

      <Button size={'lg'}>
        <Link to="/">홈으로 돌아가기 →</Link>
      </Button>
    </div>
  )
}
