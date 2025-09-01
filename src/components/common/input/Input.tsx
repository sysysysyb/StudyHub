import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import { Mail, Search } from 'lucide-react'
import type { ComponentProps } from 'react'

const inputVariants = cva(
  'w-full focus:ring-primary-500 rounded-lg py-[13px] text-sm ring ring-gray-300 outline-none placeholder:text-gray-400 focus:border-none focus:ring-2',
  {
    variants: {
      isError: {
        true: 'ring-danger-100',
        false:
          'ring-gray-300 focus:ring-primary-500 focus:border-none focus:ring-2',
      },
      hasIcon: {
        true: 'pl-10 pr-[17px]',
        false: 'px-[17px]',
      },
    },
  }
)

const errorMessageVariants = cva('text-sm', {
  variants: {
    isError: {
      true: 'block text-danger-600',
      false: 'hidden',
    },
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {
  label?: string
  isRequired?: boolean
  isError?: boolean
  errorMessage?: string
  icon?: 'search' | 'email'
}

function Input({
  type = 'text',
  label,
  placeholder = '텍스트를 입력하세요',
  isRequired = false,
  isError = false,
  errorMessage = '올바른 형식으로 입력해주세요',
  icon,
  className,
  ...props
}: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex gap-1 text-sm font-medium">
        <span className="color-gray-700">{label}</span>
        {isRequired && <span className="text-danger-500">*</span>}
      </div>

      <div className="relative">
        {icon === 'search' && (
          <Search className="absolute inset-y-0 left-2 my-auto h-4 text-gray-400" />
        )}
        {icon === 'email' && (
          <Mail className="absolute inset-y-0 left-2 my-auto h-4 text-gray-400" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            inputVariants({ isError: isError, hasIcon: Boolean(icon) }),
            className
          )}
          {...props}
        />
      </div>
      <span className={cn(errorMessageVariants({ isError: isError }))}>
        {errorMessage}
      </span>
    </label>
  )
}

export default Input
