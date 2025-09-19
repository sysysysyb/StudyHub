import type { ReactNode } from 'react'
import { NavComponent } from './NavComponent'
import NavProfile from './NavProfile'

export function HeaderNavList(): ReactNode {
  return (
    <div className="flex items-center">
      <NavComponent to="*" label="강의 목록" />
      <NavComponent to="*" label="스터디 그룹" />
      <NavComponent to="*" label="구인 공고" />
      <NavProfile />
    </div>
  )
}
