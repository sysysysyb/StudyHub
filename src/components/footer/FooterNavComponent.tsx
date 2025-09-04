import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface NavButton {
  label: string
  destination: string
}

interface FooterNavProps {
  category: string
  NavButtons: NavButton[]
}

export const FooterNavComponent = ({
  category,
  NavButtons,
}: FooterNavProps): ReactNode => {
  return (
    <nav className="flex flex-col items-start gap-2">
      <h2 className="pb-2 font-semibold text-white">{category}</h2>
      <ul>
        {NavButtons.map((link, index) => (
          <li key={index}>
            <Link
              to={link.destination}
              className="text-gray-300 hover:opacity-80"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
