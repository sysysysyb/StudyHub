import { Symbol, Logo } from '@/components'
import { Link } from 'react-router'

export const HeaderLogo = () => {
  return (
    <Link to="/main" className="flex h-12 w-36 items-center gap-2">
      <Symbol />
      <Logo />
    </Link>
  )
}
