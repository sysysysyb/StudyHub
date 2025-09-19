import type { ReactNode } from 'react'
import { cn } from '@/utils'

interface BenefitCardProps {
  iconbgcolor: string
  icon: ReactNode
  title: string
  comments: string[]
}

// React.FC는 레거시이기에 사용을 지양해야 한다. ReactNode로 대체 필요.
export function BenefitCard({
  iconbgcolor,
  icon,
  title,
  comments,
}: BenefitCardProps): ReactNode {
  return (
    // cn 사용 필요.
    <div className={cn('flex h-54 w-96 flex-col items-center p-6')}>
      <div
        className={cn(
          `${iconbgcolor} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full`
        )}
      >
        {icon}
      </div>
      <div className="text-heading4 pb-3 text-gray-900">{title}</div>
      {comments && comments.length > 0
        ? comments.map((comment, index) => (
            <span key={index} className="text-secondary">
              {comment}
            </span>
          ))
        : null}
    </div>
  )
}
