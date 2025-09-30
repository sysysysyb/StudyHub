import { Button, Avatar, Notification } from '@/components'
import { SkeletonRectangle } from '@/components/common/skeleton/SkeletonItem'
import { useUserInformation } from '@/hooks/api'
import { useLoginStore } from '@/store/useLoginStore'
import type { UserInformation } from '@/types'
import { Bell } from 'lucide-react'
import { Link } from 'react-router'

function NavProfile({ onProfileClick }: { onProfileClick: () => void }) {
  const { isLoggedIn } = useLoginStore()
  const { data: user } = useUserInformation<
    Pick<UserInformation, 'name' | 'nickname' | 'profileImageUrl'>
  >({
    select: (data) => ({
      name: data.name,
      nickname: data.nickname,
      profileImageUrl: data.profileImageUrl,
    }),
    queryKey: ['info'],
  })

  const getDisplayName = (name: string, nickname: string) => {
    if (!name || name.trim() === '이름없음') {
      return nickname ?? 'Hello'
    } else {
      return name
    }
  }

  if (!isLoggedIn)
    return (
      <div className="flex items-center gap-4">
        <Link to="/auth/login">
          <Button
            variant="ghost"
            size="sm"
            className="px-4 text-base font-normal text-gray-700"
          >
            로그인
          </Button>
        </Link>
        <Link to="/auth/signup">
          <Button size="sm" className="px-4 whitespace-nowrap">
            회원가입
          </Button>
        </Link>
      </div>
    )

  if (!user)
    return (
      <div className="flex items-center gap-4">
        <div className="p-3">
          <Bell className="h-7 cursor-pointer text-gray-700" />
        </div>
        <div className="w-25">
          <SkeletonRectangle width={100} height={30} />
        </div>
      </div>
    )

  return (
    <div className="flex items-center gap-2.5 lg:gap-4">
      <div className="p-3">
        <Notification />
      </div>
      {user && (
        <button
          className="flex cursor-pointer items-center gap-2"
          onClick={onProfileClick}
        >
          <Avatar
            size="sm"
            state="none"
            src={user.profileImageUrl}
            alt={user.profileImageUrl && `${user.name}-profile-image`}
            iconSize={20}
          />
          <span className="text-primary-600 text-base font-medium">
            {getDisplayName(user.name, user.nickname)}
          </span>
        </button>
      )}
    </div>
  )
}

export default NavProfile
