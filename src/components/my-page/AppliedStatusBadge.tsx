import { Badge } from '@/components'
import type { ReactNode } from 'react'
import { BadgeVariants } from '@/constants/badge-variants'
import type { AppliedStatusProps } from '@/types/api-response-types/recruitment-response-types'

export const AppliedStatusBadge = ({
  status,
}: AppliedStatusProps): ReactNode => {
  let label: '대기중' | '승인됨' | '거절됨'
  let badgeVariant: keyof typeof BadgeVariants
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
    label = '대기중'
  }

  return <Badge variant={badgeVariant}>{label}</Badge>
}
