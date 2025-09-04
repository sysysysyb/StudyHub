import type { ChatRoomMessages as ChatRoomMessagesType } from '@/types/api-response-types/chat-response-types'
import ChatRoomInput from './ChatRoomInput'
import ChatRoomUsers from './ChatRoomUsers'
import ChatRoomMessages from './ChatRoomMessages'

const dummyChatRoomMessages: ChatRoomMessagesType = {
  next_cursor: 'cursor_2',
  results: [
    {
      message_id: 1,
      sender: {
        user_uuid: 'user-1111',
        nickname: 'Alice',
        profile_img_url: '',
      },
      content: '안녕하세요!',
      created_at: new Date('2025-09-02T12:00:00Z'),
    },
    {
      message_id: 2,
      sender: {
        user_uuid: 'user-2222',
        nickname: 'Bob',
        profile_img_url: '',
      },
      content: '반가워요 😄',
      created_at: new Date('2025-09-02T12:01:30Z'),
    },
    {
      message_id: 3,
      sender: {
        user_uuid: 'user-1111',
        nickname: 'Alice',
        profile_img_url: '',
      },
      content: '오늘 뭐 하세요?',
      created_at: new Date('2025-09-02T12:02:15Z'),
    },
    {
      message_id: 4,
      sender: {
        user_uuid: 'user-2222',
        nickname: 'Bob',
        profile_img_url: '',
      },
      content: '저는 코드 짜고 있어요 👨‍💻',
      created_at: new Date('2025-09-02T12:03:00Z'),
    },
  ],
}

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
  return (
    <div>
      <ChatRoomUsers users={dummyChatRoomUsers} />
      <ChatRoomMessages messages={dummyChatRoomMessages} />
      <ChatRoomInput />
    </div>
  )
}
