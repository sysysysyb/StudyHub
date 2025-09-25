import {
  Modal,
  ModalContent,
  ModalTrigger,
  ModalHeader,
  ModalTitle,
} from '@/components/common/Modal'
import { InfoUpdateForm } from './InfoUpdateForm'
import { Button } from '@/components'

export const InfoUpdate = () => {
  return (
    <Modal>
      <ModalTrigger>
        <Button size="lg">수정하기</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>프로필 수정</ModalTitle>
        </ModalHeader>
        <InfoUpdateForm />
      </ModalContent>
    </Modal>
  )
}
