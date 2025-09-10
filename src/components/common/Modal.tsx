import { cn } from '@/utils'
import { X } from 'lucide-react'
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type ComponentProps,
  useEffect,
} from 'react'

/* --------------------
   Context
-------------------- */
interface ModalContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

function useModalContext() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('Modal components must be used within <Modal>')
  return ctx
}

/* --------------------
   ModalOpen
-------------------- */
interface ModalTriggerProps extends ComponentProps<'div'> {
  children: ReactNode
}

function ModalTrigger({ children, className, ...props }: ModalTriggerProps) {
  const { toggle } = useModalContext()
  return (
    <div
      onClick={toggle}
      {...props}
      className={cn('hover:cursor-pointer', className)}
    >
      {children}
    </div>
  )
}

/* --------------------
   ModalClose
-------------------- */

interface ModalCloseProps extends ComponentProps<'div'> {
  children: ReactNode
}

function ModalClose({ children, className, ...props }: ModalCloseProps) {
  const { close } = useModalContext()
  return (
    <div
      onClick={close}
      {...props}
      className={cn('hover:cursor-pointer', className)}
    >
      {children}
    </div>
  )
}

/* --------------------
   ModalHeader
-------------------- */
interface ModalHeaderProps extends ComponentProps<'header'> {
  hasCloseButton?: boolean
}

function ModalHeader({
  children,
  className,
  hasCloseButton = true,
  ...props
}: ModalHeaderProps) {
  const { close } = useModalContext()

  return (
    <header
      className={cn(
        'flex items-center justify-between border-b border-gray-200 p-6',
        className
      )}
      {...props}
    >
      {children ? children : <div />}
      {hasCloseButton ? (
        <button onClick={close} className="cursor-pointer text-gray-400">
          <X />
        </button>
      ) : null}
    </header>
  )
}

/* --------------------
   ModalFooter
-------------------- */
function ModalFooter({
  children,
  className,
  ...props
}: ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'flex items-center justify-between border-t border-gray-200 p-6',
        className
      )}
      {...props}
    >
      {children}
    </footer>
  )
}

/* --------------------
   ModalMain
-------------------- */
function ModalMain({ children, className, ...props }: ComponentProps<'main'>) {
  return (
    <main className={cn('p-6', className)} {...props}>
      {children}
    </main>
  )
}

/* --------------------
   ModalTitle
-------------------- */
function ModalTitle({ children, className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-gray-900', 'text-heading5', className)} {...props}>
      {children}
    </h3>
  )
}

/* --------------------
   ModalDescription
-------------------- */
function ModalDescription({
  children,
  className,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span className={cn('text-gray-600', className)} {...props}>
      {children}
    </span>
  )
}

/* --------------------
   Content
-------------------- */

const MODAL_ANIMATION_TIME_MS = 120

interface ModalContentProps extends ComponentProps<'div'> {
  children: ReactNode
  isPositionCenter?: boolean
}

function ModalContent({
  children,
  className,
  isPositionCenter = true,
  ...props
}: ModalContentProps) {
  const { isOpen } = useModalContext()
  const [show, setShow] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      const timer = setTimeout(
        () => setIsAnimating(true),
        MODAL_ANIMATION_TIME_MS
      )
      return () => clearTimeout(timer)
    }
    setIsAnimating(false)
    const timer = setTimeout(() => setShow(false), MODAL_ANIMATION_TIME_MS)
    return () => clearTimeout(timer)
  }, [isOpen])

  if (!show) return null

  return (
    <>
      {/* Modal */}
      <div
        className={cn(
          'fixed z-50 flex min-w-64 transform flex-col rounded-xl bg-white transition-all',
          isPositionCenter
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            : '',
          `duration-[${MODAL_ANIMATION_TIME_MS}]`,
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

function ModalOverlay() {
  const { isOpen, close } = useModalContext()
  const [show, setShow] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      const timer = setTimeout(
        () => setIsAnimating(true),
        MODAL_ANIMATION_TIME_MS
      ) // For animation
      return () => clearTimeout(timer)
    }
    setIsAnimating(false)
    const timer = setTimeout(() => setShow(false), MODAL_ANIMATION_TIME_MS) // Delay unmount for animation
    return () => clearTimeout(timer)
  }, [isOpen])

  // 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC 키 닫기
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  if (!show) return null
  return (
    <div
      className={cn(
        'fixed inset-0 z-40 bg-black/50 transition-opacity',
        `duration-[${MODAL_ANIMATION_TIME_MS}]`,
        isAnimating ? 'opacity-100' : 'opacity-0'
      )}
      onClick={close}
    />
  )
}

/* --------------------
   Wrapper
-------------------- */
interface ModalProps {
  children: ReactNode
  isOverlay?: boolean

  externalModalControl?: ModalContextValue
}

function Modal({
  children,
  externalModalControl,
  isOverlay = true,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = externalModalControl
    ? externalModalControl.open
    : () => setIsOpen(true)

  const close = externalModalControl
    ? externalModalControl.close
    : () => setIsOpen(false)

  const toggle = externalModalControl
    ? externalModalControl.toggle
    : () => setIsOpen((prev) => !prev)

  return (
    <ModalContext.Provider
      value={{
        isOpen: externalModalControl ? externalModalControl.isOpen : isOpen,
        open,
        close,
        toggle,
      }}
    >
      {isOverlay ? <ModalOverlay /> : null}
      <div>{children}</div>
    </ModalContext.Provider>
  )
}

export {
  Modal,
  ModalContent,
  ModalTrigger,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalMain,
  useModalContext,
}
