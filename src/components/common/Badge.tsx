import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const badgeVariants = cva('font-medium text-center rounded-full', {
  variants: {
    variant: {
      default: 'bg-gray-100 text-gray-800',
      primary: 'bg-primary-100 text-primary-800',
      success: 'bg-success-100 text-success-600',
      danger: 'bg-danger-100 text-danger-800',
    },

    size: {
      sm: 'px-2 py-0.5  text-xs leading-4',
      md: 'px-2.5 py-1 text-sm leading-5',
      lg: 'px-3 py-1.5 text-base leading-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

interface BadgeProps
  extends ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  children,
  variant,
  size,
  className,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  )
}
