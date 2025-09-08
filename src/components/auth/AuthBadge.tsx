import type { ComponentProps } from 'react'
import Badge from '../common/Badge'
import { cn } from '@/utils'

interface AuthBadgeProps extends ComponentProps<typeof Badge> {
  isSelected?: boolean
}

export function AuthBadge({
  isSelected,
  className,
  children,
  ...props
}: AuthBadgeProps) {
  return (
    <Badge
      size="lg"
      className={cn(
        'px-7 py-4',
        isSelected
          ? 'bg-primary-100 border-primary-500 text-primary-500'
          : 'border-[#bdbdbd] bg-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}
