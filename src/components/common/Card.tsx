import type { ComponentProps, ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

function CardTitle() {
  return <h1>Card Title</h1>
}

interface CardContentProps extends ComponentProps<'div'> {}

function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>
}

const cardVariants = cva('rounded p-[25px] bg-white', {
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

interface CardProps
  extends ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {
  children:
    | ReactElement<typeof CardContent> // 제목 없는 경우
    | [ReactElement<typeof CardTitle>, ReactElement<typeof CardContent>] // 제목 있는 경우
}

function Card({ children, variant, className }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)}>{children}</div>
  )
}

export { Card, CardTitle, CardContent }
