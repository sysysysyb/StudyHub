import type { ChatRoomMessages } from '@/types/api-response-types/chat-response-types'

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
      <section className="flex flex-col-reverse overflow-y-scroll">
        {dummyChatRoomMessages.results.map((result) => {
          const {
            content,
            created_at: createdAt,
            sender: { nickname },
            message_id: id,
          } = result

          const hours = String(createdAt.getHours()).padStart(2, '0')
          const minutes = String(createdAt.getMinutes()).padStart(2, '0')

          return (
            <div key={id}>
              <span>{nickname}</span>
              <p>{content}</p>
              <span>{`${hours}:${minutes}`}</span>
            </div>
          )
        })}
      </section>
    </div>
  )
}
