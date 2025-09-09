import {
  Avatar,
  Modal,
  ModalContent,
  ModalTrigger,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
  Button,
} from '@/components'
import { MypageInputField } from './MypageInputField'
import { useState } from 'react'

export const InfoUpdate = () => {
  const [challengeAuthentication, setChallengeAuthentication] = useState(false)

  return (
    <Modal>
      {/* 모달 열기 버튼 */}
      <ModalTrigger>
        <Button size="lg">수정하기</Button>
      </ModalTrigger>

      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader>
          <ModalTitle>프로필 수정</ModalTitle>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-6">
          <label className="flex cursor-pointer flex-col items-center gap-4">
            <Avatar size="3xl" state="none" />
            {/* TODO 이미지 업로드 로직 구현 */}
            <span className="text-primary-600 text-sm">프로필 사진 변경</span>
          </label>
          <MypageInputField label="닉네임" id="nickname" isRequired />

          {/* 테스트용 임시로직 구현 */}
          {challengeAuthentication ? (
            <MypageInputField
              label="휴대폰 번호"
              id="phonenumber"
              buttonLabel="재전송"
              buttonVariant="secondary"
              onClick={() => setChallengeAuthentication(false)}
            />
          ) : (
            <MypageInputField
              label="휴대폰 번호"
              id="phonenumber"
              buttonLabel="인증하기"
              buttonVariant="secondary"
              onClick={() => setChallengeAuthentication(true)}
            />
          )}
          {challengeAuthentication && (
            <MypageInputField
              label="인증 번호"
              id="authenticationnumber"
              buttonLabel="확인"
            />
          )}
        </ModalMain>

        <ModalFooter className="flex justify-end gap-1">
          <ModalClose>
            <Button
              variant="outline"
              onClick={() => setChallengeAuthentication(false)}
            >
              취소
            </Button>
          </ModalClose>
          {challengeAuthentication ? (
            <Button variant="secondary" disabled={challengeAuthentication}>
              변경하기
            </Button>
          ) : (
            <Button>변경하기</Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
