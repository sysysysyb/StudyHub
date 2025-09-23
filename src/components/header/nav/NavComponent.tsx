import type { ComponentProps, ReactNode } from 'react'

interface NavComponentProps extends ComponentProps<'a'> {
  label: string
}

export function NavComponent({ href, label }: NavComponentProps): ReactNode {
  return (
    <a
      href={href}
      className="h-6 cursor-pointer whitespace-nowrap text-gray-700 hover:opacity-80"
    >
      {label}
    </a>
  )
}
