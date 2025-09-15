import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

export interface InputProps extends ComponentProps<'input'> {
  isError?: boolean
  hasIcon?: boolean
  icon?: LucideIcon
  iconPosition?: 'start' | 'end' | 'none'
  iconClassName?: string
}
