export interface ChatRoomMessages {
  next_cursor: string
  results: Result[]
}

export interface Result {
  message_id: number
  sender: Sender
  content: string
  created_at: Date
}

export interface Sender {
  user_uuid: string
  nickname: string
  profile_img_url: string
}

export interface ChatRoom {
  study_group_uuid: string
  study_group_name: string
  last_message: LastMessage
  unread_count: number
}

export interface LastMessage {
  sender_nickname: string
  content: string
  created_at: Date
}
