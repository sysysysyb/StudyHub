import { ListItemSkeleton } from '@/components'
import { Input } from '@/components/common/input'
import EmptyDataState from '@/components/common/state/EmptyDataState'
import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import type { BookmarkedLectures } from '@/types/api-response-types/lecture-response-type'
import type { UseQueryResult } from '@tanstack/react-query'
import { SearchIcon } from 'lucide-react'

interface BookmarkedLectureProps {
  bookmarkedLecturesQueryResult: UseQueryResult<BookmarkedLectures, Error>

  searchState: string
  setSearchState: React.Dispatch<React.SetStateAction<string>>
}

export default function BookmarkedLecture({
  bookmarkedLecturesQueryResult,
  searchState,
  setSearchState,
}: BookmarkedLectureProps) {
  const { data, isPending } = bookmarkedLecturesQueryResult

  return (
    <div>
      <header className="mb-6 flex flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="flex w-full flex-col gap-2 lg:w-auto">
          <h1 className="text-heading3 text-gray-900">북마크한 강의</h1>
          <span className="font-medium text-gray-600">
            나중에 수강할 강의들을 모아두었습니다
          </span>
        </div>
        <div className="w-full flex-1 lg:max-w-80">
          <Input
            placeholder="강의명이나 강사명으로 검색..."
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
