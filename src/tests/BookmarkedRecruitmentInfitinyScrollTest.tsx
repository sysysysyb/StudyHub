import { BookmarkedRecruitmentCard } from '@/components/my-page'
import { useObserver } from '@/hooks'
import { useInfiniteBookmarkedRecruitment } from '@/hooks/api/'
import React from 'react'

export default function BookmarkedRecruitmentInfitinyScrollTest() {
  const { data, fetchNextPage, hasNextPage } =
    useInfiniteBookmarkedRecruitment()

  const onIntersection = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  const observerRef = useObserver(onIntersection, { threshold: 0.5 })

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
      <div ref={observerRef}>옵저버</div>
    </div>
  )
}
