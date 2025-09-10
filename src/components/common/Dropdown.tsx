import { ChevronDown, type LucideIcon } from 'lucide-react'
import { useState, type ComponentProps } from 'react'
import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Input } from '@/components/common/input'

const dropdownItemVariants = cva(
  'text-left w-full relative cursor-pointer px-4 py-3 text-base hover:bg-gray-100',
  {
    variants: {
      hasIcon: {
        true: 'pl-10 pr-[17px]',
        false: 'px-[17px]',
      },
    },
  }
)

interface DropdownItemProps
  extends ComponentProps<'button'>,
    VariantProps<typeof dropdownItemVariants> {
  label: string
  icon?: LucideIcon
}

interface DropdownProps {
  options?: DropdownItemProps[]
  value: string
  onSelect: (value: string) => void
  placeholder?: string
}

function DropdownItem({ label, icon, className, ...props }: DropdownItemProps) {
  const Icon = icon

  return (
    <button
      className={cn(
        dropdownItemVariants({ hasIcon: Boolean(icon) }),
        className
      )}
      {...props}
    >
      {label}
      {Icon && <Icon className="absolute inset-y-0 left-2 my-auto h-4" />}
    </button>
  )
}

function DropdownEmptyItem() {
  return (
    <div className="bg-gray-50 px-4 py-3 text-sm text-gray-300">옵션 없음</div>
  )
}

function Dropdown({
  options,
  value = '',
  onSelect,
  placeholder = '옵션을 선택하세요',
}: DropdownProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const handleClickOption = (label: string) => {
    onSelect(label)
    setIsOptionsOpen(false)
  }

  return (
    <div className="relative">
      <div className="relative h-fit">
        <Input
          className="cursor-pointer placeholder:text-gray-500 focus:ring-1 focus:ring-gray-300"
          value={value}
          placeholder={placeholder}
          onClick={() => setIsOptionsOpen((prev) => !prev)}
          readOnly
        />
        <ChevronDown className="absolute inset-y-0 right-2 my-auto h-[14px]" />
      </div>
      {isOptionsOpen && (
        <div className="animate-fade-in-translateY scrollbar-custom absolute top-13 z-10 flex max-h-36 w-full flex-col overflow-auto rounded-lg bg-white font-normal ring-1 ring-gray-300">
          {options ? (
            options.map((option, idx) => (
              <DropdownItem
                key={idx}
                label={option.label}
                icon={option.icon}
                onClick={() => handleClickOption(option.label)}
              />
            ))
          ) : (
            <DropdownEmptyItem />
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown
