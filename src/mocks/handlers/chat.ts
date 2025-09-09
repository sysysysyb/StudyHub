import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse, ws } from 'msw'
import { chatRoomMessages } from '@/mocks/data/chat-room-messages'

const getChatMessages = http.get<{ study_group_uuid: string }>(
  `${API_BASE_URL}/chat/rooms/:study_group_uuid/messages`,
  () => {
    return HttpResponse.json(chatRoomMessages)
  }
)

const chat = ws.link('ws://example/ws/chat/')

const chatConnection = chat.addEventListener('connection', ({ client }) => {
  console.log('WebSocket client connecting...', client)

  // 3초마다 랜덤 메시지 전송
  const intervalId = setInterval(() => {
    // chatRoomMessages.results에서 랜덤 메시지 선택
    const randomIndex = Math.floor(
      Math.random() * chatRoomMessages.results.length
    )
    const randomMessage = chatRoomMessages.results[randomIndex]

    client.send(
      JSON.stringify({
        type: 'chat_message',
        data: randomMessage,
      })
    )
  }, 5000)

  // 클라이언트가 연결을 끊으면 interval 제거
  client.addEventListener('close', () => {
    clearInterval(intervalId)
    console.log('WebSocket client disconnected', client)
  })
})

export const chatHandlers = [getChatMessages, chatConnection]
