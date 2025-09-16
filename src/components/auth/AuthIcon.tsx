import { cn } from '@/utils'
import type { LucideIcon } from 'lucide-react'

interface AuthIconProps {
  Icon: LucideIcon
  iconClassName?: string
}

function AuthIcon({ Icon, iconClassName }: AuthIconProps) {
  return (
    <div className="flex size-16 items-center justify-center rounded-full bg-amber-100">
      <Icon className={cn('text-primary-500 h-6', iconClassName)} />
    </div>
  )
}

export default AuthIcon
