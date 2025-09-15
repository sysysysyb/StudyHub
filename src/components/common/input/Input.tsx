import type { InputProps } from '@/types'
import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import {
  IconBase,
  IconPosition,
  InputBase,
  InputError,
  InputIconPosition,
} from './input.styles'

const inputVariants = cva(InputBase, {
  variants: {
    isError: InputError,
    iconPosition: InputIconPosition,
  },
  defaultVariants: {
    isError: false,
    iconPosition: 'none',
  },
})

const iconVariants = cva(IconBase, {
  variants: {
    iconPosition: IconPosition,
  },
  defaultVariants: {
    iconPosition: 'none',
  },
})

function Input({
  isError = false,
  icon: Icon,
  iconPosition = 'none',
  className,
  iconClassName,
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      <input
        className={cn(inputVariants({ isError, iconPosition }), className)}
        {...props}
      />
      {Icon && (
        <Icon className={cn(iconVariants({ iconPosition }), iconClassName)} />
      )}
    </div>
  )
}

export default Input
