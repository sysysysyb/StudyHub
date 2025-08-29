import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  'font-medium text-base leading-5 rounded-lg disabled:opacity-50 text-center',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        outline: '',
        ghost: '',
        danger: '',
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

export default function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={(cn(buttonVariants({ variant })), className)} {...props}>
      Button
    </button>
  )
}
