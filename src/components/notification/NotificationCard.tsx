import type { Notification } from '@/types/api-response-types/notification-response-types'
import { cn } from '@/utils'
import { Link } from 'react-router'

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
    redirect_url: redirectUrl,
    created_at: createdAt,
  } = notification

  const createdMonth = createdAt.getMonth()
  const createdDate = createdAt.getDate()

  return (
    <Link
      to="#"
      className={cn(
        'flex w-full items-center justify-between',
        isRead ? 'bg-white' : 'bg-primary-100'
      )}
    >
      <div>icon</div>
      <div className="flex flex-col items-center justify-center">
        <span className="text">{content}</span>
        <span>{`${createdMonth}월 ${createdDate}일`}</span>
      </div>
      {isRead || <div className="bg-primary-500 size-2 rounded-full" />}
    </Link>
  )
}
