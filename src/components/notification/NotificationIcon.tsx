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
        STUDY_JOIN: ' bg-[#DBEAFE] text-[#2563EB]',
        APPLICATION_ACCEPT: 'bg-[#DCFCE7] text-[#16A34A] ',
        APPLICATION_REJECT: 'bg-[#FEE2E2] text-[#DC2626]',
        ADD_APPLICATION: 'bg-[#F3E8ff] text-[#9333EA]',
        STUDY_REVIEW_REQUEST: 'bg-[#FFEDD5] text-[#EA580C]',
        UPCOMIG_SCHEDULE: 'bg-[#E0E7FF] text-[#4F46E5]',
        TODAY_SCHEDULE: 'bg-[#FCE7F3] text-[#DB2777]',
        STUDY_NOTE_CREATE: 'bg-[#CCFBF1] text-[#0D9488]',
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
