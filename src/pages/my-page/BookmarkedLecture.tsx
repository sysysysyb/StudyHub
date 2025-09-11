import { Button, ListItemSkeleton } from '@/components'
import { Input } from '@/components/common/input'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { useBookmarkedLectures } from '@/hooks/api'
import { BookmarkIcon } from 'lucide-react'
import { Link } from 'react-router'

export default function BookmarkedLecture() {
  const { isPending, data } = useBookmarkedLectures()

  return (
    <div>
      <header className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-heading3 text-gray-900">북마크한 강의</h1>
          <span className="font-medium text-gray-600">
            나중에 수강할 강의들을 모아두었습니다
          </span>
        </div>
        <Input
          className="max-w-80 flex-1"
          placeholder="강의명이나 강사명으로 검색..."
        />
      </header>
      <main className="flex flex-col gap-4">
        {isPending ? (
          [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
        ) : data && data.results.length > 0 ? (
          data.results.map((lecture, i) => {
            const {
              thumbnail_img_url: imageUrl,
              title,
              instructor,
              difficulty,
              platform,
              original_price: originalPrice,
              discount_price: discountPrice,
              url_link: urlLink,
              duration_hhmm: durationHHMM,
            } = lecture

            return (
              <div
                key={i}
                className="flex items-center justify-center gap-6 rounded-xl border border-gray-200 p-6"
              >
                <img src={imageUrl} className="w-full max-w-40 rounded-lg" />
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-1 flex-col">
                    <span className="text-heading5 text-gray-900">{title}</span>
                    <span className="text-gray-600">{instructor}</span>
                    <div className="flex items-center gap-3">
                      <span>{platform}</span>
                      <span>{difficulty}</span>
                      <span>{durationHHMM}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center gap-3">
                    <div className="flex flex-col items-end justify-start">
                      <span className="text-lg font-bold text-gray-900">{`₩${(originalPrice - discountPrice).toLocaleString()}`}</span>
                      {discountPrice > 0 ? (
                        <span className="text-sm text-gray-500 line-through">{`₩${originalPrice.toLocaleString()}`}</span>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <BookmarkIcon
                        className="text-primary-500 h-4"
                        fill="#eab308"
                      />
                      <Link to={urlLink}>
                        <Button className="text-sm">공고 보기</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <EmptyDataState />
        )}
      </main>
    </div>
  )
}
