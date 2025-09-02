import { useToastStore } from '@/store'
import ToastItem from './ToastItem'

function ToastContainer() {
  const { toasts } = useToastStore()

  return (
    <div className="fixed top-18 right-2 z-10 space-y-1">
      {toasts.map(({ id, type, content }) => (
        <ToastItem key={id} type={type} content={content} />
      ))}
    </div>
  )
}

export default ToastContainer
