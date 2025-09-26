import ChatRoomInput from './ChatRoomInput'
import ChatRoomUsers from './ChatRoomUsers'
import ChatRoomMessages from './ChatRoomMessages'
import useChatMessages from '@/hooks/api/chat/useChatMessages'
import LoadingState from '@/components/common/state/LoadingState'
import { useEffect, useRef, useState } from 'react'
import { getChatRoomWebSocketUrl } from '@/utils'
import {
  ChatSocketEventUnionSchema,
  type Message,
} from '@/schemas/api-response-schemas/chat-response.schema'

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
  const [messages, setMessages] = useState<Message[]>([])

  //지난 메세지 받아오기
  const {
    data: lastMessages,
    isPending: isMessagePending,
    status,
  } = useChatMessages(chatRoomId)

  //웹소켓 연결하기
  const webSocket = useRef<WebSocket | null>(null)

  useEffect(() => {
    const chatRoomURL = getChatRoomWebSocketUrl(chatRoomId, true)

    if (!chatRoomURL) return

    webSocket.current = new WebSocket(chatRoomURL)

    webSocket.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        const result = ChatSocketEventUnionSchema.parse(data)

        if (result.type === 'chat_message') {
          setMessages((prev) => [...prev, result.data])
        }
      } catch (error) {
        alert('웹소켓  에러' + error)
      }
    }

    return () => {
      if (webSocket.current) webSocket.current.close()
    }
  }, [chatRoomId, scrollRef])

  useEffect(() => {
    if (status === 'success' && lastMessages) {
      setMessages((prev) => [...prev, ...lastMessages.results])
    }
  }, [lastMessages, scrollRef, status])

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
