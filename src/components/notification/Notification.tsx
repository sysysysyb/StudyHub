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
import useNotification from '@/hooks/api/useNotification'

export default function Notification() {
  const { notificationNavigationItem } = useNotificationNavigationItemStore(
    (state) => state
  )

  const { data: notifcationList } = useNotification()

  const [filteredNotifications, setFilteredNotification] = useState<
    NotificationType[]
  >([])

  useEffect(() => {
    if (!notifcationList) return

    let filtered: NotificationType[] = []

    if (notificationNavigationItem === 'all') {
      filtered = [...notifcationList.results].sort((a, b) => {
        // 안 읽은 알림이 먼저

        return a.is_read ? 1 : -1
      })
    } else if (notificationNavigationItem === 'readed') {
      filtered = [...notifcationList.results].filter((n) => n.is_read)
    } else {
      // unReaded
      filtered = [...notifcationList.results].filter((n) => !n.is_read)
    }

    setFilteredNotification(filtered)
  }, [notificationNavigationItem, notifcationList])

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
