import { API_BASE_URL } from '@/constants/url-constants'
import type { ChatRoomMessages } from '@/schemas/api-response-schemas/chat-response.schema'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useChatMessages(
  chatroomId: string,
  options?: UseQueryOptions<ChatRoomMessages>
) {
  return useQuery<ChatRoomMessages>({
    queryKey: ['chat-messages', chatroomId],
    queryFn: async () => {
      const res = await api.get(
        `${API_BASE_URL}/chat/rooms/${chatroomId}/messages`
      )

      return res.data
    },
    ...options,
  })
}
