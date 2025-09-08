import { Modal, ModalTrigger, useModalContext } from '@/components/common/Modal'
import { Button } from '@/components'
import { MessageCircle, X } from 'lucide-react'

import ChatRoomContent from './ChatRoomContent'

export default function Chat() {
  return (
    <Modal isOverlay={false}>
      <ModalTrigger className="fixed right-5 bottom-5">
        <ChatTriggerButton />
      </ModalTrigger>
      <ChatRoomContent />
    </Modal>
  )
}

function ChatTriggerButton() {
  const { isOpen } = useModalContext()
  return (
    <Button className="size-16 cursor-pointer rounded-full">
      {isOpen ? <X className="w-full" /> : <MessageCircle className="w-full" />}
    </Button>
  )
}
