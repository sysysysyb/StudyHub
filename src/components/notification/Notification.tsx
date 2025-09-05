import { Bell as BellIcon } from 'lucide-react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalMain,
  ModalTitle,
  ModalTrigger,
} from '@/components/common/Modal'
import NotificationNavigation from '@/components/notification/NotificationNavigation'
import type { Notification as NotificationType } from '@/types/api-response-types/notification-response-types'
import NotificationCard from '@/components/notification/NotificationCard'
import { useEffect, useState } from 'react'
import { useNotificationNavigationItemStore } from '@/store'

const dummyNotifications: NotificationType[] = [
  {
    notification_id: 1,
    content: '스터디에 새로운 멤버가 참여했습니다.',
    type: 'STUDY_JOIN',
    is_read: false,
    redirect_url: '/study/1/members',
    created_at: new Date('2025-09-01T10:30:00'),
  },
  {
    notification_id: 2,
    content: '새로운 스터디 노트가 생성되었습니다.',
    type: 'STUDY_NOTE_CREATE',
    is_read: false,
    redirect_url: '/study/1/notes/15',
    created_at: new Date('2025-09-01T11:00:00'),
  },
  {
    notification_id: 3,
    content: '스터디 리뷰 요청이 도착했습니다.',
    type: 'STUDY_REVIEW_REQUEST',
    is_read: true,
    redirect_url: '/study/1/review/5',
    created_at: new Date('2025-09-02T09:20:00'),
  },
  {
    notification_id: 4,
    content: '스터디 신청이 승인되었습니다.',
    type: 'APPLICATION_ACCEPT',
    is_read: false,
    redirect_url: '/study/2',
    created_at: new Date('2025-09-02T14:45:00'),
  },
  {
    notification_id: 5,
    content: '스터디 신청이 거절되었습니다.',
    type: 'APPLICATION_REJECT',
    is_read: true,
    redirect_url: '/applications',
    created_at: new Date('2025-09-03T08:15:00'),
  },
  {
    notification_id: 6,
    content: '새로운 신청이 추가되었습니다.',
    type: 'ADD_APPLICATION',
    is_read: false,
    redirect_url: '/study/3/applications',
    created_at: new Date('2025-09-03T10:10:00'),
  },
  {
    notification_id: 7,
    content: '오늘 예정된 일정이 있습니다.',
    type: 'TODAY_SCHEDULE',
    is_read: false,
    redirect_url: '/schedule/today',
    created_at: new Date('2025-09-04T07:00:00'),
  },
  {
    notification_id: 8,
    content: '다가오는 일정이 있습니다.',
    type: 'UPCOMIG_SCHEDULE',
    is_read: true,
    redirect_url: '/schedule/upcoming/25',
    created_at: new Date('2025-09-04T13:25:00'),
  },
  {
    notification_id: 9,
    content: '스터디 노트가 새로 작성되었습니다.',
    type: 'STUDY_NOTE_CREATE',
    is_read: false,
    redirect_url: '/study/4/notes/22',
    created_at: new Date('2025-09-05T09:50:00'),
  },
  {
    notification_id: 10,
    content: '스터디 참여 신청이 추가되었습니다.',
    type: 'ADD_APPLICATION',
    is_read: true,
    redirect_url: '/study/5/applications',
    created_at: new Date('2025-09-05T12:40:00'),
  },
]

export default function Notification() {
  const { notificationNavigationItem } = useNotificationNavigationItemStore(
    (state) => state
  )

  const [filteredNotifications, setFilteredNotification] = useState<
    NotificationType[]
  >([])

  useEffect(() => {
    let filtered: NotificationType[] = []

    if (notificationNavigationItem === 'all') {
      filtered = [...dummyNotifications].sort((a, b) => {
        // 안 읽은 알림이 먼저
        if (a.is_read !== b.is_read) {
          return a.is_read ? 1 : -1
        }
        // created_at 최신순
        return b.created_at.getTime() - a.created_at.getTime()
      })
    } else if (notificationNavigationItem === 'readed') {
      filtered = [...dummyNotifications]
        .filter((n) => n.is_read)
        .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    } else {
      // unReaded
      filtered = [...dummyNotifications]
        .filter((n) => !n.is_read)
        .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    }

    setFilteredNotification(filtered)
  }, [notificationNavigationItem])
  return (
    <div className="relative">
      <Modal isOverlay={false}>
        <ModalTrigger>
          <BellIcon className="h-5 text-gray-600" />
        </ModalTrigger>
        <ModalContent
          isPositionCenter={false}
          className="absolute top-10 right-0 h-[475px] w-96 overflow-hidden rounded-lg border border-gray-200 shadow"
        >
          <ModalHeader className="p-4" hasCloseButton={false}>
            <ModalTitle>알림</ModalTitle>
            <button className="text-primary-600 cursor-pointer">
              모두 읽음
            </button>
          </ModalHeader>
          <ModalMain className="flex flex-col overflow-y-scroll p-0">
            <NotificationNavigation />
            {filteredNotifications.map((notification) => (
              <NotificationCard
                notification={notification}
                key={notification.notification_id}
              />
            ))}
          </ModalMain>
        </ModalContent>
      </Modal>
    </div>
  )
}
