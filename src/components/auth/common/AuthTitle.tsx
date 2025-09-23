import { cn } from '@/utils'
import type { ComponentProps } from 'react'

export function AuthTitle({
  className,
  children,
  ...props
}: ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'w-full text-center text-[30px] leading-9 font-bold text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
