import { type LucideIcon } from 'lucide-react'
import Button from '@/components/common/Button'
import { cn } from '@/utils'
import type { ComponentProps, ReactNode } from 'react'

interface BaseStateIconProps extends ComponentProps<'div'> {
  icon?: LucideIcon
  iconColor?: string
  iconBg?: string
}

function BaseStateIcon({
  icon: CurrentIcon,
  iconBg,
  iconColor,
  className,
  ...props
}: BaseStateIconProps) {
  return (
    <div
      className={cn(
        'flex size-20 items-center justify-center rounded-full',
        iconBg,
        className
      )}
      {...props}
    >
      {CurrentIcon && <CurrentIcon className={cn('size-[30px]', iconColor)} />}
    </div>
  )
}

function BaseStateSpinner({ className, ...props }: ComponentProps<'div'>) {
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

interface BaseStateContentProps extends ComponentProps<'div'> {
  title: string
  description: string
}

function BaseStateContent({
  title,
  description,
  className,
  ...props
}: BaseStateContentProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2',
        className
      )}
      {...props}
    >
      <h4 className="text:lg font-semibold text-gray-900 sm:text-xl">
        {title}
      </h4>
      <p className="text-sm/6 font-normal text-gray-500 sm:text-base/6">
        {description}
      </p>
    </div>
  )
}

interface BaseStateButtonProps extends ComponentProps<'button'> {
  buttonVariant: 'primary' | 'outline'
  buttonContent: ReactNode
}

function BaseStateButton({
  buttonVariant,
  buttonContent,
  className,
  ...props
}: BaseStateButtonProps) {
  return (
    <Button variant={buttonVariant} className={className} {...props}>
      {buttonContent}
    </Button>
  )
}

function BaseStateWrapper({ className, children }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex size-full flex-col items-center justify-center gap-6 rounded-lg border border-solid border-gray-200 bg-gray-50',
        className
      )}
    >
      {children}
    </div>
  )
}

export {
  BaseStateIcon,
  BaseStateSpinner,
  BaseStateContent,
  BaseStateButton,
  BaseStateWrapper,
}
