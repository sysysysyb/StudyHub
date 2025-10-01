const STATE_KEY = 'naver_oauth_state'

export function createNaverState() {
  return encodeURIComponent(Math.random().toString(16).slice(2))
}

export function setNaverState(state: string) {
  sessionStorage.setItem(STATE_KEY, state)
}

export function getNaverState() {
  return sessionStorage.getItem(STATE_KEY)
}

export function clearNaverState() {
  sessionStorage.removeItem(STATE_KEY)
}
