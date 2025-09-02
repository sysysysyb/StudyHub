import { HeaderLogo } from './HeaderLogo'
import { NavComponent } from './NavComponent'
import type { ReactNode } from 'react'

function Header(): ReactNode {
  return (
    <header className="sticky top-0 z-99 flex h-[65px] items-center justify-between border border-gray-200 bg-white px-8 pb-px">
      <HeaderLogo />
      <div className="flex items-center">
        <NavComponent label="강의 목록" />
        <NavComponent label="스터디 그룹" />
        <NavComponent label="구인 공고" />
        <NavComponent label="로그인" />
        <button className="bg-primary-500 rounded-md p-2 whitespace-nowrap text-white">
          회원가입
        </button>
      </div>
    </header>
  )
}

export default Header
