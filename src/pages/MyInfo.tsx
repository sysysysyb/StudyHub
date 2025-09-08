import type { ReactNode } from 'react'
import { Button, UserInfoDescription, Avatar } from '@/components'

export function MyInfo(): ReactNode {
  return (
    <main>
      <section className="flex flex-col gap-8 pb-16" aria-labelledby="myInfo">
        <header className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-heading3 pb-2">내 정보</h2>
            <p className="text-secondary">
              회원 정보를 확인하고 수정할 수 있습니다
            </p>
          </div>
          <Button size="lg" className="my-auto py-2.5">
            수정하기
          </Button>
        </header>
        <figure className="flex flex-col items-center gap-4">
          <Avatar size="3xl" state="none" />
          <figcaption className="text-heading5">프로필 이미지</figcaption>
        </figure>
        <UserInfoDescription
          infoList={[
            { title: '이메일', detail: 'kim.dev@example.com' },
            { title: '휴대폰 번호', detail: '' },
            { title: '닉네임', detail: '' },
            { title: '생년월일', detail: '' },
            { title: '이름', detail: '' },
          ]}
        />
      </section>

      <section
        className="border-y border-gray-200 py-16 pt-8"
        aria-labelledby="passwordChange"
      >
        <header className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-heading3 pb-2">비밀번호</h2>
            <p className="text-secondary">
              보안을 위해 정기적으로 비밀번호를 변경해주세요
            </p>
          </div>
          <Button
            size="lg"
            className="my-auto bg-gray-500 py-2.5 hover:bg-gray-400 active:bg-gray-600"
          >
            비밀번호 변경
          </Button>
        </header>
      </section>
      <section className="py-16 pt-8" aria-labelledby="unregister">
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
          <Button variant="danger" size="lg" className="my-auto py-2.5">
            회원 탈퇴
          </Button>
        </header>
      </section>
    </main>
  )
}
