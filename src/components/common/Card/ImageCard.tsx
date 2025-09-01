import { Card, type CardProps } from '@/components/common/Card/Card'
import { cn } from '@/utils'

interface ImageCardProps extends CardProps {
  imageUrl: string
}

export default function ImageCard({
  imageUrl,
  children,
  className = '',
  ...props
}: ImageCardProps) {
  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <div className={cn('aspect-[16/9] object-cover object-center')}>
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-6">{children}</div>
    </Card>
  )
}
