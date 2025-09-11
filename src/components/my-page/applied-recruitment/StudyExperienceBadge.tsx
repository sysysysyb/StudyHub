import Badge from '@/components/common/Badge'

export function StudyExperienceBadge(hasStudyExperience: boolean = false) {
  return hasStudyExperience ? (
    <Badge variant="success">경험 있음</Badge>
  ) : (
    <Badge variant="primary">경험 없음</Badge>
  )
}
