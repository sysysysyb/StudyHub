import { Card } from '@/components/common/card/Card'
import MyPageSideBarProfile from './MyPageSideBarProfile'
import MyPageSideBarMenu from './MyPageSideBarMenu'
import type { ComponentProps } from 'react'
import {
  User as UserIcon,
  Bookmark as BookmarkIcon,
  Newspaper as NewspaperIcon,
  Medal as MedalIcon,
} from 'lucide-react'

const MY_PAGE_SIDE_BAR_MENU_ITEMS: ComponentProps<typeof MyPageSideBarMenu>[] =
  [
    {
      title: '내 정보',
      description: '개인 정보 조회 및 수정',
      icon: UserIcon,
      url: '/my-page',
    },
    {
      title: '북마크한 공고',
      description: '저장한 공고 목록',
      icon: BookmarkIcon,
      url: '/my-page/bookmarked/recruitment',
    },
    {
      title: '북마크한 강의',
      description: '저장한 강의 목록',
      icon: BookmarkIcon,
      url: '/my-page/bookmarked/lecture',
    },
    {
      title: '지원 내역',
      description: '스터디 지원 현황',
      icon: NewspaperIcon,
      url: '/my-page/applications',
    },
    {
      title: '완료한 스터디',
      description: '수료한 스터디 목록',
      icon: MedalIcon,
      url: '/my-page/completed-study',
    },
  ]

export default function MyPageSideBar() {
  return (
    <Card className="flex w-[280px] flex-col items-center justify-start">
      <MyPageSideBarProfile />
      <div className="mt-8 flex w-full flex-col items-center justify-start space-y-2">
        {MY_PAGE_SIDE_BAR_MENU_ITEMS.map(
          ({ title, description, icon, url }, i) => (
            <MyPageSideBarMenu
              title={title}
              description={description}
              icon={icon}
              key={i}
              url={url}
            />
          )
        )}
      </div>
    </Card>
  )
}
