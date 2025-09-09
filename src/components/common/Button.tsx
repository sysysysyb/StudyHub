import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import { ButtonVariants } from '@/constants/button-variants'

const buttonVariants = cva(
  'font-medium text-base leading-5 rounded-lg transition-colors focus:outline-none disabled:opacity-50 cursor-pointer disabled:pointer-events-none text-center ',
  {
    variants: {
      variant: ButtonVariants,
      size: {
        sm: 'rounded-[0.375rem] px-3 py-2', //radius 6px
        md: 'px-4 py-2.5',
        lg: 'leading-6 px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  className,
  children,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
