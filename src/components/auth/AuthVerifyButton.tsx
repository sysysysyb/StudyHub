import type { ComponentProps } from 'react'
import Button from '../common/Button'
import { cn } from '@/utils'

export function AuthVerifyButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      variant="primary"
      className={cn(
        'active:bg-primary-300 bg-primary-100 hover:bg-primary-200 text-primary-500 ring-primary-500 ring disabled:bg-gray-200 disabled:text-[#303030] disabled:ring-[#303030]',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
