import { useToggleRecruitmentBookmark } from '@/hooks/api'
import { BookmarkIcon } from 'lucide-react'
import { useState } from 'react'

interface RecruitmentBookmarkIconProps {
  recruitmentId: string
}

export default function RecruitmentBookmarkIcon({
  recruitmentId,
}: RecruitmentBookmarkIconProps) {
  const [isBookmarked, setIsBookmarked] = useState(true)

  const { mutate, isPending } = useToggleRecruitmentBookmark()

  const handleBookmarkClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault()

    if (isPending) return

    setIsBookmarked((prev) => !prev)

    mutate({ recruitmentId, newStatus: isBookmarked ? 'delete' : 'add' })
  }

  return (
    <BookmarkIcon
      className="text-primary-500 h-4"
      fill={isBookmarked ? '#eab308' : 'none'}
      onClick={handleBookmarkClick}
    />
  )
}
