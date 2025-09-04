import { Bell as BellIcon } from 'lucide-react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/common/Modal'

export default function Notification() {
  return (
    <div className="relative">
      <Modal isOverlay={false}>
        <ModalTrigger>
          <BellIcon className="h-5 text-gray-600" />
        </ModalTrigger>
        <ModalContent
          isPositionCenter={false}
          className="absolute top-10 right-0 h-96 w-80 overflow-hidden rounded-lg border border-gray-200 shadow"
        >
          <ModalHeader>
            <ModalTitle>알림</ModalTitle>
          </ModalHeader>
          <ModalContent>알림 읽어!</ModalContent>
        </ModalContent>
      </Modal>
    </div>
  )
}
