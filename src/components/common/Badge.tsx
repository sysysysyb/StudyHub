import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { BadgeVariants, BadgeSizes } from '@/constants/badge-variants'

const badgeVariants = cva('font-normal text-center rounded-full inline-block', {
  variants: { variant: BadgeVariants, size: BadgeSizes },
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
