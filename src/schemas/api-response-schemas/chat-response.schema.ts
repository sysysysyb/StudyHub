import { z } from 'zod'

// 스키마 정의

const SenderSchema = z.object({
  user_uuid: z.string(),
  nickname: z.string(),
  profile_img_url: z.string(),
})

const MessageSchema = z.object({
  message_id: z.number(),
  sender: SenderSchema,
  content: z.string(),
  created_at: z.coerce.date(),
})

const ChatRoomMessagesSchema = z.object({
  next_cursor: z.string(),
  results: z.array(MessageSchema),
})

const LastMessageSchema = z.object({
  sender_nickname: z.string(),
  content: z.string(),
  created_at: z.coerce.date(),
})

const ChatRoomSchema = z.object({
  study_group_uuid: z.string(),
  study_group_name: z.string(),
  last_message: LastMessageSchema,
  unread_count: z.number(),
})

const ChatSocketEventSchema = z.object({
  type: z.enum(['chat_message', 'user_event']),
})

const ChatMessageEventSchema = ChatSocketEventSchema.extend({
  type: z.literal('chat_message'),
  data: MessageSchema,
})

const ChatUserEventSchema = ChatSocketEventSchema.extend({
  type: z.literal('user_event'),
  data: z.object({
    event: z.enum(['join', 'leave']),
    nickname: z.string(),
  }),
})

// 타입 정의

type Sender = z.infer<typeof SenderSchema>
type Message = z.infer<typeof MessageSchema>
type ChatRoomMessages = z.infer<typeof ChatRoomMessagesSchema>
type LastMessage = z.infer<typeof LastMessageSchema>
type ChatRoom = z.infer<typeof ChatRoomSchema>
type ChatSocketEvent = z.infer<typeof ChatSocketEventSchema>
type ChatMessageEvent = z.infer<typeof ChatMessageEventSchema>
type ChatUserEvent = z.infer<typeof ChatUserEventSchema>

export {
  SenderSchema,
  MessageSchema,
  ChatRoomMessagesSchema,
  LastMessageSchema,
  ChatRoomSchema,
  ChatSocketEventSchema,
  ChatMessageEventSchema,
  ChatUserEventSchema,
}

export type {
  Sender,
  Message,
  ChatRoomMessages,
  LastMessage,
  ChatRoom,
  ChatSocketEvent,
  ChatMessageEvent,
  ChatUserEvent,
}
