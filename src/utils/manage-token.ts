export function getAccessToken() {
  return localStorage.getItem('access-token')
}

export function setAccessToken(token: string) {
  localStorage.setItem('access-token', token)
}

export function clearAccessToken() {
  localStorage.removeItem('access-token')
}
