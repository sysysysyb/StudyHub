import { BookmarkedRecruitmentCard } from '@/components/my-page'
import { useInfiniteBookmarkedRecruitment } from '@/hooks/api'
import { cn } from '@/utils'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useEffect, useRef } from 'react'

const ESTIMATE_CARD_SIZE_PX = 260
const OVER_SCAN = 3

export default function VirtualListTest() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteBookmarkedRecruitment()

  //데이터 평탄화
  const allRecruitments = data ? data.pages.flatMap((page) => page.results) : []

  //버추얼리스트 스크롤 대상
  const parentRef = useRef<HTMLDivElement>(null)

  //가상화 인스턴스
  const virtualizer = useVirtualizer({
    count: hasNextPage ? allRecruitments.length + 1 : allRecruitments.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ESTIMATE_CARD_SIZE_PX,
    overscan: OVER_SCAN,
  })

  //무한스크롤 트리거
  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse()

    if (!lastItem) {
      return
    }

    if (
      lastItem.index >= allRecruitments.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
    }
  }, [
    allRecruitments.length,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    virtualizer,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    virtualizer.getVirtualItems(),
  ])

  return (
    <div ref={parentRef} className="h-[700px] overflow-y-auto">
      <div
        className={cn(`h-[${virtualizer.getTotalSize()}px]`, 'relative w-full')}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const isLoaderRow = virtualRow.index > allRecruitments.length - 1
          const recruitment = allRecruitments[virtualRow.index]

          return (
            <div
              key={virtualRow.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {isLoaderRow ? (
                hasNextPage ? (
                  '로딩중'
                ) : (
                  '데이터 없음'
                )
              ) : (
                <BookmarkedRecruitmentCard recruitment={recruitment} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
