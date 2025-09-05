import type { notificationType } from '@/types/api-response-types/notification-response-types'
import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const notificationIconVariants = cva(
  'size-8 rounded-full flex items-center justify-center',
  {
    variants: {
      //TODO: 와이어프레임 업데이트 되면 수정
      notificationType: {
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
  }
)

interface NotificationIconProps
  extends ComponentProps<'div'>,
    VariantProps<typeof notificationIconVariants> {}

export default function NotificationIcon({
  className,
  notificationType,
}: NotificationIconProps) {
  //와이어 프레임 업데이트 되면 아이콘 넣기
  return (
    <div
      className={cn(notificationIconVariants({ notificationType }), className)}
    >
      i
    </div>
  )
}
