function Input() {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex gap-1 text-sm font-medium">
        <span className="color-gray-700">이름</span>
        <span className="text-danger-500">*</span>
      </div>

      <input
        type="text"
        placeholder="이름을 입력하세요"
        className="focus:ring-primary-500 rounded-lg p-1 px-[17px] py-[13px] text-sm ring ring-gray-300 outline-none placeholder:text-gray-400 focus:border-none focus:ring-2"
      />
    </label>
  )
}

export default Input
