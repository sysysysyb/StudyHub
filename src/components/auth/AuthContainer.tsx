import { cn } from '@/utils'
import type { ComponentProps } from 'react'

export function AuthContainer({
  className,
  children,
  ...props
}: ComponentProps<'section'>) {
  return (
    <section
      className={cn(
        'w-112 rounded-lg bg-white px-6 py-12 shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
