export type Platform = 'Inflearn'
export type Difficulty = 'EASY' | 'MIDDLE' | 'HARD'

export interface BookmarkedLectures {
  next_cursor: string | null
  previous_cursor: string | null
  results: Lecture[]
}

export interface Lecture {
  title: string
  instructor: string
  thumbnail_img_url: string
  platform: Platform
  difficulty: Difficulty
  original_price: number
  discount_price: number
  duration_hhmm: string
  url_link: string
}
