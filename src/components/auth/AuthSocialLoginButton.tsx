import type { ComponentProps } from 'react'
import Button from '../common/Button'
import { cn } from '@/utils'

export function AuthSocialLoginButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        'flex w-full items-center justify-center gap-1 p-4',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
