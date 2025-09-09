import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse } from 'msw'
import { chatRoomMessages } from '@/mocks/data/chat-room-messages'

const getChatMessages = http.get<{ study_group_uuid: string }>(
  `${API_BASE_URL}/chat/rooms/:study_group_uuid/messages`,
  () => {
    return HttpResponse.json(chatRoomMessages)
  }
)

export const chatHandlers = [getChatMessages]
