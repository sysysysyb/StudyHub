import type { ComponentProps } from 'react'
import { cn } from '@/utils'

interface DescriptionProps extends ComponentProps<'div'> {
  label?: string
}

export function DescriptionComponent({
  label,
  className,
  children,
  ...props
}: DescriptionProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      {label && <span className="text-gray-800">{label}</span>}
      <div
        className={cn(
          'text-secondary flex w-full items-center bg-gray-50 p-4 text-sm',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
