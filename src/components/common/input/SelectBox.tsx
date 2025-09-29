import { InputBase } from '@/constants/input-variants'
import { cn } from '@/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface CustomSelectBoxProps {
  defaultLabel: string
  options: { label: string; value: string }[]
}

export default function CustomSelectBox({
  defaultLabel,
  options,
}: CustomSelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string | null>(null)

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
              onClick={() => {
                setValue(option.value)
                setIsOpen(false)
              }}
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
