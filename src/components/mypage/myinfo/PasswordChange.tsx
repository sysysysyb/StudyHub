import {
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

export const PasswordChange = () => {
  return (
    <Modal>
      {/* 모달 열기 버튼 */}
      <Button
        size="lg"
        className="my-auto bg-gray-500 py-2.5 hover:bg-gray-400 active:bg-gray-600"
      >
        <ModalTrigger>비밀번호 변경</ModalTrigger>
      </Button>

      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader>
          <ModalTitle>비밀번호 변경</ModalTitle>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-4">
          <MypageInputField
            label="현재 비밀번호"
            id="currentPassword"
            isRequired
          />
          <MypageInputField label="새 비밀번호" id="newPassword" isRequired />
          <MypageInputField
            label="새 비밀번호 확인"
            id="passwordConfirm"
            isRequired
          />
        </ModalMain>

        <ModalFooter className="flex justify-end gap-1">
          <ModalClose>
            <Button variant="outline">취소</Button>
          </ModalClose>
          <Button>변경하기</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
