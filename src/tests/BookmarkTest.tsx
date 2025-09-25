import { BookmarkedRecruitmentCard } from '@/components/my-page'
import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import type { Lecture } from '@/types/api-response-types/lecture-response-type'
import type { BookmarkedRecruitment } from '@/types/api-response-types/recruitment-response-types'

const DUMMY_LECTURE: Lecture = {
  title: '프론트엔드 개발자를 위한 React 완벽 가이드',
  instructor: '김개발',
  thumbnail_img_url: 'https://placehold.co/600x400?text=React',
  platform: 'Inflearn',
  difficulty: 'MIDDLE',
  original_price: 99000,
  discount_price: 59400,
  duration_hhmm: '12:30',
  url_link: 'https://www.inflearn.com/course/react-complete-guide',
  lecture_id: 1312312,
}

const DUMMY_RECRUITMENT: BookmarkedRecruitment = {
  uuid: 'lecture-group-1',
  title: '프론트엔드 마스터 클래스',
  thumbnail_image_url: 'https://placehold.co/600x400?text=Frontend',
  expected_headcount: 100,
  lectures: [
    { name: 'React 심화 과정', instructor: '김개발' },
    { name: 'Next.js 활용하기', instructor: '박프론트' },
  ],
  tags: [{ name: 'Frontend' }, { name: 'JavaScript' }, { name: 'React' }],
  close_at: new Date('2025-09-30T23:59:59'),
  views_count: 1523,
  bookmark_count: 320,
}

export default function BookmarkTest() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-heading3">북마크 기능 테스트</h1>
      <p>
        북마크 아이콘을 클릭했을 때 optimistic ui가 적용되어 ui가 즉시 바뀌고
        북마크 변경 요청이 실행됩니다.
      </p>
      <BookmarkedLectureCard lecture={DUMMY_LECTURE} />
      <BookmarkedRecruitmentCard recruitment={DUMMY_RECRUITMENT} />
    </div>
  )
}
