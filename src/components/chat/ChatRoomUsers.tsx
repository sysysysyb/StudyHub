import { cn } from '@/utils'

interface ChatRoomUsersProps {
  users: { username: string; isOnline: boolean }[]
}

export default function ChatRoomUsers({ users }: ChatRoomUsersProps) {
  return (
    // TODO: 마우스 드래그로 스크롤 할 수 있게 변경
    <section className="sticky top-0 flex items-center justify-start space-x-2 overflow-x-scroll border-b border-gray-200 bg-gray-200 p-2">
      {users.map(({ username, isOnline }, i) => (
        <div
          key={i}
          className="flex items-center justify-center space-x-2 rounded-full bg-white px-2 py-1"
        >
          <div
            className={cn(
              'size-2 rounded-full',
              isOnline ? 'bg-success-500' : 'bg-gray-300'
            )}
          />
          <span className="whitespace-nowrap">{username}</span>
        </div>
      ))}
    </section>
  )
}
