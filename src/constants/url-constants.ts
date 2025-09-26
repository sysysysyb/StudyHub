export const BASE_URL = 'ozcoding.site'

export const MSW_BASE_URL = `https://msw.${BASE_URL}/api/v1`

export const API_BASE_URL = `https://api.${BASE_URL}/api/v1`

// 1팀 담당 - 스터디 그룹 베이스 도메인
export const STUDY_BASE_URL = `https://study.${BASE_URL}/study-group`

// 3팀 담당 - 채용 + 강의 베이스 도메인
export const LEARN_BASE_URL = `https://learn.${BASE_URL}`
// 디코에는 나와 있지 않지만, 구인공고가 아닌 강의에 대한 하위 도메인이
// 따로 존재해야 할 것 같아 베이스 도메인 수정.

//채팅용 URL
export const WS_API_BASE_URL = `ws://${BASE_URL}/ws/`

export const WS_MSW_BASE_URL = `ws://msw.${BASE_URL}/ws/`
