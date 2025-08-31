import { cva } from 'class-variance-authority'
import { Mail, Search } from 'lucide-react'

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

function Input({ icon, isRequired }) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex gap-1 text-sm font-medium">
        <span className="color-gray-700">이름</span>
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
          type="text"
          placeholder="이름을 입력하세요"
          className={inputStyle({ hasIcon: Boolean(icon) })}
        />
      </div>
    </label>
  )
}

export default Input
