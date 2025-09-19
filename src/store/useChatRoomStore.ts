import { create } from 'zustand'

interface ChatRoomStore {
  chatRoomId: string
  isOpen: boolean

  setChatRoomId: (newChatRoomId: string) => void
  openChatRoom: () => void
  closeChatRoom: () => void
  toggleChatRoom: () => void
}

export const useChatRoomStore = create<ChatRoomStore>((set) => ({
  chatRoomId: '',
  isOpen: false,

  openChatRoom: () => set(() => ({ isOpen: true })),
  closeChatRoom: () => set(() => ({ isOpen: false })),
  toggleChatRoom: () => set((state) => ({ isOpen: !state.isOpen })),
  setChatRoomId: (newChatRoomId) => set(() => ({ chatRoomId: newChatRoomId })),
}))
