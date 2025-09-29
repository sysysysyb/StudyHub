import { WithdrawalReasonEnum } from '@/types/api-request-types/auth-request-types'

interface withdrawalReasonProps {
  label: string
  value: WithdrawalReasonEnum
}

const {
  NO_LONGER_NEEDED,
  LACK_OF_INTEREST,
  TOO_DIFFICULT,
  FOUND_BETTER_SERVICE,
  PRIVACY_CONCERNS,
  POOR_SERVICE_QUALITY,
  TECHNICAL_ISSUES,
  LACK_OF_CONTENT,
  OTHER,
} = WithdrawalReasonEnum

export const withdrawalReason: withdrawalReasonProps[] = [
  {
    label: '서비스 이용할 시간이 없음',
    value: NO_LONGER_NEEDED,
  },
  { label: '관심이 사라짐', value: LACK_OF_INTEREST },
  {
    label: '서비스를 이용하기가 너무 어려움',
    value: TOO_DIFFICULT,
  },
  {
    label: '더 좋은 대안을 찾음',
    value: FOUND_BETTER_SERVICE,
  },
  { label: '개인정보/보안 우려', value: PRIVACY_CONCERNS },
  {
    label: '서비스 품질 불만',
    value: POOR_SERVICE_QUALITY,
  },
  {
    label: '기술적 문제(버그 등)',
    value: TECHNICAL_ISSUES,
  },
  {
    label: '원하는 콘텐츠나 기능의 부족',
    value: LACK_OF_CONTENT,
  },
  { label: '기타', value: OTHER },
] as const
