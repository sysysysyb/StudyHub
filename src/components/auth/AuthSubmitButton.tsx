import type { ComponentProps } from 'react'
import Button from '../common/Button'
import { cn } from '@/utils'

export function AuthSubmitButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      variant="primary"
      className={cn(
        'w-full p-4 disabled:bg-[#ececec] disabled:text-[#303030] disabled:hover:bg-[#ececec]',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
