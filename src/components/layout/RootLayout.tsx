import { Chat, Header } from '@/components'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Chat />
    </div>
  )
}
