import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/utils'

interface RatingStarsInputProps {
  rating?: number
  onChange: (rating: number) => void
  size?: number
}

export function RatingStarsInput({
  rating = 0,
  onChange,
  size = 14,
}: RatingStarsInputProps) {
  const [hoverRating, setHoverRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(rating)

  const handleClick = (index: number) => {
    const newRating = index + 1
    setSelectedRating(newRating)
    if (onChange) onChange(index + 1)
  }

  return Array.from({ length: 5 }).map((_, i) => {
    const isFilled = (hoverRating || selectedRating) > i
    return (
      <Star
        key={i}
        size={size}
        className={cn(
          'cursor-pointer',
          isFilled ? 'text-primary-400' : 'text-gray-300'
        )}
        fill="currentColor"
        onMouseEnter={() => setHoverRating(i + 1)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => handleClick(i)}
      />
    )
  })
}
