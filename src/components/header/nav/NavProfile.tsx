import Avatar from '@/components/common/Avatar'
import Button from '@/components/common/Button'
import { SkeletonRectangle } from '@/components/common/Skeleton/SkeletonItem'
import { useUserInformation } from '@/hooks/api'
import type { UserInformation } from '@/types'
import { Bell } from 'lucide-react'
import { Link } from 'react-router'

function NavProfile() {
  const isLoggedIn = false // TODO: 로그인 여부 전역 상태 추가 예정
  const { data: user } = useUserInformation<
    Pick<UserInformation, 'name' | 'profileImageUrl'>
  >({
    select: (data) => ({
      name: data.name,
      profileImageUrl: data.profileImageUrl,
    }),
    queryKey: ['users', 'me'],
  })

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
          <Bell className="h-7 text-gray-700" />
        </div>
        <SkeletonRectangle width={150} height={50} />
      </div>
    )

  return (
    <div className="flex items-center gap-4">
      <div className="p-3">
        <Bell className="h-7 text-gray-700" />
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <Avatar
            state="none"
            src={user.profileImageUrl}
            alt={`
              ${user.name}-profile-image`}
          />
          <span className="text-primary-600 text-base font-medium">
            {user.name}
          </span>
        </div>
      )}
    </div>
  )
}

export default NavProfile
