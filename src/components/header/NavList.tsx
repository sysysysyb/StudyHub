import type { ReactNode } from 'react'
import { NavComponent } from './NavComponent'
import { Button } from '@/components'
import { useNavigate } from 'react-router'

export function HeaderNavList(): ReactNode {
  const navigate = useNavigate()

  return (
    // 로그인 여부에 따른 조건부 렌더링을 위해 별도 컴포넌트화
    <div className="flex items-center">
      <NavComponent label="강의 목록" />
      <NavComponent label="스터디 그룹" />
      <NavComponent label="구인 공고" />
      {/* 이 줄 이후의 요소들만 로그인 시 변경 예정 */}
      <NavComponent label="로그인" event={() => navigate('/auth/login')} />
      <Button size="sm" className="ml-4 w-full">
        회원가입
      </Button>
    </div>
  )
}
