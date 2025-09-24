export interface InfoDescription {
  title: string
  detail: string
}

interface InfoDescriptionProps {
  infoList: InfoDescription[]
}

export function UserInfoDescription({ infoList }: InfoDescriptionProps) {
  return (
    <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {infoList.map((list, index) => (
        <div key={index}>
          <dt className="pb-2 text-sm text-gray-700">{list.title}</dt>
          <dd className="flex h-12 items-center bg-gray-50 p-4 text-gray-900">
            {list.detail}
          </dd>
        </div>
      ))}
    </dl>
  )
}
