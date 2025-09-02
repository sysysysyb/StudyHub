import { CircleCheck, X } from 'lucide-react'

function Toast() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex max-w-112 justify-between gap-3 rounded-lg border border-solid border-[#BBF7D0] bg-[#F0FDF4] p-[17px]">
        <CircleCheck className="relative bottom-[1.75px] w-[18px] text-[#4ADE80]" />
        <div className="flex-1 text-sm">
          <h4 className="text-success-800">Toast 메시지 제목</h4>
          <p className="text-[#15803D]">Toast 메시지 내용</p>
        </div>
        <X className="relative bottom-[1.75px] w-[18px] text-[#4ADE80]" />
      </div>
      <div className="border-primary-200 bg-primary-50 flex max-w-112 justify-between gap-3 rounded-lg border border-solid p-[17px]">
        <CircleCheck className="text-primary-400 relative bottom-[1.75px] w-[18px]" />
        <div className="flex-1 text-sm">
          <h4 className="text-primary-800">Toast 메시지 제목</h4>
          <p className="text-primary-700">Toast 메시지 내용</p>
        </div>
        <X className="text-primary-400 relative bottom-[1.75px] w-[18px]" />
      </div>
      <div className="flex max-w-112 justify-between gap-3 rounded-lg border border-solid border-[#fecaca] bg-[#fef2f2] p-[17px]">
        <CircleCheck className="relative bottom-[1.75px] w-[18px] text-[#f87171]" />
        <div className="flex-1 text-sm">
          <h4 className="text-danger-800">Toast 메시지 제목</h4>
          <p className="text-[#b91c1c]">Toast 메시지 내용</p>
        </div>
        <X className="relative bottom-[1.75px] w-[18px] text-[#f87171]" />
      </div>
    </div>
  )
}

export default Toast
