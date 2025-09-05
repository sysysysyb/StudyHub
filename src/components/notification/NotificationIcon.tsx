import type { notificationType } from '@/types/api-response-types/notification-response-types'
import { cva } from 'class-variance-authority'

const notificationIconVariants = cva('size-8 rounded-full', {
  variants: {
    variant: {
      STUDY_JOIN: 'bg-blue-500',
      STUDY_NOTE_CREATE: 'bg-green-500',
      STUDY_REVIEW_REQUEST: 'bg-yellow-500',
      APPLICATION_ACCEPT: 'bg-teal-500',
      APPLICATION_REJECT: 'bg-red-500',
      ADD_APPLICATION: 'bg-purple-500',
      TODAY_SCHEDULE: 'bg-orange-500',
      UPCOMIG_SCHEDULE: 'bg-pink-500',
    } satisfies Record<notificationType, string>,
  },
})

interface NotificationIconProps {
  notifycationType: notificationType
}

export default function NotificationIcon({}: NotificationIconProps) {
  return <div>NotificationIcon</div>
}
