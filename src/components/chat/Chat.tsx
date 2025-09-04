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
import ChatRoomCard from './ChatRoomCard'
import { useState, type ComponentProps } from 'react'
import ChatRoom from './ChatRoom'

const dummyChatroomsData: ComponentProps<typeof ChatRoomCard>[] = [
  {
    title: 'React 실무 프로젝트 스터디',
    lastMessage: {
      sender: '김개발',
      message: '내일 미팅 시간 변경 가능하신가요?',
    },
    unReadedChatCount: 2,
    lastUpdateTime: new Date('2025-07-15T14:30:00'),
  },
  {
    title: 'Python 데이터 분석 스터디',
    lastMessage: {
      sender: '이데이터',
      message: '과제 제출했습니다!',
    },
    unReadedChatCount: 1,
    lastUpdateTime: new Date('2025-07-15T13:45:00'),
  },
  {
    title: 'AWS 클라우드 아키텍처 스터디',
    lastMessage: {
      sender: '박클라우드',
      message: '좋은 자료 감사합니다',
    },
    unReadedChatCount: 0,
    lastUpdateTime: new Date('2025-07-15T10:20:00'),
  },
  {
    title: 'Node.js 백엔드 개발팀',
    lastMessage: {
      sender: '최서버',
      message: '다들 수고하셨습니다!',
    },
    unReadedChatCount: 0,
    lastUpdateTime: new Date('2025-07-14T18:10:00'),
  },
]

export default function Chat() {
  const [chatRoomId, setChatRoomId] = useState('')

  return (
    <Modal isOverlay={false}>
      <ModalTrigger className="fixed right-5 bottom-5">
        <ChatTriggerButton />
      </ModalTrigger>
      <ModalContent
        isPositionCenter={false}
        className="right-5 bottom-24 h-96 w-80 overflow-hidden rounded-lg border border-gray-200 shadow"
      >
        <ModalHeader className="bg-gray-50">
          <div>
            <ModalTitle className="text-base font-semibold">채팅방</ModalTitle>
            <ModalDescription className="text-primary-600 text-xs">
              3개의 읽지 않은 메세지
            </ModalDescription>
          </div>
        </ModalHeader>

        <ModalMain className="overflow-y-scroll p-0">
          {chatRoomId ? (
            <ChatRoom chatRoomId={chatRoomId} />
          ) : (
            dummyChatroomsData.map(
              (
                { title, lastMessage, unReadedChatCount, lastUpdateTime },
                i
              ) => (
                <div
                  key={i}
                  onClick={() => {
                    setChatRoomId('aaajjjdddccc')
                  }}
                >
                  <ChatRoomCard
                    title={title}
                    lastMessage={lastMessage}
                    unReadedChatCount={unReadedChatCount}
                    lastUpdateTime={lastUpdateTime}
                  />
                </div>
              )
            )
          )}
        </ModalMain>
      </ModalContent>
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
