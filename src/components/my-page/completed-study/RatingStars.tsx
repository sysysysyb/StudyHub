import { Star } from 'lucide-react'

interface RatingStarsProps {
  rating: number // 0 ~ 5, 소수점 한 자리
  size?: number
  includeMax?: boolean
}

export function RatingStars({
  rating,
  size = 14,
  includeMax = false,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fillRatio = Math.min(Math.max(rating - i, 0), 1) // 0~1 사이 값 (채워질 비율)

        return (
          <div key={i} className="relative">
            {/* 배경 별 (회색) */}
            <Star size={size} className="text-gray-300" />

            {/* 채워진 별 (clip으로 fillRatio 만큼 채움) */}
            {fillRatio > 0 && (
              <Star
                size={size}
                className="text-primary-400 absolute top-0 left-0"
                fill="currentColor"
                style={{
                  clipPath: `inset(0 ${100 - fillRatio * 100}% 0 0)`,
                }}
              />
            )}
          </div>
        )
      })}
      <span className="ml-2 text-sm text-gray-600">
        {rating.toFixed(1)}
        {includeMax && ' / 5'}
      </span>
    </div>
  )
}
