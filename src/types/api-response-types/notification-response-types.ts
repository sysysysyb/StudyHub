export interface NotificationList {
  results: Notification[]
  page: number
  size: number
  total: number
  has_next: boolean
  sort: string
}

export interface Notification {
  notification_id: number
  content: string
  type: string
  is_read: boolean
  redirect_url: string
  created_at: Date
}
