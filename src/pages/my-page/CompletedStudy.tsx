import { CompletedStudyImageCard } from '@/components/my-page'
import { completedStudyMock } from '@/mocks/data/completed-study-data'

export const CompletedStudy = () => {
  return (
    <main>
      <header className="gap-2 pb-6">
        <h3 className="text-heading3">완료된 스터디</h3>
        <span className="text-secondary">
          종료된 스터디 그룹에 대한 리뷰를 작성해보세요
        </span>
      </header>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {completedStudyMock.map((data, index) => (
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
