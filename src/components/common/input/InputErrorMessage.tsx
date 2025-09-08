import { cn } from '@/utils'
import type { ComponentProps } from 'react'

function InputErrorMessage({
  className,
  children,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span className={cn('text-danger-600 block text-sm', className)} {...props}>
      {children}
    </span>
  )
}

export default InputErrorMessage
