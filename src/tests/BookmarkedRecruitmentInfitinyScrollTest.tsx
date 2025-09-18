import { BookmarkedRecruitmentCard } from '@/components/my-page'
import { useInfiniteBookmarkedRecruitment } from '@/hooks/api/'
import React from 'react'

export default function BookmarkedRecruitmentInfitinyScrollTest() {
  const { data, fetchNextPage } = useInfiniteBookmarkedRecruitment()

  return (
    <div className="flex flex-col gap-2">
      {data
        ? data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.results.map((recruitment) => (
                <BookmarkedRecruitmentCard
                  key={recruitment.uuid}
                  recruitment={recruitment}
                />
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
