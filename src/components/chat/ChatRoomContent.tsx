import { useEffect, useRef, type ComponentProps } from 'react'
import ChatRoomCard from './ChatRoomCard'
import {
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalMain,
  ModalTitle,
} from '@/components/common/Modal'
import { cn } from '@/utils'
import { ArrowLeft } from 'lucide-react'
import ChatRoom from './ChatRoom'
import { useChatRoomStore } from '@/store'

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

export default function ChatRoomContent() {
  const { chatRoomId, setChatRoomId } = useChatRoomStore()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      //채팅방 입장 시 스크롤 가장 아래로
      if (chatRoomId) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      } else {
        //채팅방 나올 시 스크롤 가장 위로
        scrollRef.current.scrollTop = 0
      }
    }
  }, [chatRoomId])

  return (
    <ModalContent
      isPositionCenter={false}
      className="right-5 bottom-24 h-96 w-80 overflow-hidden rounded-lg border border-gray-200 shadow"
    >
      <ModalHeader className={cn('bg-gray-50', chatRoomId ? 'p-3' : 'p-4')}>
        {chatRoomId ? (
          <div className="flex flex-row items-center justify-start space-x-2">
            <button
              className="flex size-8 cursor-pointer items-center justify-center"
              onClick={() => {
                setChatRoomId('')
              }}
            >
              <ArrowLeft className="h-6 text-gray-600" />
            </button>

            <div>
              <ModalTitle className="text-sm font-semibold">
                React 실무 프로젝트 스터디
              </ModalTitle>
              <ModalDescription className="text-secondary flex flex-row items-center justify-start space-x-1 text-xs">
                <div className="bg-success-500 size-2 rounded-full" />
                <span className="text-xs">3명 온라인</span>
              </ModalDescription>
            </div>
          </div>
        ) : (
          <div>
            <ModalTitle className="text-base font-semibold">채팅방</ModalTitle>
            <ModalDescription className="text-primary-600 text-xs">
              3개의 읽지 않은 메세지
            </ModalDescription>
          </div>
        )}
      </ModalHeader>

      <ModalMain className="overflow-y-scroll p-0" ref={scrollRef}>
        {chatRoomId ? (
          <ChatRoom chatRoomId={chatRoomId} scrollRef={scrollRef} />
        ) : (
          dummyChatroomsData.map(
            ({ title, lastMessage, unReadedChatCount, lastUpdateTime }, i) => (
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
  )
}
