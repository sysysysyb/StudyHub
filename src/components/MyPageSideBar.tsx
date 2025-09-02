import { Card } from '@/components/common/Card/Card'

//임시 유저 정보 인터페이스
//TODO: 실제 api response에 맞추기
interface UserInformation {
  username: string
  email: string
  signUpDay: Date
  profileImageUrl?: string
}

interface MyPageSideBarProps {
  user: UserInformation
}

export default function MyPageSideBar({ user }: MyPageSideBarProps) {
  return <Card>MyPageSideBar</Card>
}
