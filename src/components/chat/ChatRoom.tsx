import ChatRoomInput from './ChatRoomInput'
import ChatRoomUsers from './ChatRoomUsers'
import ChatRoomMessages from './ChatRoomMessages'
import useChatMessages from '@/hooks/api/chat/useChatMessages'
import LoadingState from '@/components/common/state/LoadingState'
import { useEffect } from 'react'
import { useChatRoomStore } from '@/store'

const dummyChatRoomUsers: { username: string; isOnline: boolean }[] = [
  { username: 'Bob', isOnline: true },
  { username: 'Alice', isOnline: true },
  { username: 'Eve', isOnline: false },
  { username: '이재현', isOnline: true },
  { username: '김승원', isOnline: false },
  { username: '백서영', isOnline: true },
]

interface ChatRoomProps {
  chatRoomId: string
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

export default function ChatRoom({ chatRoomId, scrollRef }: ChatRoomProps) {
  const { messages, connect, disconnect, setMessages } = useChatRoomStore()

  //지난 메세지 받아오기
  const {
    data: lastMessages,
    isPending: isMessagePending,
    status,
  } = useChatMessages(chatRoomId)

  //웹소켓 연결하기
  useEffect(() => {
    connect(chatRoomId)

    return () => {
      disconnect()
    }
  }, [chatRoomId, connect, disconnect])

  useEffect(() => {
    if (status === 'success' && lastMessages) {
      setMessages(lastMessages.results)
    }
  }, [lastMessages, scrollRef, setMessages, status])

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, scrollRef])

  return (
    <div>
      <ChatRoomUsers users={dummyChatRoomUsers} />
      {isMessagePending ? (
        <LoadingState className="p-10">로딩중</LoadingState>
      ) : lastMessages ? (
        <ChatRoomMessages messages={messages} />
      ) : null}

      <ChatRoomInput />
    </div>
  )
}
