interface ChatRoomCardProps {
  title: string
  lastMessage: {
    sender: string
    message: string
  }
  unReadedChatCount: number
  lastUpdateTime: Date
}

export default function ChatRoomCard({
  title,
  lastMessage: { sender, message },
  unReadedChatCount,
  lastUpdateTime,
}: ChatRoomCardProps) {
  const lastUpdateMonth = lastUpdateTime.getMonth()
  const lastUpdateDate = lastUpdateTime.getDate()

  return (
    <div className="flex w-full flex-col items-start justify-start border-b border-gray-200 p-3">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-900">{title}</span>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xs text-gray-500">{`${lastUpdateMonth}월 ${lastUpdateDate}일`}</span>
          {unReadedChatCount > 0 ? (
            <span className="bg-danger-500 flex size-5 items-center justify-center rounded-full text-center text-xs text-white">
              {unReadedChatCount}
            </span>
          ) : null}
        </div>
      </div>
      <span className="text-xs text-gray-600">{`${sender}: ${message}`}</span>
      <span className="text-xs text-gray-400">{`수정일시: ${lastUpdateDate}`}</span>
    </div>
  )
}
