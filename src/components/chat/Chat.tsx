import { Modal, ModalTrigger } from '@/components/common/Modal'
import { Button } from '@/components'
import { MessageCircle, X } from 'lucide-react'

import ChatRoomContent from './ChatRoomContent'
import { useChatRoomStore } from '@/store'
export default function Chat() {
  const { isOpen, closeChatRoom, openChatRoom, toggleChatRoom } =
    useChatRoomStore()

  return (
    <Modal
      isOverlay={false}
      externalModalControl={{
        isOpen,
        open: openChatRoom,
        close: closeChatRoom,
        toggle: toggleChatRoom,
      }}
    >
      <ModalTrigger className="fixed right-5 bottom-5">
        <ChatTriggerButton />
      </ModalTrigger>
      <ChatRoomContent />
    </Modal>
  )
}

function ChatTriggerButton() {
  const { isOpen } = useChatRoomStore()

  return (
    <Button className="size-16 cursor-pointer rounded-full">
      {isOpen ? <X className="w-full" /> : <MessageCircle className="w-full" />}
    </Button>
  )
}
