import { ListItemSkeleton } from '@/components'
import { Input } from '@/components/common/input'
import { BookmarkedRecruitmentCard } from '@/components/my-page'
import EmptyDataState from '@/components/common/stateTemp/EmptyDataState'
import { SearchIcon } from 'lucide-react'
import type { UseQueryResult } from '@tanstack/react-query'
import type { BookmarkedRecruitments } from '@/types/api-response-types/recruitment-response-types'

interface BookmarkedRecruitmentProps {
  bookmarkedRecruitmentQueryResult: UseQueryResult<
    BookmarkedRecruitments,
    Error
  >
  searchState: string
  setSearchState: React.Dispatch<React.SetStateAction<string>>
}

export default function BookmarkedRecruitment({
  bookmarkedRecruitmentQueryResult,
  searchState,
  setSearchState,
}: BookmarkedRecruitmentProps) {
  const { data, isPending } = bookmarkedRecruitmentQueryResult

  return (
    <div>
      <header className="mb-6 flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-auto">
          <h1 className="text-heading3 text-gray-900">북마크한 공고</h1>
          <span className="text-gray-600">
            나중에 지원할 스터디 공고들을 모아두었습니다.
          </span>
        </div>
        <div className="w-full lg:max-w-80">
          <Input
            placeholder="공고 제목으로 검색..."
            className="w-full"
            icon={SearchIcon}
            iconPosition="start"
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
          />
        </div>
      </header>
      <main className="flex flex-col gap-4">
        {isPending ? (
          [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
        ) : data && data.results.length > 0 ? (
          data.results.map((recruitment) => (
            <BookmarkedRecruitmentCard
              recruitment={recruitment}
              key={recruitment.uuid}
            />
          ))
        ) : (
          <EmptyDataState />
        )}
      </main>
    </div>
  )
}
