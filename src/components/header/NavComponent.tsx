import type { ReactNode } from 'react'

interface NavProps {
  label: string
  event?: React.MouseEventHandler<HTMLButtonElement>
}

export function NavComponent({ label, event }: NavProps): ReactNode {
  return (
    <button
      className="mx-4 h-6 whitespace-nowrap text-gray-700"
      onClick={event}
    >
      {label}
    </button>
  )
}
