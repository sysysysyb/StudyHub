import {
  BookmarkedContent,
  BookmarkedLecture,
  BookmarkedRecruitment,
} from '@/components/my-page/bookmarked-pages'
import { MD_WIDTH_PIXEL } from '@/constants/break-points'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useParams } from 'react-router'

export default function Bookmark() {
  const windowWidth = useWindowWidth()
  const { content } = useParams()

  if (windowWidth < MD_WIDTH_PIXEL) {
    const option =
      content === 'recruitment'
        ? 'recruitment'
        : content === 'lecture'
          ? 'lecture'
          : 'entire'

    return <BookmarkedContent initialOption={option} />
  } else {
    if (content === 'recruitment') {
      return <BookmarkedRecruitment />
    } else {
      return <BookmarkedLecture />
    }
  }
}
