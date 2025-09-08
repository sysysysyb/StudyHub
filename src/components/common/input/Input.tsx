import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const inputVariants = cva(
  'w-full focus:ring-primary-500 rounded-lg py-[13px] text-sm ring ring-gray-300 outline-none placeholder:text-gray-400 focus:border-none focus:ring-2',
  {
    variants: {
      isError: {
        true: 'ring-danger-100',
        false:
          'ring-gray-300 focus:ring-primary-500 focus:border-none focus:ring-2',
      },
      hasIcon: {
        true: 'pl-10 pr-[17px]',
        false: 'px-[17px]',
      },
    },
  }
)

interface InputProps extends ComponentProps<'input'> {
  isError?: boolean
  hasIcon?: boolean
}

function Input({
  isError = false,
  hasIcon = false,
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(inputVariants({ isError, hasIcon }), className)}
      {...props}
    />
  )
}

export default Input
