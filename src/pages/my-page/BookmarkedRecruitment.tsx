import {
  Input,
  ListItemSkeleton,
  BookmarkedRecruitmentCard,
} from '@/components'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { useBookmarkedRecruitment } from '@/hooks/api'

export default function BookmarkedRecruitment() {
  const { data, isPending } = useBookmarkedRecruitment()

  return (
    <div>
      <header className="mb-6 flex items-center justify-between gap-2">
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
