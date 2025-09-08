import { cn } from '@/utils'
import type { ComponentProps } from 'react'

interface LabelProps extends ComponentProps<'label'> {
  isRequired?: boolean
}

function InputLabel({ isRequired, className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn('color-gray-700 flex gap-1 text-sm font-medium', className)}
      {...props}
    >
      {children}
      {isRequired && <span className="text-danger-500">*</span>}
    </label>
  )
}

export default InputLabel
