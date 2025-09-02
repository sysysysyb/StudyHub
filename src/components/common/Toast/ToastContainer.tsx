import { useToastStore } from '@/store'
import ToastItem from './ToastItem'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import type { Toast } from '@/types'

function ToastContainer() {
  const [renderedToasts, setRenderedToasts] = useState<Toast[]>([])
  const { toasts } = useToastStore()
  const debouncedToasts = useDebounce(toasts, 200)

  useEffect(() => {
    setRenderedToasts(debouncedToasts)
  }, [debouncedToasts])

  return (
    <div className="fixed top-18 right-1 z-10 w-112 space-y-1">
      {renderedToasts.map(({ id, type, content }) => (
        <ToastItem key={id} id={id} type={type} content={content} />
      ))}
    </div>
  )
}

export default ToastContainer
