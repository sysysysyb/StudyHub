import { Search } from 'lucide-react'
import {
  BaseStateButton,
  BaseStateContent,
  BaseStateIcon,
  BaseStateWrapper,
} from './BaseState'
import type { ComponentProps } from 'react'

interface EmptyResultStateProps
  extends ComponentProps<typeof BaseStateWrapper> {
  onClick?: () => void
}

function EmptyResultState({
  onClick,
  className,
  ...props
}: EmptyResultStateProps) {
  return (
    <BaseStateWrapper className={className} {...props}>
      <BaseStateIcon
        icon={Search}
        iconColor="text-gray-400"
        iconBg="bg-gray-100"
      />
      <BaseStateContent
        title="검색 결과가 없습니다"
        description="다른 키워드로 검색해보세요"
      />
      <BaseStateButton
        buttonContent={'새로운 검색'}
        buttonVariant="outline"
        className="bg-gray-50 text-gray-700 transition-colors duration-300 ease-out hover:bg-gray-200"
        onClick={onClick}
      />
    </BaseStateWrapper>
  )
}

export default EmptyResultState
