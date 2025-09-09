import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse, ws } from 'msw'
import { chatRoomMessages } from '@/mocks/data/chat-room-messages'

const getChatMessages = http.get<{ study_group_uuid: string }>(
  `${API_BASE_URL}/chat/rooms/:study_group_uuid/messages`,
  () => {
    return HttpResponse.json(chatRoomMessages)
  }
)

const chat = ws.link('ws://example/ws/chat/:study_group_uuid/')

const chatConnection = chat.addEventListener('connection', ({ client }) => {
  console.log('WebSocket client connecting...', client)
})

export const chatHandlers = [getChatMessages, chatConnection]
