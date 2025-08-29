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
    <header className="sticky top-0 h-[65px] border border-[#E5E7EB] bg-white pb-px">
      <div className="flex justify-between px-[112px]">
        <div className="h-[48px] w-[144px]">
          <Logo />
        </div>
        <div className="flex w-[450px] items-center">
          <NavComponent label="강의 목록" />
          <NavComponent label="스터디 그룹" />
          <NavComponent label="구인 공고" />
          <NavComponent label="로그인" />
          <button className="rounded-md bg-[#CA8A04] p-2 whitespace-nowrap text-white">
            회원가입
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
