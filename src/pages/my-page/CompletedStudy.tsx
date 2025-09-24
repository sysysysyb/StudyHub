import { ImageCardSkeleton, EmptyDataState } from '@/components'
import { useCompletedStudy } from '@/hooks/api'
import { CompletedStudyImageCard } from '@/components/my-page'

export const CompletedStudy = () => {
  const { data, isPending } = useCompletedStudy()
  if (!isPending && !data) return <EmptyDataState />
  return (
    <main>
      <header className="gap-2 pb-6">
        <h3 className="text-heading3">완료된 스터디</h3>
        <span className="text-secondary">
          종료된 스터디 그룹에 대한 리뷰를 작성해보세요
        </span>
      </header>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {isPending
          ? [...Array(4)].map((_, i) => <ImageCardSkeleton key={i} />)
          : data.map((card) => (
              <CompletedStudyImageCard key={card.title} completedStudy={card} />
            ))}
      </section>
    </main>
  )
}
