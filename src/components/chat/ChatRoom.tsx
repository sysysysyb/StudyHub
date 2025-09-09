import ChatRoomInput from './ChatRoomInput'
import ChatRoomUsers from './ChatRoomUsers'
import ChatRoomMessages from './ChatRoomMessages'
import useChatMessages from '@/hooks/api/chat/useChatMessages'
import LoadingState from '@/components/common/State/LoadingState'
import { useEffect, useRef } from 'react'

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
}

export default function ChatRoom({ chatRoomId }: ChatRoomProps) {
  //1. 현재 유저 정보 받아오기

  //2. 지난 메세지 받아오기
  const { data: messages, isPending: isMessagePending } =
    useChatMessages(chatRoomId)

  //3. 웹소켓 연결하기
  const webSocket = useRef<WebSocket | null>(null)

  useEffect(() => {
    webSocket.current = new WebSocket(`ws://example/ws/chat/${chatRoomId}`)

    webSocket.current.onmessage = (event) => {
      console.log(event.data)
    }

    return () => {
      if (webSocket.current) webSocket.current.close()
    }
  }, [chatRoomId])

  return (
    <div>
      <ChatRoomUsers users={dummyChatRoomUsers} />
      {isMessagePending ? (
        <LoadingState className="p-10">로딩중</LoadingState>
      ) : messages ? (
        <ChatRoomMessages messages={messages} />
      ) : null}

      <ChatRoomInput />
    </div>
  )
}
