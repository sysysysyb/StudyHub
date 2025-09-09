import { API_BASE_URL } from '@/constants/api-constants'
import type { ChatRoomMessages } from '@/types/api-response-types/chat-response-types'
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
