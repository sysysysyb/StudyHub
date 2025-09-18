import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import { useInfiniteBookmarkedLecture } from '@/hooks/api'
import React from 'react'

export default function BookmarkedLectureInfinityScrollTest() {
  const { data, fetchNextPage } = useInfiniteBookmarkedLecture()
  return (
    <div className="flex flex-col gap-2">
      {data
        ? data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.results.map((lecture, j) => (
                <BookmarkedLectureCard key={j} lecture={lecture} />
              ))}
            </React.Fragment>
          ))
        : '로딩중'}

      <button
        onClick={() => {
          fetchNextPage()
        }}
      >
        새 페이지
      </button>
    </div>
  )
}
