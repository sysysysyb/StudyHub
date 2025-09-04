import { Send as SendIcon } from 'lucide-react'
import { Input } from '@/components'

export default function ChatRoomInput() {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-center space-x-2 border-t border-t-gray-200 bg-white p-3">
      <div className="flex-1">
        <Input placeholder="메세지를 입력하세요.." className="rounded-full" />
      </div>

      <button className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-white">
        <SendIcon className="z-30 h-5" />
      </button>
    </div>
  )
}
