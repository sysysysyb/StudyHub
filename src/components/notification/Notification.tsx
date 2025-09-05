import { Bell as BellIcon } from 'lucide-react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalMain,
  ModalTitle,
  ModalTrigger,
} from '@/components/common/Modal'
import { useState, type ComponentProps } from 'react'
import { cn } from '@/utils'

export default function Notification() {
  const [category, setCategory] = useState<'all' | 'unReaded' | 'readed'>('all')

  return (
    <div className="relative">
      <Modal isOverlay={false}>
        <ModalTrigger>
          <BellIcon className="h-5 text-gray-600" />
        </ModalTrigger>
        <ModalContent
          isPositionCenter={false}
          className="absolute top-10 right-0 h-[475px] w-96 overflow-hidden rounded-lg border border-gray-200 shadow"
        >
          <ModalHeader className="p-4" hasCloseButton={false}>
            <ModalTitle>알림</ModalTitle>
            <button className="text-primary-600 cursor-pointer">
              모두 읽음
            </button>
          </ModalHeader>
          <ModalMain className="p-0">
            <div className="flex items-center justify-center">
              <NotificationNavigationItem
                isClicked={category === 'all'}
                onClick={() => {
                  setCategory('all')
                }}
              >
                전체보기 (6)
              </NotificationNavigationItem>
              <NotificationNavigationItem
                isClicked={category === 'unReaded'}
                onClick={() => {
                  setCategory('unReaded')
                }}
              >
                읽지 않음 (3)
              </NotificationNavigationItem>
              <NotificationNavigationItem
                isClicked={category === 'readed'}
                onClick={() => {
                  setCategory('readed')
                }}
              >
                읽음 (3)
              </NotificationNavigationItem>
            </div>
          </ModalMain>
        </ModalContent>
      </Modal>
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
