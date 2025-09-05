import { create } from 'zustand'

type notificationNavigationItemType = 'all' | 'unReaded' | 'readed'

interface NotificationNavigationItemStore {
  notificationNavigationItem: notificationNavigationItemType
  setNotificationNavigationItem: (
    newItem: notificationNavigationItemType
  ) => void
}

export const useNotificationNavigationItemStore =
  create<NotificationNavigationItemStore>((set) => ({
    notificationNavigationItem: 'all',
    setNotificationNavigationItem: (newItem) =>
      set(() => ({
        notificationNavigationItem: newItem,
      })),
  }))
