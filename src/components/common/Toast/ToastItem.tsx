import type { Toast } from '@/types'
import { cn } from '@/utils'
import { CircleCheck, X } from 'lucide-react'

const TOAST_COLORS = {
  success: {
    border: 'border-[#BBF7D0]',
    bg: 'bg-[#F0FDF4]',
    icon: 'text-[#4ADE80]',
    title: 'text-success-800',
    content: 'text-[#15803D]',
  },
  warning: {
    border: 'border-primary-200',
    bg: 'bg-primary-50',
    icon: 'text-primary-400',
    title: 'text-primary-800',
    content: 'text-primary-700',
  },
  error: {
    border: 'border-[#fecaca]',
    bg: 'bg-[#fef2f2]',
    icon: 'text-[#f87171]',
    title: 'text-danger-800',
    content: 'text-[#b91c1c]',
  },
}

const TOAST_TITLE = {
  success: '성공적으로 저장되었습니다',
  warning: '주의가 필요합니다',
  error: '오류가 발생했습니다',
}

function ToastItem({ type, content = '' }: Toast) {
  const styles = TOAST_COLORS[type]
  const title = TOAST_TITLE[type]

  return (
    <div
      className={cn(
        'flex w-112 justify-between gap-3 rounded-lg border border-solid p-[17px]',
        styles.border,
        styles.bg
      )}
    >
      <CircleCheck
        className={cn('relative bottom-[1.75px] w-[18px]', styles.icon)}
      />
      <div className="flex-1 text-sm">
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{content}</p>
      </div>
      <X
        className={cn(
          'relative bottom-[1.75px] w-[18px] cursor-pointer',
          styles.icon
        )}
      />
    </div>
  )
}

export default ToastItem
