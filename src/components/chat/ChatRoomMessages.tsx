import type { Message } from '@/schemas/api-response-schemas/chat-response.schema'
import { cn } from '@/utils'

interface ChatRoomMessagesProps {
  messages: Message[]
}

export default function ChatRoomMessages({ messages }: ChatRoomMessagesProps) {
  return (
    <section className="flex flex-col space-y-3">
      {messages.map((message) => {
        const {
          content,
          created_at: createdAtString,
          sender: { nickname, user_uuid: senderId },
          message_id: id,
        } = message

        //현재 로그인 한 아이디
        //추후 실제 아이디와 연결
        const userId = 'user-uuid-2'

        const isMine = senderId === userId

        const createdAt = new Date(createdAtString)

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
  )
}
