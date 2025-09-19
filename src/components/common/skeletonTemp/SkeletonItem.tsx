import { cn } from '@/utils'

const skeletonStyle =
  'text-gray-200 animate-shimmer bg-gradient-custom bg-[length:300%_100%]'

export function Circle() {
  return (
    <svg
      viewBox={'0 0 100 100'}
      className={cn(skeletonStyle, 'rounded-full')}
    ></svg>
  )
}

export function Rectangle({
  width = 100,
  height = 100,
  isRounded = true,
}: {
  width?: number
  height?: number
  isRounded?: boolean
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn('w-full', skeletonStyle, isRounded && 'rounded-sm')}
    ></svg>
  )
}

export function Sentence({ width = 100 }: { width?: number }) {
  return (
    <svg
      viewBox={`0 0 100 4`}
      className={cn(`w-[${width}%]`, skeletonStyle, 'rounded-sm')}
    ></svg>
  )
}
