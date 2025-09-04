import { cn } from '@/utils'
import { Circle } from './SkeletonItem'

const AVATAR_SIZE = {
  XS: 'w-6',
  SM: 'w-8',
  MD: 'w-10',
  LG: 'w-12',
  XL: 'w-14',
}

function AvatarSkeleton({
  size = 'MD',
}: {
  size?: 'XS' | 'SM' | 'MD' | 'LG' | 'XL'
}) {
  const w = AVATAR_SIZE[size]

  return (
    <div className={cn(w)}>
      <Circle />
    </div>
  )
}

export default AvatarSkeleton
