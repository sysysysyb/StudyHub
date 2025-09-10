import { Badge } from '@/components'
import type { ReactNode } from 'react'
import { BadgeVariant } from '@/constants/badge-variants'
import type { AppliedStatusProps } from '@/types/api-response-types/recruitment-response-types'

export const AppliedStatusBadge = ({
  status,
}: AppliedStatusProps): ReactNode => {
  let label: '대기중' | '승인됨' | '거절됨' | null
  let badgeVariant: keyof typeof BadgeVariant
  if (status === 'waiting') {
    badgeVariant = 'primary'
    label = '대기중'
  } else if (status === 'approved') {
    badgeVariant = 'success'
    label = '승인됨'
  } else if (status === 'rejected') {
    badgeVariant = 'danger'
    label = '거절됨'
  } else {
    badgeVariant = 'default'
    label = null
    // BadgeVariant 객체에 default가 포함되어 있어 설정
    // 사용되지는 않을 것으로 예상
  }

  return <Badge variant={badgeVariant}>{label}</Badge>
}
