import { HeaderLogo } from './HeaderLogo'
import { MobileHeader } from './HeaderMobile'
import { useState, useEffect, type ReactNode } from 'react'
import { HeaderNavList } from './nav/NavList'

function Header(): ReactNode {
  // 모바일 여부 전역상태관리로 뺄지 의논 필요.
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile ? (
    <MobileHeader />
  ) : (
    <header className="sticky top-0 z-99 flex h-16 items-center justify-between border border-gray-200 bg-white px-6 pb-px md:px-8">
      <HeaderLogo />
      <HeaderNavList />
    </header>
  )
}

export default Header
