import { Badge } from '@/components'
import type { ReactNode } from 'react'
import { BadgeVariant } from '@/constants/badge-variants'
import type { AppliedStatus } from '@/types/api-response-types/recruitment-response-types'

// 매핑객체 생성 후 구조분해할당 방식으로 수정.
const STATUS_MAP: Record<
  AppliedStatus,
  { label: string; variant: keyof typeof BadgeVariant }
> = {
  pending: { label: '대기중', variant: 'primary' },
  canceled: { label: '취소됨', variant: 'default' },
  accepted: { label: '승인됨', variant: 'success' },
  rejected: { label: '거절됨', variant: 'danger' },
}

export const AppliedStatusBadge = (status: AppliedStatus): ReactNode => {
  const { label, variant } = STATUS_MAP[status]
  return <Badge variant={variant}>{label}</Badge>
}
