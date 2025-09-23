import { cn } from '@/utils'
import type { ComponentProps } from 'react'
import { Link } from 'react-router'

export function AuthLink({
  to,
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      to={to}
      className={cn('text-primary-600 text-sm', className)}
      {...props}
    >
      {children}
    </Link>
  )
}
