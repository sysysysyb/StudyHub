import { ChevronDown } from 'lucide-react'
import Input from './Input'
import { useState } from 'react'

function DropdownItem({ option }) {
  return (
    <div className="cursor-pointer px-4 py-3 text-base hover:bg-gray-100">
      {option}
    </div>
  )
}

function DropdownEmptyItem() {
  return (
    <div className="bg-gray-50 px-4 py-3 text-sm text-gray-300">옵션 없음</div>
  )
}

function Dropdown({ options = [] }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  return (
    <div className="relative">
      <div className="relative h-fit">
        <Input
          className="cursor-pointer placeholder:text-gray-500 focus:ring-1 focus:ring-gray-300"
          onClick={() => setIsOptionsOpen((prev) => !prev)}
          readOnly
        />
        <ChevronDown className="absolute inset-y-0 right-2 my-auto h-[14px]" />
      </div>
      {isOptionsOpen && (
        <div className="absolute top-13 z-10 max-h-36 w-full overflow-auto rounded-lg bg-white font-normal ring-1 ring-gray-300">
          {options.length > 0 ? (
            options.map((option, idx) => (
              <DropdownItem key={idx} option={option} />
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
