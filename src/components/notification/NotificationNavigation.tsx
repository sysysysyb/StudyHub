import { cn } from '@/utils'
import type { ComponentProps } from 'react'
import { useNotificationNavigationItemStore } from '@/store'

export default function NotificationNavigation() {
  const { notificationNavigationItem, setNotificationNavigationItem } =
    useNotificationNavigationItemStore((state) => state)

  return (
    <div className="flex items-center justify-center">
      <NotificationNavigationItem
        isClicked={notificationNavigationItem === 'all'}
        onClick={() => {
          setNotificationNavigationItem('all')
        }}
      >
        전체보기 (6)
      </NotificationNavigationItem>
      <NotificationNavigationItem
        isClicked={notificationNavigationItem === 'unReaded'}
        onClick={() => {
          setNotificationNavigationItem('unReaded')
        }}
      >
        읽지 않음 (3)
      </NotificationNavigationItem>
      <NotificationNavigationItem
        isClicked={notificationNavigationItem === 'readed'}
        onClick={() => {
          setNotificationNavigationItem('readed')
        }}
      >
        읽음 (3)
      </NotificationNavigationItem>
    </div>
  )
}

interface NotificationNavigationItemProps extends ComponentProps<'button'> {
  isClicked: boolean
}

function NotificationNavigationItem({
  children,
  isClicked,
  ...props
}: NotificationNavigationItemProps) {
  return (
    <button
      className={cn(
        'flex-1 cursor-pointer py-3 text-center transition-all',
        isClicked
          ? 'text-primary-600 border-b-primary-500 border-b-2'
          : 'border-0 text-gray-500'
      )}
      {...props}
    >
      {children}
    </button>
  )
}
