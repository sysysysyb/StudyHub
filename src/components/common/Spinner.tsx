import { cn } from '@/utils'
import type { ComponentProps } from 'react'

function Spinner({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'border-primary-500 animate-loading-state size-12 rounded-full border-b-2 border-solid',
        className
      )}
      {...props}
    />
  )
}

export default Spinner
