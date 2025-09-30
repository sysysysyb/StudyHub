import { InputBase } from '@/constants/input-variants'
import { cn } from '@/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface CustomSelectBoxProps {
  defaultLabel: string
  options: { label: string; value: string }[]
  value?: string | null // 현재 선택된 값
  onChange?: (value: string) => void // 선택 시 부모에 전달
}

export default function CustomSelectBox({
  defaultLabel,
  options,
  value: propValue,
  onChange,
}: CustomSelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string | null>(null)

  const value = propValue ?? internalValue

  const handleSelect = (val: string) => {
    setInternalValue(val) // 내부 상태 업데이트
    onChange?.(val) // 부모 상태 전달
    setIsOpen(false)
  }

  return (
    <div className="relative w-full">
      <button
        type="button"
        className={cn(
          InputBase,
          'flex items-center justify-between px-3 text-gray-800'
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value ? options.find((o) => o.value === value)?.label : defaultLabel}
        <ChevronDown className="text-gray-400" size={20} />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full rounded border bg-white shadow">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="cursor-pointer px-3 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
