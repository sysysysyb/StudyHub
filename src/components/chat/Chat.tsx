import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalMain,
  ModalTitle,
  ModalTrigger,
  useModalContext,
} from '@/components/common/Modal'
import { Button } from '@/components'
import { MessageCircle, X } from 'lucide-react'

export default function Chat() {
  return (
    <Modal isOverlay={false}>
      <ModalTrigger className="fixed right-5 bottom-5">
        <ChatTriggerButton />
      </ModalTrigger>
      <ModalContent
        isPositionCenter={false}
        className="right-5 bottom-24 h-96 w-80 rounded-lg border border-gray-200 shadow"
      >
        <ModalHeader className="bg-gray-50">
          <div>
            <ModalTitle className="text-base font-semibold">채팅방</ModalTitle>
            <ModalDescription className="text-primary-600 text-xs">
              3개의 읽지 않은 메세지
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalMain>채팅 컨텐츠</ModalMain>
      </ModalContent>
    </Modal>
  )
}

function ChatTriggerButton() {
  const { isOpen } = useModalContext()
  return (
    <Button className="size-16 rounded-full">
      {isOpen ? <X className="w-full" /> : <MessageCircle className="w-full" />}
    </Button>
  )
}
