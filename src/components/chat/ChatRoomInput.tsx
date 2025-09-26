import { Send as SendIcon } from 'lucide-react'
import { Input } from '@/components/common/input'
import { useState } from 'react'
import { useChatRoomStore } from '@/store'

export default function ChatRoomInput() {
  const { sendMessage } = useChatRoomStore()
  const [message, setMessage] = useState('')

  const handleSendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    sendMessage(message)
    setMessage('')
  }
  return (
    <form
      onSubmit={handleSendMessage}
      className="sticky bottom-0 left-0 flex w-full items-center justify-center space-x-2 border-t border-t-gray-200 bg-white p-3"
    >
      <div className="flex-1">
        <Input
          placeholder="메세지를 입력하세요.."
          className="rounded-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-white transition-colors hover:bg-gray-500 focus:outline-none"
        type="submit"
      >
        <SendIcon className="z-30 h-5" />
      </button>
    </form>
  )
}
