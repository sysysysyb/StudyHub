import type { ComponentProps } from 'react'
import {
  BaseStateContent,
  BaseStateSpinner,
  BaseStateWrapper,
} from './BaseState'

function LoadingState({
  className,
  ...props
}: ComponentProps<typeof BaseStateWrapper>) {
  return (
    <BaseStateWrapper className={className} {...props}>
      <BaseStateSpinner />
      <BaseStateContent
        title="데이터를 불러오고 있습니다"
        description="잠시만 기다려주세요..."
      />
    </BaseStateWrapper>
  )
}

export default LoadingState
