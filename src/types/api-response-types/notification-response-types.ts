export interface NotificationList {
  results: Notification[]
  page: number
  size: number
  total: number
  has_next: boolean
  sort: string
}

export type notificationType =
  | 'STUDY_JOIN'
  | 'STUDY_EXIT'
  | 'APPLICATION_ACCEPT'
  | 'APPLICATION_REJECT'
  | 'ADD_APPLICATION'
  | 'NEW_CHAT_MESSAGE'

export interface Notification {
  notification_id: number
  content: string
  type: notificationType
  is_read: boolean
  redirect_url: string
  created_at: Date
}
