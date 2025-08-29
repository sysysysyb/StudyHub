interface NavProps {
  label: string
  event?: React.MouseEventHandler<HTMLButtonElement>
}

const Logo = () => {
  return (
    <div className="flex h-[48px] w-[144px] items-center">
      <div className="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-[#CA8A04] text-[16px] font-bold text-white">
        S
      </div>
      <div className="bg-white pl-2 text-[20px] font-bold text-[#CA8A04]">
        StudyHub
      </div>
    </div>
  )
}

const NavComponent: React.FC<NavProps> = ({ label, event }) => {
  return (
    <button
      className="mx-[16px] h-[24px] whitespace-nowrap text-[#374151]"
      onClick={event}
    >
      {label}
    </button>
  )
}

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 flex h-[65px] items-center justify-between border border-[#E5E7EB] bg-white px-[32px] pb-px">
      <Logo />
      <div className="flex items-center">
        <NavComponent label="강의 목록" />
        <NavComponent label="스터디 그룹" />
        <NavComponent label="구인 공고" />
        <NavComponent label="로그인" />
        <button className="rounded-md bg-[#CA8A04] p-2 whitespace-nowrap text-white">
          회원가입
        </button>
      </div>
    </header>
  )
}

export default Header
