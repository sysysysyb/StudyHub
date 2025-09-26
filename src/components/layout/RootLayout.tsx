import { Header, Footer, Chat } from '@/components'
import { SM_WIDTH_PIXEL } from '@/constants/break-points'
import { useWindowHeight, useWindowWidth } from '@/hooks'
import { useUserInformation } from '@/hooks/api'
import { Outlet } from 'react-router'

const HEADER_HEIGHT_PX = 64
const DESKTOP_FOOTER_HEIGHT_PX = 313
//모바일일 때 길이는 가변적이라 일단 임의의 값 할당
const MOBILE_FOOTER_HEIGHT_PX = 745

export default function RootLayout() {
  const windowHeight = useWindowHeight()
  const windowWidth = useWindowWidth()

  const minContentHeight =
    windowHeight -
    HEADER_HEIGHT_PX -
    (windowWidth >= SM_WIDTH_PIXEL
      ? DESKTOP_FOOTER_HEIGHT_PX
      : MOBILE_FOOTER_HEIGHT_PX)

  const { data: userData } = useUserInformation()

  return (
    <div>
      <Header />
      <div
        style={{
          minHeight: `${minContentHeight}px`,
        }}
        className="bg-gray-100"
      >
        <Outlet />
      </div>
      <Footer />
      {userData ? <Chat /> : null}
    </div>
  )
}
