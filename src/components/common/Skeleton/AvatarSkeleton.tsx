import { cn } from '@/utils'
import { Circle } from './SkeletonItem'
import { AVATAR_SIZE } from '@/components/avatar/AvatarSize'

function AvatarSkeleton({
  size = 'md',
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}) {
  const w = AVATAR_SIZE[size]

  return (
    <div className={cn(w)}>
      <Circle />
    </div>
  )
}

export default AvatarSkeleton
