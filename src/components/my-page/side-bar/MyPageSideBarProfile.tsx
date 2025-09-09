import { Avatar } from '@/components'

//임시 유저 정보 인터페이스 (추후 삭제)
interface UserInformation {
  username: string
  email: string
  signUpDay: Date
  profileImageUrl?: string
}

//임시 유저 정보 (추후 삭제)
const dummyUserInfo: UserInformation = {
  username: 'test1234',
  email: 'test@test.com',
  signUpDay: new Date(),
  profileImageUrl: 'https://dummyimage.com/600x400/000/fff',
}

export default function MyPageSideBarProfile() {
  //TODO: 나중에 전역상태에서 실제 유저 데이터 불러오기
  const { username, email, signUpDay, profileImageUrl } = dummyUserInfo

  const signUpYear = signUpDay.getFullYear()
  const signUpMonth = signUpDay.getMonth()

  //16 4 8
  return (
    <div className="flex flex-col items-center justify-start">
      <Avatar src={profileImageUrl} size="2xl" state="none" className="mb-4" />
      <span className="text-heading5 mb-1 text-gray-900">{username}</span>
      <span className="text-secondary mb-2">{email}</span>
      <span className="text-xs text-gray-500">{`가입일: ${signUpYear}년 ${signUpMonth}월`}</span>
    </div>
  )
}
