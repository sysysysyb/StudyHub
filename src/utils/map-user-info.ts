import type { UserInformation } from '@/types'
import type { InfoDescription } from '@/components/my-page/my-info/InfoDescription'

// 마이페이지 내정보 조회를 위한 유틸 생성
export function mapUserInfoToDescription(
  user: UserInformation
): InfoDescription[] {
  return [
    { title: '이메일', detail: user.email ?? '' },
    { title: '휴대폰 번호', detail: user.phoneNumber ?? '' },
    { title: '닉네임', detail: user.nickname ?? '' },
    { title: '생년월일', detail: user.birthday ?? '' },
    { title: '이름', detail: user.name ?? '' },
  ]
}
