export function getAccessToken() {
  return localStorage.getItem('access')
}

export function setAccessToken(token: string) {
  localStorage.setItem('access', token)
}

export function clearAccessToken() {
  localStorage.removeItem('access')
}
