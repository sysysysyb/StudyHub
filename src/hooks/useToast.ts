import { useToastStore } from '@/store'
import type { Toast } from '@/types'

const TIMEOUT = 3000 as const

function useToast() {
  const { addToast, removeToast } = useToastStore.getState()

  function triggerToast(type: Toast['type'], content: Toast['content']): void
  function triggerToast(
    type: Toast['type'],
    title: Toast['title'],
    content: Toast['content']
  ): void

  function triggerToast(
    a: Toast['type'],
    b: Toast['title'] | Toast['content'],
    c?: Toast['content']
  ) {
    const newToast = {
      id: Date.now(),
      type: a,
      title: c ? (b as Toast['title']) : undefined,
      content: c ? (c as Toast['content']) : (b as Toast['content']),
    }

    addToast(newToast)

    setTimeout(() => {
      removeToast(newToast.id)
    }, TIMEOUT)
  }

  return { triggerToast }
}

export default useToast
