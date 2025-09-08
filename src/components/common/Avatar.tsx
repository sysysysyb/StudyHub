import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/utils'
import { AVATAR_SIZE } from '@/constants/avatar-size'
import { User as UserIcon } from 'lucide-react'

const AvatarImage = cva(
  'text-primary-600 bg-primary-100 rounded-full relative shrink-0 flex items-center justify-center border-primary-200 border',
  {
    variants: {
      size: AVATAR_SIZE,
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const AvatarState = cva(
  'size-3 absolute bottom-0 right-0 rounded-full opacity-80',
  {
    variants: {
      state: {
        active: 'bg-success-500',
        away: 'bg-primary-500',
        dnd: 'bg-danger-500',
        offline: 'bg-gray-400',
        none: 'display:none',
      },
    },
    defaultVariants: {
      state: 'active',
    },
  }
)

interface AvatarProps
  extends ComponentProps<'img'>,
    VariantProps<typeof AvatarImage>,
    VariantProps<typeof AvatarState> {}

export default function Avatar({
  alt,
  size,
  state,
  className,
  src,
}: AvatarProps) {
  return (
    <div className={cn(AvatarImage({ size }), className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span>{alt?.charAt(0) || <UserIcon size={50} />}</span>
        // 마이페이지 사이드바에서 쓰인 아이콘으로 대체.
      )}
      <span aria-hidden="true" className={cn(AvatarState({ state }))} />
    </div>
  )
}
