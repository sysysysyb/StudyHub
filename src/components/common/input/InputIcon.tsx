import { cn } from '@/utils'
import { type LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

interface InputIconProps extends ComponentProps<LucideIcon> {
  icon: LucideIcon
}

function InputIcon({ icon: Icon, className, ...props }: InputIconProps) {
  return (
    <Icon
      className={cn('inset-y-0 left-2 my-auto h-4 text-gray-400', className)}
      {...props}
    />
  )
}

export default InputIcon
