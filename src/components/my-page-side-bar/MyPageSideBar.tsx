import { Card } from '@/components/common/Card/Card'
import MyPageSideBarProfile from './MyPageSideBarProfile'

export default function MyPageSideBar() {
  return (
    <Card className="flex flex-col items-center justify-start">
      <MyPageSideBarProfile />
    </Card>
  )
}
