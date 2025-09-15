export interface AppliedRecruitments {
  next_cursor: string
  results: AppliedRecruitment[]
}

export interface BookmarkedRecruitments {
  next_cursor: string
  results: BookmarkedRecruitment[]
}

export interface ApplicationDetail extends ApplicationBase, RecruitmentBase {
  self_introduction: string
  motivation: string
  objective: string
  available_time: string
  has_study_experience: boolean
  study_experience: string
}

export interface AppliedRecruitment extends Recruitment, ApplicationBase {}

export interface BookmarkedRecruitment extends Recruitment {
  views_count: number
  bookmark_count: number
}
//지원내역 목록과 지원 상세정보에 동시 사용을 위해 분리선언.
export interface ApplicationBase {
  status: AppliedStatus
  applied_at: Date
}

// 지원상태의 선택지를 제한하여 정의하는 Enum 타입선언 (멘토링 )
// API 명세서 확인 후 변수명 전체 대문자로 수정.
export enum AppliedStatus {
  PENDING = 'pending',
  CANCELED = 'canceled',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export interface Recruitment extends RecruitmentBase {
  thumbnail_image_url: string
  expected_headcount: number
  lectures: Lecture[]
  tags: Tag[]
  close_at: Date
}
// 지원상세정보 모달에 타입 전달을 위해 분리선언.
export interface RecruitmentBase {
  uuid: string
  title: string
}

export interface Lecture {
  name: string
  instructor: string
}
// DevOps, Aws, 클라우드, 인프라 등 관련 기술스택 태그타입
export interface Tag {
  name: string
}
