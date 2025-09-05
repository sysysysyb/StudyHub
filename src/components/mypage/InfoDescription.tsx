import type { ReactNode } from 'react'

interface InfoDescriptionProps {
  title: string
  detail: string
}

interface InfoDescriptionList {
  infoList: InfoDescriptionProps[]
}

export function InfoDescription({ infoList }: InfoDescriptionList): ReactNode {
  return (
    <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {infoList.map((List, index) => (
        <div key={index}>
          <dt className="pb-2 text-sm text-gray-700">{List.title}</dt>
          <dd className="flex h-12 items-center bg-gray-50 p-4 text-gray-900">
            {List.detail}
          </dd>
        </div>
      ))}
    </dl>
  )
}
