import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva('rounded-lg disabled:opacity-50', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      outline: '',
      ghost: '',
      danger: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

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
