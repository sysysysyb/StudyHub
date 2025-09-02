import type { ReactNode } from 'react'

interface NavButton {
  label: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
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
    <div className="flex flex-col items-start gap-2">
      <p className="pb-2 font-semibold text-white">{category}</p>
      {NavButtons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className="text-gray-300 hover:opacity-80"
        >
          {button.label}
        </button>
        // 버튼 태그 대신 a 태그로 링크 네비게이션으로 구현도 추후 고려.
      ))}
    </div>
  )
}
