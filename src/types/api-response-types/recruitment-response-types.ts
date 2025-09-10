export interface AppliedRecruitments {
  next_cursor: string
  results: AppliedRecruitment[]
}

export interface BookmarkedRecruitments {
  next_cursor: string
  results: BookmarkedRecruitment[]
}

export interface AppliedRecruitment extends Recruitment, AppliedStatusProps {
  applied_at: Date
}

export interface BookmarkedRecruitment extends Recruitment {
  views_count: number
  bookmark_count: number
}
export interface AppliedStatusProps {
  status: 'waiting' | 'approved' | 'rejected'
}
export interface Recruitment {
  uuid: string
  title: string
  thumbnail_image_url: string
  expected_headcount: number
  lectures: Lecture[]
  tags: Tag[]
  close_at: Date
}

export interface Lecture {
  name: string
  instructor: string
}

export interface Tag {
  name: string
}
