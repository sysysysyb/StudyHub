import { create } from 'zustand'
import { getChatRoomWebSocketUrl } from '@/utils'
import {
  ChatSocketEventUnionSchema,
  type Message,
} from '@/schemas/api-response-schemas/chat-response.schema'

interface ChatRoomStore {
  chatRoomId: string
  isOpen: boolean
  webSocket: WebSocket | null
  messages: Message[]

  setChatRoomId: (newChatRoomId: string) => void
  openChatRoom: () => void
  closeChatRoom: () => void
  toggleChatRoom: () => void
  connect: (chatRoomId: string) => void
  disconnect: () => void
  sendMessage: (message: string) => void
  setMessages: (messages: Message[]) => void
}

export const useChatRoomStore = create<ChatRoomStore>((set, get) => ({
  chatRoomId: '',
  isOpen: false,
  webSocket: null,
  messages: [],

  openChatRoom: () => set(() => ({ isOpen: true })),
  closeChatRoom: () => set(() => ({ isOpen: false })),
  toggleChatRoom: () => set((state) => ({ isOpen: !state.isOpen })),
  setChatRoomId: (newChatRoomId) => set(() => ({ chatRoomId: newChatRoomId })),
  setMessages: (messages) => set(() => ({ messages })),

  disconnect: () => {
    const { webSocket } = get()
    if (webSocket) {
      webSocket.close()
      set(() => ({ webSocket: null }))
    }
  },

  connect: (chatRoomId) => {
    const chatRoomURL = getChatRoomWebSocketUrl(chatRoomId, true)
    if (!chatRoomURL) return

    const newWebSocket = new WebSocket(chatRoomURL)

    newWebSocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        const result = ChatSocketEventUnionSchema.parse(data)

        if (result.type === 'chat_message') {
          set((state) => ({ messages: [...state.messages, result.data] }))
        }
      } catch (error) {
        alert('웹소켓 에러' + error)
      }
    }

    set(() => ({ webSocket: newWebSocket }))
  },

  sendMessage: (message) => {
    const { webSocket } = get()
    if (webSocket && message.trim() !== '') {
      const data = {
        type: 'send_message',
        data: { content: message },
      }
      webSocket.send(JSON.stringify(data))
    }
  },
}))
