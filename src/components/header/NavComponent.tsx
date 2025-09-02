import type { ReactNode } from 'react'

interface NavProps {
  label: string
  event?: React.MouseEventHandler<HTMLButtonElement>
}

export function NavComponent({ label, event }: NavProps): ReactNode {
  return (
    <button
      className="mx-2.5 h-6 cursor-pointer whitespace-nowrap text-gray-700 hover:opacity-80 lg:mx-4"
      onClick={event}
    >
      {label}
    </button>
  )
}
