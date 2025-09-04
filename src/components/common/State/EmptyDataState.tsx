import { Inbox, Plus } from 'lucide-react'
import {
  BaseStateButton,
  BaseStateContent,
  BaseStateIcon,
  BaseStateWrapper,
} from './BaseState'
import type { ComponentProps } from 'react'

interface EmptyDataStateProps extends ComponentProps<typeof BaseStateWrapper> {
  onClick?: () => void
}

function EmptyDataState({ onClick, className, ...props }: EmptyDataStateProps) {
  return (
    <BaseStateWrapper className={className} {...props}>
      <BaseStateIcon
        icon={Inbox}
        iconColor="text-primary-500"
        iconBg="bg-primary-50"
      />
      <BaseStateContent
        title="아직 데이터가 없습니다"
        description="첫 번째 항목을 추가해보세요"
      />
      <BaseStateButton
        buttonContent={
          <span className="flex items-center gap-2">
            <Plus className="size-4" />
            새로 만들기
          </span>
        }
        buttonVariant="primary"
        className="px-6 py-3"
        onClick={onClick}
      />
    </BaseStateWrapper>
  )
}

export default EmptyDataState
