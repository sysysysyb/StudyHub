import type { ReactNode } from 'react'
// import { Link } from 'react-router-dom'

interface NavButton {
  label: string
  // destination: string
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
      <ul className="flex flex-col items-start gap-2">
        {NavButtons.map((link, index) => (
          <li key={index}>
            {/* <Link
              to={link.destination}
              className="text-gray-300 hover:opacity-80"
            >
              {link.label}
            </Link> */}
            {/* 라우트 설정 이전에 Link태그 사용 불가로 주석처리 */}
            {/* 버튼 태그 임시 재생성 */}
            <button>{link.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
