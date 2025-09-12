export interface AppliedRecruitments {
  next_cursor: string
  results: AppliedRecruitment[]
}

export interface BookmarkedRecruitments {
  next_cursor: string
  results: BookmarkedRecruitment[]
}

export interface ApplicantDetail extends ApplicationBase {
  introduction: string
  motivation: string
  goal: string
  available_time: string
  has_study_experience: StudyExperience
  study_experience_description: string
}

export interface AppliedRecruitment extends Recruitment, ApplicationBase {
  applicant: ApplicantDetail
}

export interface BookmarkedRecruitment extends Recruitment {
  views_count: number
  bookmark_count: number
}

export enum AppliedStatus {
  Waiting = 'waiting',
  Approved = 'approved',
  Rejected = 'rejected',
}

export interface Recruitment extends RecruitmentBase {
  thumbnail_image_url: string
  expected_headcount: number
  lectures: Lecture[]
  tags: Tag[]
  close_at: Date
}

export interface ApplicationBase {
  status: AppliedStatus
  applied_at: Date
}

export interface RecruitmentBase {
  uuid: string
  title: string
}

export type StudyExperience = boolean

export interface Lecture {
  name: string
  instructor: string
}

export interface Tag {
  name: string
}
