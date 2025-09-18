export function getIsLoggedIn() {
  const isLoggedIn = sessionStorage.getItem('login')
  return isLoggedIn === 'success' ? true : false
}

export function setIsLoggedIn() {
  sessionStorage.setItem('login', 'success')
}

export function clearIsLoggedIn() {
  sessionStorage.removeItem('login')
}
