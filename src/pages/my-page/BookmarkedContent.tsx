import { ListItemSkeleton } from '@/components'
import { Input, InputIcon } from '@/components/common/input'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { BookmarkedRecruitmentCard } from '@/components/my-page'
import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import { useBookmarkedLectures, useBookmarkedRecruitment } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function BookmarkedContent() {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 250)

  const searchParams = useMemo(() => {
    const params = new URLSearchParams()
    if (debouncedSearch) {
      params.set('search', debouncedSearch)
    }

    return params
  }, [debouncedSearch])

  const { data: recruitments, isPending: isRecruitmentPending } =
    useBookmarkedRecruitment(searchParams)

  const { data: lectures, isPending: isLecturePending } =
    useBookmarkedLectures(searchParams)

  return (
    <div>
      <header className="mb-6 flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-auto">
          <h1 className="text-heading5 text-gray-900">북마크한 공고</h1>
          <span className="text-sm text-gray-600">
            저장한 스터디 공고 및 강의
          </span>
        </div>
        <div className="relative w-full lg:max-w-80">
          <InputIcon icon={SearchIcon} className="absolute" />
          <Input
            hasIcon
            placeholder="공고 및 강의 검색..."
            className="w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <main className="flex flex-col gap-4">
        {isRecruitmentPending ? (
          [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
        ) : recruitments && recruitments.results.length > 0 ? (
          recruitments.results.map((recruitment) => (
            <BookmarkedRecruitmentCard
              recruitment={recruitment}
              key={recruitment.uuid}
            />
          ))
        ) : (
          <EmptyDataState />
        )}
        {isLecturePending ? (
          [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
        ) : lectures && lectures.results.length > 0 ? (
          lectures.results.map((lecture, i) => (
            <BookmarkedLectureCard lecture={lecture} key={i} />
          ))
        ) : (
          <EmptyDataState />
        )}
      </main>
    </div>
  )
}
