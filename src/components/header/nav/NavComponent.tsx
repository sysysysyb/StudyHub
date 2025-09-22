import type { ComponentProps, ReactNode } from 'react'
import { NavLink } from 'react-router'

interface NavComponentProps extends ComponentProps<typeof NavLink> {
  label: string
}

export function NavComponent({ to, label }: NavComponentProps): ReactNode {
  return (
    <NavLink
      to={to}
      className="h-6 cursor-pointer whitespace-nowrap text-gray-700 hover:opacity-80"
    >
      {label}
    </NavLink>
  )
}
