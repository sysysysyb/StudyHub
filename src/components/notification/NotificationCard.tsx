import type { Notification } from '@/types/api-response-types/notification-response-types'
import { cn } from '@/utils'
import { Link } from 'react-router'
import NotificationIcon from '@/components/notification/NotificationIcon'

interface NotificationCardProps {
  notification: Notification
}

export default function NotificationCard({
  notification,
}: NotificationCardProps) {
  const {
    content,
    type,
    is_read: isRead,
    created_at: createdAtString,
  } = notification

  const createdAt = new Date(createdAtString)

  const createdMonth = createdAt.getMonth()
  const createdDate = createdAt.getDate()

  return (
    <Link
      to="#"
      className={cn(
        'flex w-full items-center justify-start gap-3 p-4',
        isRead ? 'bg-white' : 'bg-primary-50'
      )}
    >
      <NotificationIcon notificationType={type} />
      <div className="flex flex-1 flex-col items-start justify-center">
        <span className="text-gray-900">{content}</span>
        <span className="text-xs text-gray-500">{`${createdMonth}월 ${createdDate}일`}</span>
      </div>
      {isRead || <div className="bg-primary-500 size-2 rounded-full" />}
    </Link>
  )
}
