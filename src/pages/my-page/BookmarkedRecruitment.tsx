import { ListItemSkeleton } from '@/components'
import { Input, InputIcon } from '@/components/common/input'
import { BookmarkedRecruitmentCard } from '@/components/mypage'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { useBookmarkedRecruitment } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'
import { SearchIcon } from 'lucide-react'

export default function BookmarkedRecruitment() {
  const [searchParam, setSearchParam] = useState('')

  const debouncedSearchParam = useDebounce(searchParam, 250)

  const { data, isPending, refetch } =
    useBookmarkedRecruitment(debouncedSearchParam)

  useEffect(() => {
    refetch()
  }, [debouncedSearchParam, refetch])

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
          <div className="relative">
            <InputIcon icon={SearchIcon} className="absolute" />
            <Input
              hasIcon
              placeholder="공고 제목으로 검색..."
              className="w-full max-w-80"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </div>
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
