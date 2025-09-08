import { Input } from '@/components'

export default function BookmarkedRecruitment() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-heading3 text-gray-900">북마크한 공고</h1>
          <span className="text-gray-600">
            나중에 지원할 스터디 공고들을 모아두었습니다.
          </span>
        </div>
        <div className="w-full max-w-80">
          <Input
            hasIcon
            icon="search"
            placeholder="공고 제목으로 검색..."
            className="w-full max-w-80"
          />
        </div>
      </header>
    </div>
  )
}
