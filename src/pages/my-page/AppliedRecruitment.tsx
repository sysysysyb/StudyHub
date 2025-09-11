import { ListItemSkeleton } from '@/components'
import { AppliedRecruitmentCard } from '@/components/my-page'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { useAppliedRecruitment } from '@/hooks/api'

export const AppliedRecruitment = () => {
  const { data, isPending } = useAppliedRecruitment()

  return (
    <main>
      <header className="gap-2 pb-6">
        <h3 className="text-heading3">지원 내역</h3>
        <span className="text-secondary">
          내가 지원한 스터디 구인 공고들을 확인하세요
        </span>
      </header>

      <section className="flex flex-col gap-4">
        {isPending ? (
          [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
        ) : data && data.results.length > 0 ? (
          data.results.map((recruitment) => (
            <AppliedRecruitmentCard
              key={recruitment.uuid}
              recruitment={recruitment}
            />
          ))
        ) : (
          <EmptyDataState />
        )}
      </section>
    </main>
  )
}
