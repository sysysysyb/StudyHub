import { useState, type ReactNode } from 'react'
import { NavComponent } from './NavComponent'
import NavProfile from './NavProfile'
import { Link } from 'react-router'
import useLogout from '@/hooks/api/auth/useLogout'
import { LogOut, User } from 'lucide-react'
import { LEARN_BASE_URL, STUDY_BASE_URL } from '@/constants/url-constants'

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
        <NavComponent href="*" label="강의 목록" />
        <NavComponent href={STUDY_BASE_URL} label="스터디 그룹" />
        <NavComponent
          href={`${LEARN_BASE_URL}/recruitment`}
          label="구인 공고"
        />
        <NavProfile onProfileClick={handleProfileClick} />
      </div>
      {isProfileClicked && (
        <div className="absolute top-12 right-0 flex w-48 flex-col gap-2 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
          <Link
            to="/my-page"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:opacity-80"
            onClick={handleProfileClick}
          >
            <User className="size-4" />
            <span className="text-sm font-normal">마이페이지</span>
          </Link>
          <button
            className="text-danger-600 flex cursor-pointer items-center gap-3 px-4 py-2 hover:opacity-80"
            onClick={handleLogoutClick}
          >
            <LogOut className="size-4" />
            <span className="text-sm font-normal">로그아웃</span>
          </button>
        </div>
      )}
    </div>
  )
}
