import { cn } from '@/utils'
import type { ComponentProps } from 'react'
import { Logo } from '../common/Logo'

export function AuthLogo({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex justify-center gap-2', className)} {...props}>
      <div className="bg-primary-500 flex size-8 items-center justify-center rounded-lg text-base font-bold text-white">
        S
      </div>
      <Logo />
    </div>
  )
}
