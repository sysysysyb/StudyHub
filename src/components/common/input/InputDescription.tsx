import { cn } from '@/utils'
import type { ComponentProps } from 'react'

function InputDescription({
  className,
  children,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-primary-500 text-sm font-semibold', className)}
      {...props}
    >
      {children}
    </span>
  )
}

export default InputDescription
