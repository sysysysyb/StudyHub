import { BookmarkedRecruitmentCard } from '@/components/my-page'
import { useInfiniteBookmarkedRecruitment } from '@/hooks/api/'
import React, { useCallback, useEffect, useRef } from 'react'

export default function BookmarkedRecruitmentInfitinyScrollTest() {
  const { data, fetchNextPage, hasNextPage } =
    useInfiniteBookmarkedRecruitment()

  const observerRef = useRef(null)

  const onIntersection: IntersectionObserverCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection)

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }
  }, [onIntersection])

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
      <span ref={observerRef}>옵저버</span>
    </div>
  )
}
