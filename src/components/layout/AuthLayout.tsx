import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center py-0 sm:py-30">
      <Outlet />
    </div>
  )
}
