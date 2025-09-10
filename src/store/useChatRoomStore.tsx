import { create } from 'zustand'

interface ChatRoomStore {
  chatRoomId: string
  setChatRoomId: (newChatRoomId: string) => void
  openChatRoom: (() => void) | null
  setOpenChatRoom: (openFunction: () => void) => void
}

export const useChatRoomStore = create<ChatRoomStore>((set) => ({
  chatRoomId: '',
  openChatRoom: null,

  setChatRoomId: (newChatRoomId) => set(() => ({ chatRoomId: newChatRoomId })),

  setOpenChatRoom: (openFunction) =>
    set(() => ({ openChatRoom: openFunction })),
}))
