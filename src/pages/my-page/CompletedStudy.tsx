import { CompletedStudyImageCard } from '@/components/my-page'

export const CompletedStudy = () => {
  const exampleData = [
    {
      imageUrl: 'https://picsum.photos/seed/react/400/250',
      title: 'React 심화 스터디',
      period: '2025.01 - 2025.03',
      endDate: '2025-03-15',
      participants: 5,
      isReviewed: true,
      rating: 4.6,
      comment: 'React Hooks와 상태 관리에 대해 깊이 배울 수 있었습니다.',
    },
    {
      imageUrl: 'https://picsum.photos/seed/nextjs/400/250',
      title: 'Next.js 프로젝트 스터디',
      period: '2025.04 - 2025.06',
      endDate: '2025-06-20',
      participants: 6,
      isReviewed: false,
      rating: 0,
      comment: '',
    },
    {
      imageUrl: 'https://picsum.photos/seed/algorithm/400/250',
      title: '알고리즘 문제풀이 스터디',
      period: '2025.07 - 2025.08',
      endDate: '2025-08-30',
      participants: 4,
      isReviewed: true,
      rating: 4.1,
      comment: '꾸준히 문제를 풀면서 코딩 실력이 확실히 늘었습니다.',
    },
    {
      imageUrl: 'https://picsum.photos/seed/design/400/250',
      title: 'UI/UX 디자인 스터디',
      period: '2025.09 - 2025.10',
      endDate: '2025-10-25',
      participants: 8,
      isReviewed: true,
      rating: 3.7,
      comment: '피그마 활용 능력이 크게 향상되었습니다.',
    },
  ]

  return (
    <main>
      <header className="gap-2 pb-6">
        <h3 className="text-heading3">완료된 스터디</h3>
        <span className="text-secondary">
          종료된 스터디 그룹에 대한 리뷰를 작성해보세요
        </span>
      </header>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {exampleData.map((data, index) => (
          <CompletedStudyImageCard
            key={index}
            imageUrl={data.imageUrl}
            title={data.title}
            period={data.period}
            endDate={new Date(data.endDate)}
            participants={data.participants}
            isReviewed={data.isReviewed}
            rating={data.rating}
            comment={data.comment}
          />
        ))}
      </section>
    </main>
  )
}
