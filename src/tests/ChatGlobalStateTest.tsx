import { Button, Chat } from '@/components'
import { useChatRoomStore } from '@/store'

const CHAT_ROOM_ID = 'chat-1111'

export default function ChatGlobalStateTest() {
  const { setChatRoomId, openChatRoom } = useChatRoomStore((state) => state)

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (openChatRoom) {
      setChatRoomId(CHAT_ROOM_ID)
      openChatRoom()
    }
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-heading3">
        아래 버튼을 클릭하면 채팅방이 열려야합니다.
      </h1>
      <Button onClick={handleButtonClick}>채팅 열기</Button>

      <Chat />
    </div>
  )
}
