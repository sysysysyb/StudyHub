import { Outlet } from 'react-router'
import { MyPageSideBar } from '@/components'

export default function MyPageLayout() {
  return (
    <div className="flex items-start justify-start gap-8 bg-gray-100 p-8">
      <MyPageSideBar />
      <div className="min-h-[700px] flex-1 rounded-lg border border-gray-200 bg-white p-6">
        <Outlet />
      </div>
    </div>
  )
}
