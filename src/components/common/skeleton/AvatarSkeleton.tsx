import { cn } from '@/utils'

import { AVATAR_SIZE } from '@/constants/avatar-sizes'
import { SkeletonCircle } from './SkeletonItem'

function AvatarSkeleton({
  size = 'md',
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}) {
  const w = AVATAR_SIZE[size]

  return (
    <div className={cn(w)}>
      <SkeletonCircle />
    </div>
  )
}

export default AvatarSkeleton
