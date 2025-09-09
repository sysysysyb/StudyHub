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

  const handleAuthentication = () => {
    setChallengeAuthentication(true)
    // 여기서 실제 API 요청 (ex: 인증번호 발송) 실행
  }

  // 인증번호 확인
  const handleConfirm = () => {
    // 인증번호 검증 로직
  }

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
          <MypageInputField
            label="휴대폰 번호"
            id="phonenumber"
            buttonLabel={challengeAuthentication ? '재전송' : '인증하기'}
            buttonVariant="secondary"
            onClick={handleAuthentication}
          />
          {challengeAuthentication && (
            <MypageInputField
              label="인증 번호"
              id="authenticationnumber"
              buttonLabel="확인"
              onClick={handleConfirm}
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
          <Button
            variant={challengeAuthentication ? 'secondary' : 'primary'}
            disabled={challengeAuthentication}
          >
            변경하기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
