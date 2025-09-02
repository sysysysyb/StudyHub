import { useToastStore } from '@/store/useToastStore'
import type { Toast } from '@/types/Toast'

const TIMEOUT = 3000

function useToast() {
  const { addToast, removeToast } = useToastStore()

  const triggerToast = (type: Toast['type'], content: Toast['content']) => {
    const newToast = { id: Date.now(), type: type, content: content }

    addToast(newToast)

    setTimeout(() => {
      removeToast(newToast.id)
    }, TIMEOUT)
  }

  return { triggerToast }
}

export default useToast
