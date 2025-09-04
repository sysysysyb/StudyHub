import type { ChatRoomMessages } from '@/types/api-response-types/chat-response-types'
import { cn } from '@/utils'
import ChatRoomInput from './ChatRoomInput'

const dummyChatRoomMessages: ChatRoomMessages = {
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

interface ChatRoomProps {
  chatRoomId: string
}

export default function ChatRoom({ chatRoomId }: ChatRoomProps) {
  return (
    <div>
      <section className="flex flex-col space-y-3 pb-[71px]">
        {dummyChatRoomMessages.results.map((result) => {
          const {
            content,
            created_at: createdAt,
            sender: { nickname, user_uuid: senderId },
            message_id: id,
          } = result

          //현재 로그인 한 아이디
          //추후 실제 아이디와 연결
          const userId = 'user-2222'

          const isMine = senderId === userId

          const hours = String(createdAt.getHours()).padStart(2, '0')
          const minutes = String(createdAt.getMinutes()).padStart(2, '0')

          return (
            <div
              key={id}
              className={cn(
                'flex flex-col space-y-1 p-3',
                isMine ? 'items-end' : 'items-start'
              )}
            >
              <span className="px-1 text-xs text-gray-600">{nickname}</span>
              <p
                className={cn(
                  'rounded-lg px-3 py-2',
                  isMine
                    ? 'bg-primary-500 rounded-br-xs text-white'
                    : 'rounded-bl-xs bg-gray-100 text-gray-900'
                )}
              >
                {content}
              </p>
              <span className="px-1 text-xs text-gray-500">{`${hours}:${minutes}`}</span>
            </div>
          )
        })}
      </section>
      <ChatRoomInput />
    </div>
  )
}
