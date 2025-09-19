import { Button } from '@/components'
import { Card } from '@/components/common/card/Card'
import { Input } from '@/components/common/input'
import {
  ChatSocketEventUnionSchema,
  type Message,
} from '@/schemas/api-response-schemas/chat-response.schema'
import { useEffect, useRef, useState } from 'react'

export default function WebsocketTest() {
  const [messages, setMessages] = useState<Message[]>([])

  const [message, setMessage] = useState('')

  const webSocket = useRef<WebSocket | null>(null)
  const chatRoomId = 'chat-1111'
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    webSocket.current = new WebSocket(`ws://example/ws/chat/`)

    webSocket.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        const result = ChatSocketEventUnionSchema.parse(data)
        console.log('✅ 유효한 이벤트:', result)

        if (result.type === 'chat_message') {
          setMessages((prev) => [...prev, result.data])
        }
      } catch (error) {
        console.error('❌ 잘못된 이벤트 형식:', error)
      }
    }

    return () => {
      if (webSocket.current) webSocket.current.close()
    }
  }, [chatRoomId])

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (webSocket.current && message.trim() !== '') {
      const data = {
        type: 'send_message',
        data: { content: message },
      }

      webSocket.current.send(JSON.stringify(data))
      setMessage('')
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-heading2">웹소켓 연결 테스트</h1>
      <span>5초에 한 번 씩 채팅이 도착해야합니다.</span>
      <div
        ref={divRef}
        className="flex h-[750px] w-full max-w-xl flex-col items-center justify-start gap-3 overflow-y-scroll rounded-2xl border border-gray-700 p-10"
      >
        {messages.map((message, i) => (
          <Card key={i} className="w-full">
            <ul className="w-full">
              <li>{`보낸이: ${message.sender.nickname}`}</li>
              <li>{`채팅: ${message.content}`}</li>
            </ul>
          </Card>
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        className="flex items-center justify-center gap-2"
      >
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메세지를 입력하세요"
        />
        <Button type="submit">전송</Button>
      </form>
    </div>
  )
}
