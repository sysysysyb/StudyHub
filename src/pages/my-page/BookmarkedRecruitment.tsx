import { ListItemSkeleton } from '@/components'
import { Input, InputIcon } from '@/components/common/input'
import { BookmarkedRecruitmentCard } from '@/components/my-page'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { useBookmarkedRecruitment } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import { useMemo, useState } from 'react'
import { SearchIcon } from 'lucide-react'

export default function BookmarkedRecruitment() {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 250)

  const searchParams = useMemo(() => {
    const params = new URLSearchParams()
    if (debouncedSearch) {
      params.set('search', debouncedSearch)
    }

    return params
  }, [debouncedSearch])

  const { data, isPending } = useBookmarkedRecruitment(searchParams)

  return (
    <div>
      <header className="mb-6 flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-auto">
          <h1 className="text-heading3 text-gray-900">북마크한 공고</h1>
          <span className="text-gray-600">
            나중에 지원할 스터디 공고들을 모아두었습니다.
          </span>
        </div>
        <div className="relative w-full lg:max-w-80">
          <InputIcon icon={SearchIcon} className="absolute" />
          <Input
            hasIcon
            placeholder="공고 제목으로 검색..."
            className="w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
