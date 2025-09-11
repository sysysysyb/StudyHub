import type { ComponentProps } from 'react'
import MobileMyPageNavBarItem from './MobileMyPageNavBarItem'
import { BookmarkIcon, MedalIcon, NewspaperIcon, UserIcon } from 'lucide-react'

const MOBILE_MY_PAGE_NAV_BAR_ITEMS: ComponentProps<
  typeof MobileMyPageNavBarItem
>[] = [
  {
    title: '내 정보',
    icon: UserIcon,
    url: '/my-page',
  },
  {
    title: '북마크한 공고',
    icon: BookmarkIcon,
    url: '/my-page/bookmarked',
  },

  {
    title: '지원 내역',
    icon: NewspaperIcon,
    url: '/my-page/applied-study',
  },
  {
    title: '완료한 스터디',
    icon: MedalIcon,
    url: '/my-page/completed-study',
  },
]

export default function MobileMyPageNavBar() {
  return (
    <div className="grid h-40 w-full max-w-lg grid-cols-2 overflow-hidden rounded-xl border-gray-200">
      {MOBILE_MY_PAGE_NAV_BAR_ITEMS.map(({ title, icon, url }, i) => (
        <MobileMyPageNavBarItem title={title} icon={icon} url={url} key={i} />
      ))}
    </div>
  )
}
