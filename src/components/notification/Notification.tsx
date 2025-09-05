import { Bell as BellIcon } from 'lucide-react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalMain,
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
          <ModalHeader className="p-4" hasCloseButton={false}>
            <ModalTitle>알림</ModalTitle>
            <button className="text-primary-600 cursor-pointer">
              모두 읽음
            </button>
          </ModalHeader>
          <ModalMain className="p-0"></ModalMain>
        </ModalContent>
      </Modal>
    </div>
  )
}
