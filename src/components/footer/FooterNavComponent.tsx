interface NavButton {
  label: string
  url: string
}

interface FooterNavProps {
  category: string
  NavButtons: NavButton[]
}

export const FooterNavComponent = ({
  category,
  NavButtons,
}: FooterNavProps) => {
  return (
    <nav className="flex flex-col items-start gap-2">
      <h2 className="pb-2 font-semibold text-white">{category}</h2>
      <ul className="flex flex-col items-start gap-2">
        {NavButtons.map((link, index) => (
          <li key={index}>
            <a className="whitespace-nowrap" href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
