import {
  UserInfoDescription,
  InfoUpdate,
  PasswordChange,
  Withdrawal,
} from '@/components/my-page'
import { Avatar, UserInfoSkeleton } from '@/components'
import { mapUserInfoToDescription } from '@/utils/map-user-info'
import { useUserInformation } from '@/hooks/api'

export function MyInfo() {
  const { data: userInfo, isPending } = useUserInformation()
  if (!userInfo) return '로그인이 필요합니다.'

  return (
    <main>
      {/* 내 정보 섹션 */}
      <section
        className="flex flex-col gap-8 pb-16"
        aria-labelledby="myInfoHeading"
      >
        <header className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-heading3 pb-2">내 정보</h2>
            <p className="text-secondary">
              회원 정보를 확인하고 수정할 수 있습니다
            </p>
          </div>
          <InfoUpdate />
        </header>
        <figure className="flex flex-col items-center gap-4">
          <Avatar
            size="5xl"
            state="none"
            src={userInfo.profileImageUrl ?? undefined}
          />
          <figcaption className="text-heading5">프로필 이미지</figcaption>
        </figure>
        {isPending ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[...Array(5)].map((_, i) => (
              <UserInfoSkeleton key={i} />
            ))}
          </div>
        ) : (
          <UserInfoDescription infoList={mapUserInfoToDescription(userInfo)} />
        )}
      </section>
      {/* 비밀번호 섹션 */}
      <section
        className="border-y border-gray-200 py-16 pt-8"
        aria-labelledby="passwordChangeHeading"
      >
        <header className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-heading3 pb-2">비밀번호</h2>
            <p className="text-secondary">
              보안을 위해 정기적으로 비밀번호를 변경해주세요
            </p>
          </div>
          <PasswordChange />
        </header>
      </section>
      {/* 회원 탈퇴 섹션 */}
      <section className="py-16 pt-8" aria-labelledby="withdrawalHeading">
        <header className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-heading3 pb-2">회원 탈퇴</h2>
            <div className="flex items-end gap-2">
              <span className="text-secondary">
                계정을 삭제하고 서비스를 떠나실 수 있습니다
              </span>
              <span className="text-primary-600 text-sm">
                탈퇴 후 2주간 계정 복구가 가능합니다
              </span>
            </div>
          </div>
          <Withdrawal />
        </header>
      </section>
    </main>
  )
}
