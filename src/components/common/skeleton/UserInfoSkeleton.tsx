import { SkeletonRectangle } from './SkeletonItem'

function UserInfoSkeleton() {
  return (
    <div className="flex flex-col items-start gap-2">
      <SkeletonRectangle height={8} />
      <SkeletonRectangle height={18} />
    </div>
  )
}

export default UserInfoSkeleton
