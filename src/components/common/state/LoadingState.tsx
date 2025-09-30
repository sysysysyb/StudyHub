import type { ComponentProps } from 'react'
import { BaseStateContent, BaseStateWrapper } from './BaseState'
import { Spinner } from '@/components'

function LoadingState({
  className,
  ...props
}: ComponentProps<typeof BaseStateWrapper>) {
  return (
    <BaseStateWrapper className={className} {...props}>
      <Spinner />
      <BaseStateContent
        title="데이터를 불러오고 있습니다"
        description="잠시만 기다려주세요..."
      />
    </BaseStateWrapper>
  )
}

export default LoadingState
