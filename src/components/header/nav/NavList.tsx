import { useState, type ReactNode } from 'react'
import { NavComponent } from './NavComponent'
import NavProfile from './NavProfile'
import { Link } from 'react-router'
import useLogout from '@/hooks/api/auth/useLogout'

export function HeaderNavList(): ReactNode {
  const [isProfileClicked, setIsProfileClicked] = useState(false)
  const logout = useLogout()

  const handleProfileClick = () => {
    setIsProfileClicked((prev) => !prev)
  }

  const handleLogoutClick = () => {
    logout.mutate()
    handleProfileClick()
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-5 lg:gap-8">
        <NavComponent to="*" label="강의 목록" />
        <NavComponent to="*" label="스터디 그룹" />
        <NavComponent to="*" label="구인 공고" />
        <NavProfile onProfileClick={handleProfileClick} />
      </div>
      {isProfileClicked && (
        <div className="absolute top-14.5 right-0 flex h-30 w-30 flex-col justify-evenly rounded-b-lg bg-white">
          <Link
            to="/my-page"
            className="text-center text-gray-700 hover:opacity-80"
            onClick={handleProfileClick}
          >
            마이페이지
          </Link>
          <button
            className="text-danger-600 cursor-pointer hover:opacity-80"
            onClick={handleLogoutClick}
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  )
}
