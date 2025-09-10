import type { ComponentProps } from 'react'
import Badge from '@/components/common/Badge'
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
        'cursor-pointer border border-solid px-8 py-2 font-semibold',
        isSelected
          ? 'bg-primary-100 border-primary-600 text-primary-600'
          : 'border-[#cecece] bg-[#ececec] text-[#4d4d4d]',
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}
