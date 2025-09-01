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
   1. ModalOpen
-------------------- */
interface ModalTriggerProps extends ComponentProps<'div'> {
  children: ReactNode
}

function ModalTrigger({ children, ...rest }: ModalTriggerProps) {
  const { open } = useModalContext()
  return (
    <div onClick={open} {...rest} className="hover:cursor-pointer">
      {children}
    </div>
  )
}

/* --------------------
   2. ModalClose
-------------------- */

interface ModalCloseProps extends ComponentProps<'div'> {
  children: ReactNode
}

function ModalClose({ children, ...rest }: ModalCloseProps) {
  const { close } = useModalContext()
  return (
    <div onClick={close} {...rest} className="hover:cursor-pointer">
      {children}
    </div>
  )
}

/* --------------------
   3. ModalHeader
-------------------- */
function ModalHeader({
  children,
  className,
  ...props
}: ComponentProps<'header'>) {
  const { close } = useModalContext()

  return (
    <header
      className={cn(
        'flex items-center justify-between border-b border-gray-200 p-6',
        className
      )}
      {...props}
    >
      {children}
      <button onClick={close} className="cursor-pointer text-gray-400">
        <X />
      </button>
    </header>
  )
}

/* --------------------
   4. ModalFooter
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
   5. ModalTitle
-------------------- */
function ModalTitle({ children, className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-gray-900', 'text-heading5', className)} {...props}>
      {children}
    </h3>
  )
}

/* --------------------
   6. ModalDescription
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
   7. Content
-------------------- */
interface ModalContentProps extends ComponentProps<'div'> {
  children: ReactNode
}

function ModalContent({ children, className, ...rest }: ModalContentProps) {
  const { isOpen, close } = useModalContext()
  const [show, setShow] = useState(false)

  // 모달 열릴 때 mount
  useEffect(() => {
    if (isOpen) {
      setShow(true)
    } else {
      // 닫힘 애니메이션 시간만큼 지연 후 언마운트
      const timer = setTimeout(() => setShow(false), 200) // 200ms = transition duration
      return () => clearTimeout(timer)
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
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-200',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={close}
      />

      {/* Modal */}
      <div
        className={cn(
          'fixed top-1/2 left-1/2 z-50 flex min-w-64 -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-lg border-2 bg-white shadow-lg transition-all duration-200',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </>
  )
}

/* --------------------
   8. Wrapper
-------------------- */
interface ModalProps {
  children: ReactNode
}

function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

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

  return (
    <ModalContext.Provider value={{ isOpen, open, close, toggle }}>
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
}
