import { ChevronDown } from 'lucide-react'
import Input from './Input'

function Dropdown() {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative h-fit">
        <Input className="placeholder:text-gray-500 focus:ring-1 focus:ring-gray-300" />
        <ChevronDown className="absolute inset-y-0 right-2 my-auto h-[14px]" />
      </div>
      <div className="h-36 overflow-auto rounded-lg text-base font-normal ring-1 ring-gray-300">
        <div className="cursor-pointer px-4 py-3 hover:bg-gray-100">옵션1</div>
        <div className="cursor-pointer px-4 py-3 hover:bg-gray-100">옵션2</div>
        <div className="cursor-pointer px-4 py-3 hover:bg-gray-100">옵션3</div>
        <div className="cursor-pointer px-4 py-3 hover:bg-gray-100">옵션4</div>
      </div>
    </div>
  )
}

export default Dropdown
