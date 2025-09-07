import { Link } from 'react-router'
import { cn } from '@/utils'
import { Button, Input, Badge, Logo } from '@/components'
import type { ComponentProps } from 'react'

function AuthContainer({
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

function AuthLogo({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex justify-center gap-2', className)} {...props}>
      <div className="bg-primary-500 flex size-8 items-center justify-center rounded-lg text-base font-bold text-white">
        S
      </div>
      <Logo />
    </div>
  )
}

function AuthTitle({ className, children, ...props }: ComponentProps<'h1'>) {
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

function AuthDescription({
  className,
  children,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-sm font-normal text-gray-600', className)}
      {...props}
    >
      {children}
    </span>
  )
}

function AuthLink({
  to,
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      to={to}
      className={cn('text-primary-600 text-sm', className)}
      {...props}
    >
      {children}
    </Link>
  )
}

function AuthSubmitButton({
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

function AuthVerifyButton({
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

function AuthSocialLoginButton({
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

function AuthInput({ className, ...props }: ComponentProps<typeof Input>) {
  return <Input className={className} {...props} />
}

interface AuthBadgeProps extends ComponentProps<typeof Badge> {
  isSelected?: boolean
}

function AuthBadge({
  isSelected,
  className,
  children,
  ...props
}: AuthBadgeProps) {
  return (
    <Badge
      size="lg"
      className={cn(
        'px-7 py-4',
        isSelected
          ? 'bg-primary-100 border-primary-500 text-primary-500'
          : 'border-[#bdbdbd] bg-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}

export {
  AuthContainer,
  AuthLogo,
  AuthTitle,
  AuthDescription,
  AuthLink,
  AuthSubmitButton,
  AuthVerifyButton,
  AuthSocialLoginButton,
  AuthInput,
  AuthBadge,
}
