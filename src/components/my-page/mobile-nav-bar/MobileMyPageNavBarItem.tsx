import { cn } from '@/utils'
import type { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router'

interface MobileMyPageNavBarItemProps {
  icon: LucideIcon
  title: string
  className?: string
  url: string
}

export default function MobileMyPageNavBarItem({
  className,
  title,
  icon: Icon,
  url,
}: MobileMyPageNavBarItemProps) {
  const location = useLocation()

  return (
    <Link
      to={url}
      className={cn(
        'hover:bg-primary-500 flex h-full w-full flex-col items-center justify-center gap-1 transition-colors hover:text-white',
        location.pathname === url
          ? 'bg-primary-500 text-white'
          : 'bg-white text-gray-600',
        className
      )}
    >
      <Icon className="h-[18px]" />
      <span className="text-xs">{title}</span>
    </Link>
  )
}
