import type { AppliedRecruitments } from '@/types/api-response-types/recruitment-response-types'

export const appliedRecruitmentsMock: AppliedRecruitments = {
  next_cursor: 'cursor_123',
  results: [
    {
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
      applied_at: new Date('2025-09-30T23:59:59'),
      status: 'waiting',
    },
    {
      uuid: 'lecture-group-2',
      title: '백엔드 실전 프로젝트',
      thumbnail_image_url: 'https://placehold.co/600x400?text=Backend',
      expected_headcount: 80,
      lectures: [
        { name: 'Node.js API 서버 구축', instructor: '이백엔드' },
        { name: '데이터베이스 최적화', instructor: '최DB' },
      ],
      tags: [{ name: 'Backend' }, { name: 'Node.js' }, { name: 'Database' }],
      close_at: new Date('2025-10-10T23:59:59'),
      applied_at: new Date('2025-09-30T23:59:59'),
      status: 'approved',
    },

    {
      uuid: 'lecture-group-3',
      title: 'AI & 머신러닝 기초',
      thumbnail_image_url: 'https://placehold.co/600x400?text=AI',
      expected_headcount: 120,
      lectures: [
        { name: '머신러닝 개론', instructor: '정AI' },
        { name: '딥러닝 입문', instructor: '최DL' },
      ],
      tags: [{ name: 'AI' }, { name: 'Machine Learning' }, { name: 'Python' }],
      close_at: new Date('2025-11-01T23:59:59'),
      applied_at: new Date('2025-09-30T23:59:59'),
      status: 'rejected',
    },
    {
      uuid: 'lecture-group-4',
      title: '클라우드 & DevOps 워크숍',
      thumbnail_image_url: 'https://placehold.co/600x400?text=Cloud',
      expected_headcount: 60,
      lectures: [
        { name: 'AWS 활용하기', instructor: '박클라우드' },
        { name: 'CI/CD 구축', instructor: '오DevOps' },
      ],
      tags: [{ name: 'Cloud' }, { name: 'DevOps' }, { name: 'AWS' }],
      close_at: new Date('2025-09-25T23:59:59'),
      applied_at: new Date('2025-09-30T23:59:59'),
      status: 'rejected',
    },

    {
      uuid: 'lecture-group-5',
      title: 'UI/UX 디자인 트렌드',
      thumbnail_image_url: 'https://placehold.co/600x400?text=UIUX',
      expected_headcount: 150,
      lectures: [
        { name: '사용자 경험 설계', instructor: '한디자이너' },
        { name: '디자인 시스템 만들기', instructor: '윤UX' },
      ],
      tags: [{ name: 'UI/UX' }, { name: 'Design' }, { name: 'Figma' }],
      close_at: new Date('2025-12-15T23:59:59'),
      applied_at: new Date('2025-09-30T23:59:59'),
      status: 'rejected',
    },
  ],
}
