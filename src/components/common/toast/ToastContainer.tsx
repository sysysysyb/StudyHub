import { useToastStore } from '@/store'
import ToastItem from './ToastItem'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import type { Toast } from '@/types'
import { useWindowWidth } from '@/hooks'

const TOAST_DEBOUNCE_DELAY = 200
const TOAST_MOBILE_WINDOW_WIDTH = 450
const TOAST_MOBILE_PADDING = 8

function ToastContainer() {
  const [renderedToasts, setRenderedToasts] = useState<Toast[]>([])
  const { toasts } = useToastStore()
  const debouncedToasts = useDebounce(toasts, TOAST_DEBOUNCE_DELAY)
  const windowWidth = useWindowWidth()
  const mobileToastContainerWidth = windowWidth - TOAST_MOBILE_PADDING

  useEffect(() => {
    setRenderedToasts(debouncedToasts)
  }, [debouncedToasts])

  return (
    <div
      className="fixed top-18 right-1 z-100 space-y-1"
      style={{
        width:
          windowWidth < TOAST_MOBILE_WINDOW_WIDTH
            ? mobileToastContainerWidth
            : '448px',
      }}
    >
      {renderedToasts.map(({ id, type, title, content }) => (
        <ToastItem
          key={id}
          id={id}
          type={type}
          title={title}
          content={content}
        />
      ))}
    </div>
  )
}

export default ToastContainer
