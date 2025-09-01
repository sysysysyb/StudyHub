import type { ComponentProps, ReactElement, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

function CardTitle({ children, className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-base font-semibold', className)} {...props}>
      {children}
    </h3>
  )
}

function CardContent({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('gray-600 text-sm', className)} {...props}>
      {children}
    </div>
  )
}

const cardVariants = cva('rounded-lg p-6 bg-white', {
  variants: {
    variant: {
      default: 'border border-gray-200',
      outline: 'border-2 border-gray-300',
      elavate: 'shadow-lg border border-gray-100',
      flat: 'border-0',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

type RecommendedChildren =
  | ReactElement<typeof CardContent>
  | [ReactElement<typeof CardTitle>, ReactElement<typeof CardContent>]

interface CardProps
  extends ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {
  children: RecommendedChildren | ReactNode
}

function Card({ children, variant, className, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { Card, CardTitle, CardContent, type CardProps }
