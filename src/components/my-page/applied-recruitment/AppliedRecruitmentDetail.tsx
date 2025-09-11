import {
  Modal,
  ModalContent,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
  ModalDescription,
  ModalTrigger,
} from '@/components/common/Modal'
import Button from '@/components/common/Button'

export const AppliedRecruitmentDetail = () => {
  const titleDescription = '프론트엔드 DevOps 스터디'
  return (
    <Modal>
      <ModalTrigger>모달 발생</ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader className="flex flex-col items-start">
          <ModalTitle>지원 상세 정보</ModalTitle>
          <ModalDescription>{titleDescription}</ModalDescription>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-6"></ModalMain>

        <ModalFooter className="flex justify-end gap-2">
          <ModalClose>
            <Button variant="outline">닫기</Button>
          </ModalClose>
          <Button variant="danger">지원 취소</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
