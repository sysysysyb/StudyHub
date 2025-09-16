import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse, passthrough } from 'msw'
import { userInformationMock } from '@/mocks/data/user-information-data'

let isLoggedIn = false

const login = http.post(`${API_BASE_URL}/users/auth/login`, () => {
  isLoggedIn = true
  return HttpResponse.json({ message: 'Login successful' }, { status: 200 })
})

const logout = http.post(`${API_BASE_URL}/users/auth/logout`, () => {
  isLoggedIn = false
  return HttpResponse.json({ message: 'Logout successful' }, { status: 200 })
})

const getUserInformation = http.get(`${API_BASE_URL}/users/me`, () => {
  if (!isLoggedIn) {
    return HttpResponse.json(
      { message: 'Authentication required.' },
      { status: 401 }
    )
  }
  return HttpResponse.json(userInformationMock[0])
})

const passthroughPiscumPhotos = http.get(
  `https://picsum.photos/id/:rest*`,
  () => {
    return passthrough()
  }
)

export const authHandlers = [
  login,
  logout,
  getUserInformation,
  passthroughPiscumPhotos,
]
