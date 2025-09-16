export interface NotificationList {
  results: Notification[]
  next: string
  previous: string
}

export type notificationType =
  | 'STUDY_JOIN'
  | 'STUDY_NOTE_CREATE'
  | 'STUDY_REVIEW_REQUEST'
  | 'APPLICATION_ACCEPT'
  | 'APPLICATION_REJECT'
  | 'ADD_APPLICATION'
  | 'TODAY_SCHEDULE'
  | 'UPCOMIG_SCHEDULE'

export interface Notification {
  notification_id: number
  user_id: number
  content: string
  type: notificationType
  is_read: boolean
  redirect_url: string
  created_at: Date
}
