import Badge from '@/components/common/Badge'
import type { Platform } from '@/types/api-response-types/lecture-response-type'

interface PlatformBadgeProps {
  platform: Platform
}

const platformMap: Record<Platform, 'success'> = {
  Inflearn: 'success',
}

export default function PlatformBadge({ platform }: PlatformBadgeProps) {
  return (
    <Badge
      className="rounded px-2 py-1 text-xs font-medium lg:text-base"
      variant={platformMap[platform]}
    >
      {platform}
    </Badge>
  )
}
