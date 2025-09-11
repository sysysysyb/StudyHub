import Button from '@/components/common/Button'
import type { Lecture } from '@/types/api-response-types/lecture-response-type'
import { BookmarkIcon } from 'lucide-react'
import { Link } from 'react-router'
import DifficultyBadge from './DifficultyBadge'
import PlatformBadge from './PlatformBadge'

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

  return (
    <div className="flex items-center justify-center gap-6 rounded-xl border border-gray-200 p-6">
      <img src={imageUrl} className="w-full max-w-40 rounded-lg" />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-heading5 text-gray-900">{title}</span>
          <span className="text-gray-600">{instructor}</span>
          <div className="flex items-center gap-3">
            <PlatformBadge platform={platform} />
            <DifficultyBadge difficulty={difficulty} />
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
            <BookmarkIcon className="text-primary-500 h-4" fill="#eab308" />
            <Link to={urlLink}>
              <Button className="text-sm">공고 보기</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
