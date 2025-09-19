import { SkeletonLine, SkeletonRectangle } from './SkeletonItem'

function ListItemSkeleton() {
  return (
    <div className="flex w-full items-center gap-2 border border-solid border-gray-300 p-[25px]">
      <div className="flex-1">
        <SkeletonRectangle width={100} height={50} />
      </div>
      <div className="w-full flex-3 space-y-2">
        <SkeletonLine />
        <SkeletonLine width={50} />
        <SkeletonLine width={50} />
        <SkeletonLine width={75} />
      </div>
    </div>
  )
}

export default ListItemSkeleton
