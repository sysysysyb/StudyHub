import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import { Mail, Search } from 'lucide-react'
import type { ComponentProps } from 'react'

const inputStyle = cva(
  'w-full focus:ring-primary-500 rounded-lg py-[13px] text-sm ring ring-gray-300 outline-none placeholder:text-gray-400 focus:border-none focus:ring-2',
  {
    variants: {
      isError: {
        true: 'ring-[#fca5a5]',
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

const errorMessageStyle = cva('text-sm', {
  variants: {
    isError: {
      true: 'block text-danger-600',
      false: 'hidden',
    },
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputStyle> {
  label: string
  isRequired?: boolean
  isError?: boolean
  icon?: string | null
}

function Input({
  type = 'text',
  label = '라벨',
  placeholder = '텍스트를 입력하세요',
  isRequired = false,
  isError = false,
  icon,
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
          className={cn(inputStyle({ hasIcon: Boolean(icon) }))}
        />
      </div>
      <span className={cn(errorMessageStyle({ isError: isError }))}>
        올바른 형식으로 입력해주세요
      </span>
    </label>
  )
}

export default Input
