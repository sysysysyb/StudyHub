import { SkeletonLine, SkeletonRectangle } from './SkeletonItem'

function ImageCardSkeleton() {
  return (
    <div className="flex w-full flex-col items-center gap-2 overflow-hidden rounded-[12px] border border-solid border-gray-300">
      <SkeletonRectangle width={100} height={60} isRounded={false} />
      <div className="w-full flex-3 space-y-2 p-5 sm:space-y-6">
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonRectangle width={100} height={25} />
      </div>
    </div>
  )
}

export default ImageCardSkeleton
