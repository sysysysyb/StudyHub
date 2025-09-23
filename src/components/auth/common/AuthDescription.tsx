import { cn } from '@/utils'
import type { ComponentProps } from 'react'

export function AuthDescription({
  className,
  children,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-sm font-normal text-gray-600', className)}
      {...props}
    >
      {children}
    </span>
  )
}
