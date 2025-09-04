import { type LucideIcon } from 'lucide-react'
import Button from '@/components/common/Button'
import { cn } from '@/utils'
import type { ReactNode } from 'react'

interface BaseStateProps {
  icon?: LucideIcon
  iconColor?: string
  iconBg?: string
  title: string
  description: string
  buttonValue?: ReactNode
  buttonType?: 'primary' | 'outline'
  buttonClassName?: string
  onClick?: () => void
}

function Icon({ icon: CurrentIcon, iconBg, iconColor }: BaseStateProps) {
  return (
    <div
      className={cn(
        'flex size-20 items-center justify-center rounded-full',
        iconBg
      )}
    >
      {CurrentIcon && <CurrentIcon className={cn('size-[30px]', iconColor)} />}
    </div>
  )
}

function Spinner() {
  return (
    <div className="border-primary-500 animate-loading-state size-12 rounded-full border-b-2 border-solid" />
  )
}

function BaseState({
  icon,
  iconColor,
  iconBg,
  title,
  description,
  buttonValue,
  buttonType,
  buttonClassName,
  onClick,
}: BaseStateProps) {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 rounded-lg border border-solid border-gray-200 bg-gray-50">
      {icon ? (
        <Icon icon={icon} iconColor={iconColor} iconBg={iconBg} />
      ) : (
        <Spinner />
      )}
      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <p className="text-base/6 font-normal text-gray-500">{description}</p>
      </div>
      {buttonValue && (
        <Button
          variant={buttonType}
          className={buttonClassName}
          onClick={onClick}
        >
          {buttonValue}
        </Button>
      )}
    </div>
  )
}

export default BaseState
