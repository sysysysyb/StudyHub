import Badge from '@/components/common/Badge'
import type { Difficulty } from '@/types/api-response-types/lecture-response-type'

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

const difficultyMap: Record<Difficulty, 'success' | 'primary' | 'danger'> = {
  EASY: 'success',
  MIDDLE: 'primary',
  HARD: 'danger',
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  return (
    <Badge
      className="rounded px-2 py-1 font-medium"
      variant={difficultyMap[difficulty]}
    >
      {difficulty === 'EASY'
        ? '초급'
        : difficulty === 'MIDDLE'
          ? '중급'
          : '고급'}
    </Badge>
  )
}
