export interface BookmarkedRecruitments {
  next_cursor: string
  results: Recruitment[]
}

export interface Recruitment {
  uuid: string
  title: string
  thumbnail_image_url: string
  expected_headcount: number
  lectures: Lecture[]
  tags: Tag[]
  close_at: Date
  views_count: number
  bookmark_count: number
}

export interface Lecture {
  name: string
  instructor: string
}

export interface Tag {
  name: string
}
