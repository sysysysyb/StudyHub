import { cn } from '@/utils'
import { Circle } from './SkeletonItem'

const AVATAR_SIZE = {
  xs: 'w-6',
  sm: 'w-8',
  md: 'w-10',
  lg: 'w-12',
  xl: 'w-14',
}

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
