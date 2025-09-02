import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  'font-medium text-base leading-5 rounded-lg transition-colors focus:outline-none disabled:opacity-50 cursor-pointer disabled:pointer-events-none text-center ',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
        secondary:
          'text-gray-900 bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
        outline:
          'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 active:bg-gray-100 active:border-gray-400',
        ghost: 'text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-200',
        danger:
          'text-white bg-danger-500 hover:bg-danger-600 active:bg-danger-800',
        reverse:
          'text-primary-500 hover:opacity-80 active:opacity-60 bg-transparent border border-primary-500',
      },
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
