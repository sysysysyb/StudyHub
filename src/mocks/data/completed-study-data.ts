import type { CompletedStudy } from '@/types/api-response-types/completed-study-type'

export const completedStudyMock: CompletedStudy[] = [
  // 추후 Post API를 위해 null 타입 삭제.
  {
    imageUrl: 'https://picsum.photos/seed/react/400/250',
    title: 'React 심화 스터디',
    period: '3개월',
    endDate: new Date('2025-03-15'),
    participants: 5,
    isReviewed: true,
    rating: 4.6,
    comment: 'React Hooks와 상태 관리에 대해 깊이 배울 수 있었습니다.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/nextjs/400/250',
    title: 'Next.js 프로젝트 스터디',
    period: '3개월',
    endDate: new Date('2025-06-20'),
    participants: 6,
    isReviewed: false,
    rating: 0,
    comment: '',
  },
  {
    imageUrl: 'https://picsum.photos/seed/algorithm/400/250',
    title: '알고리즘 문제풀이 스터디',
    period: '2개월',
    endDate: new Date('2025-08-30'),
    participants: 4,
    isReviewed: true,
    rating: 4.1,
    comment: '꾸준히 문제를 풀면서 코딩 실력이 확실히 늘었습니다.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/design/400/250',
    title: 'UI/UX 디자인 스터디',
    period: '2개월',
    endDate: new Date('2025-10-25'),
    participants: 8,
    isReviewed: true,
    rating: 3.7,
    comment: '피그마 활용 능력이 크게 향상되었습니다.',
  },
]
