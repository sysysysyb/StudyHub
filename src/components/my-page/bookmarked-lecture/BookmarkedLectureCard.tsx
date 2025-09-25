import Button from '@/components/common/Button'
import type { Lecture } from '@/types/api-response-types/lecture-response-type'
import { Clock3Icon } from 'lucide-react'
import { Link } from 'react-router'
import DifficultyBadge from './DifficultyBadge'
import PlatformBadge from './PlatformBadge'
import useWindowWidth from '@/hooks/useWindowWidth'
import { LG_WIDTH_PIXEL } from '@/constants/break-points'
import LectureBookmarkIcon from '@/components/my-page/bookmarked-lecture/LectureBookmarkIcon'

interface BookmarkedLectureCardProps {
  lecture: Lecture
}

export default function BookmarkedLectureCard({
  lecture,
}: BookmarkedLectureCardProps) {
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

  const width = useWindowWidth()

  return (
    <div className="flex items-start justify-center gap-6 rounded-xl border border-gray-200 p-6 lg:items-center">
      <img
        src={imageUrl}
        className="max-w-16 rounded-lg sm:max-w-32 lg:max-w-40"
      />
      <div className="flex flex-1 flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <span className="lg:text-heading5 text-sm font-bold text-gray-900">
            {title}
          </span>
          <span className="text-xs text-gray-600 lg:text-base">
            {instructor}
          </span>
          <div className="flex items-center gap-3">
            <PlatformBadge platform={platform} />
            <DifficultyBadge difficulty={difficulty} />
            {width > LG_WIDTH_PIXEL && (
              <span className="flex items-center text-sm text-gray-600">
                <Clock3Icon className="h-3.5" /> {durationHHMM}
              </span>
            )}
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 lg:w-auto lg:flex-col lg:items-end lg:justify-center">
          <div className="flex flex-col items-end justify-start">
            <span className="text-sm font-bold text-gray-900 lg:text-lg">{`₩${(originalPrice - discountPrice).toLocaleString()}`}</span>
            {discountPrice > 0 ? (
              <span className="text-xs text-gray-500 line-through lg:text-sm">{`₩${originalPrice.toLocaleString()}`}</span>
            ) : null}
          </div>
          <div className="flex items-center justify-center gap-1">
            {/* TODO: 실제 강의 아이디 연결 */}
            <LectureBookmarkIcon lectureId="111" />
            <Link to={urlLink}>
              <Button
                size={width > LG_WIDTH_PIXEL ? 'md' : 'sm'}
                className="text-xs text-nowrap lg:text-sm"
              >
                {width > LG_WIDTH_PIXEL ? '공고 보기' : '보기'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
