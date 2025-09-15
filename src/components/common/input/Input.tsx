import type { InputProps } from '@/types'
import { cn } from '@/utils'
import { iconVariants, inputVariants } from './input.styles'

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
