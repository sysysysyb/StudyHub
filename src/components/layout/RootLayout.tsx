import { Header, Footer, Chat } from '@/components'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Chat />
    </div>
  )
}
