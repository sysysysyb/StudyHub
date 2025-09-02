import ToastItem from './ToastItem'

function ToastContainer() {
  return (
    <div className="fixed top-18 right-2 z-10 space-y-1">
      <ToastItem type="success" />
      <ToastItem type="warning" />
      <ToastItem type="error" />
    </div>
  )
}

export default ToastContainer
