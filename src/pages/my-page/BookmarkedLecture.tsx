import { ListItemSkeleton } from '@/components'
import { Input, InputIcon } from '@/components/common/input'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import { useBookmarkedLectures } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function BookmarkedLecture() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 250)

  const searchParams = useMemo(() => {
    const params = new URLSearchParams()
    if (debouncedSearch) {
      params.set('search', debouncedSearch)
    }

    return params
  }, [debouncedSearch])

  const { data, isPending } = useBookmarkedLectures(searchParams)

  return (
    <div>
      <header className="mb-6 flex items-center justify-between gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-heading3 text-gray-900">북마크한 강의</h1>
          <span className="font-medium text-gray-600">
            나중에 수강할 강의들을 모아두었습니다
          </span>
        </div>
        <div className="relative max-w-80 flex-1">
          <InputIcon icon={SearchIcon} className="absolute" />
          <Input
            hasIcon
            placeholder="강의명이나 강사명으로 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <main className="flex flex-col gap-4">
        {isPending ? (
          [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
        ) : data && data.results.length > 0 ? (
          data.results.map((lecture, i) => (
            <BookmarkedLectureCard lecture={lecture} key={i} />
          ))
        ) : (
          <EmptyDataState />
        )}
      </main>
    </div>
  )
}
