import { useToggleLectureBookmark } from '@/hooks/api'
import { BookmarkIcon } from 'lucide-react'
import { useState } from 'react'

interface LectureBookmarkIconProps {
  lectureId: string
}

export default function LectureBookmarkIcon({
  lectureId,
}: LectureBookmarkIconProps) {
  const [isBookmarked, setIsBookmarked] = useState(true)

  const { mutate, isPending } = useToggleLectureBookmark()

  const handleBookmarkClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault()

    if (isPending) return

    setIsBookmarked((prev) => !prev)

    mutate({ lectureId, newStatus: isBookmarked ? 'delete' : 'add' })
  }

  return (
    <BookmarkIcon
      className="text-primary-500 h-4"
      fill={isBookmarked ? '#eab308' : 'none'}
      onClick={handleBookmarkClick}
    />
  )
}
