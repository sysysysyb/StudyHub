import ChatRoomInput from './ChatRoomInput'
import ChatRoomUsers from './ChatRoomUsers'
import ChatRoomMessages from './ChatRoomMessages'
import useChatMessages from '@/hooks/api/chat/useChatMessages'
import LoadingState from '@/components/common/State/LoadingState'

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
  const { data: messages, isPending: isMessagePending } =
    useChatMessages(chatRoomId)

  //2. 지난 메세지 받아오기
  //3. 웹소켓 연결하기

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
