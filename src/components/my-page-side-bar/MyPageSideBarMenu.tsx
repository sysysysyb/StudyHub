import { Card, CardContent, CardTitle } from '@/components/common/Card/Card'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router'

interface MyPageSideBarMenuProps {
  title: string
  description: string
  icon: LucideIcon
  url: string
}

export default function MyPageSideBarMenu({
  title,
  description,
  icon: Icon,
  url,
}: MyPageSideBarMenuProps) {
  return (
    <Link to={url} className="w-full">
      <Card
        variant={'flat'}
        className="hover:text-primary-800 hover:bg-primary-100 flex w-full cursor-pointer items-center justify-start space-x-3 px-4 py-3 text-gray-700 transition-colors"
      >
        <Icon />
        <div className="flex flex-col">
          <CardTitle className="font-medium">{title}</CardTitle>
          <CardContent className="text-gray-500">{description}</CardContent>
        </div>
      </Card>
    </Link>
  )
}
