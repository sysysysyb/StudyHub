import { Avatar } from '@/components'
import { useUserInformation } from '@/hooks/api'

export default function MyPageSideBarProfile() {
  const { data: userInfo } = useUserInformation()
  if (!userInfo) return '로그인이 필요합니다.'
  const signUpDate = new Date(userInfo.createdAt)
  const signUpYear = signUpDate.getFullYear()
  const signUpMonth = signUpDate.getMonth() + 1

  return (
    <div className="flex flex-col items-center justify-start">
      <Avatar
        src={userInfo.profileImageUrl}
        size="2xl"
        state="none"
        className="mb-4"
      />
      <span className="text-heading5 mb-1 text-gray-900">{userInfo.name}</span>
      <span className="text-secondary mb-2">{userInfo.email}</span>
      <span className="text-xs text-gray-500">{`가입일: ${signUpYear}년 ${signUpMonth}월`}</span>
    </div>
  )
}
