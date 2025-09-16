import {
  type ApplicationDetail,
  AppliedStatus,
} from '@/types/api-response-types/recruitment-response-types'

export const applicationsMock: ApplicationDetail[] = [
  {
    uuid: 'applied-recruitment-1',
    title: '프론트엔드 마스터 클래스',
    applied_at: new Date('2025-09-30T23:59:59'),
    status: AppliedStatus.PENDING,
    self_introduction:
      '저는 3년 차 프론트엔드 개발자로, React와 Next.js 프로젝트 경험이 있습니다.',
    motivation:
      '최신 프론트엔드 기술 트렌드를 배우고 실제 업무에 적용하고 싶습니다.',
    objective:
      '수료 후에는 팀 내 프론트엔드 아키텍처 개선 프로젝트를 주도하는 것이 목표입니다.',
    available_time: '평일 저녁 7시 이후와 주말 오후 시간을 활용할 수 있습니다.',
    has_study_experience: true,
    study_experience:
      '사내 스터디에서 Next.js와 타입스크립트 학습을 주도한 경험이 있습니다.',
  },
  {
    uuid: 'applied-recruitment-2',
    title: '백엔드 실전 프로젝트',
    applied_at: new Date('2025-09-30T23:59:59'),
    status: AppliedStatus.ACCEPTED,
    self_introduction:
      '현재 Node.js 기반 API 서버를 운영하고 있으며, 성능 개선에 관심이 많습니다.',
    motivation:
      '실무에서 활용할 수 있는 백엔드 아키텍처와 최적화 기법을 배우고 싶습니다.',
    objective:
      '효율적인 데이터베이스 구조 설계와 안정적인 API 서버 개발을 목표로 합니다.',
    available_time: '주중 저녁 2시간, 주말 오전 시간을 확보할 수 있습니다.',
    has_study_experience: true,
    study_experience:
      '사내 프로젝트에서 MySQL과 Redis를 활용해 캐싱 구조를 설계한 경험이 있습니다.',
  },
  {
    uuid: 'applied-recruitment-3',
    title: 'AI & 머신러닝 기초',
    applied_at: new Date('2025-09-30T23:59:59'),
    status: AppliedStatus.CANCELED,
    self_introduction:
      '데이터 분석을 주로 해왔으며, 머신러닝에 대한 기초 지식을 쌓고 싶습니다.',
    motivation:
      'AI 기초 이론과 Python 기반 머신러닝 실습을 통해 새로운 영역에 도전하고자 합니다.',
    objective:
      '머신러닝 모델을 직접 구현하고, 데이터 분석 업무에 적용하는 것이 목표입니다.',
    available_time:
      '평일 퇴근 후 2~3시간, 주말 하루는 온전히 학습에 투자할 수 있습니다.',
    has_study_experience: false,
    study_experience:
      '기존에는 머신러닝 학습 경험이 없지만, 데이터 분석 경험을 기반으로 배우고자 합니다.',
  },
  {
    uuid: 'applied-recruitment-4',
    title: '클라우드 & DevOps 워크숍',
    applied_at: new Date('2025-09-30T23:59:59'),
    status: AppliedStatus.REJECTED,
    self_introduction:
      'DevOps 문화와 CI/CD 환경 구축에 관심이 많은 백엔드 개발자입니다.',
    motivation:
      '클라우드 환경에서의 배포 자동화와 운영 효율화 방법을 배우고 싶습니다.',
    objective:
      'AWS 기반 CI/CD 파이프라인을 구축하여 안정적인 서비스 배포를 실현하는 것이 목표입니다.',
    available_time:
      '평일 오후 8시 이후와 토요일 오전 시간을 사용할 수 있습니다.',
    has_study_experience: true,
    study_experience:
      'Docker와 GitHub Actions를 활용한 간단한 CI/CD 환경을 구성한 경험이 있습니다.',
  },
  {
    uuid: 'applied-recruitment-5',
    title: 'UI/UX 디자인 트렌드',
    applied_at: new Date('2025-09-30T23:59:59'),
    status: AppliedStatus.REJECTED,
    self_introduction:
      '웹 서비스 프론트엔드 개발을 하며 UI/UX에 대한 관심이 커졌습니다.',
    motivation:
      '디자인 시스템과 사용자 경험 설계를 이해하고 프로젝트에 적용하고 싶습니다.',
    objective:
      '프론트엔드와 디자인의 접점에서 더 나은 사용자 경험을 제공하는 것이 목표입니다.',
    available_time:
      '평일 저녁 9시 이후와 주말 하루 종일 시간을 확보할 수 있습니다.',
    has_study_experience: false,
    study_experience:
      '디자인 관련 학습 경험은 없지만, 팀 프로젝트에서 디자이너와 협업 경험이 있습니다.',
  },
]
