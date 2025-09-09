import { API_BASE_URL } from '@/constants/api-constants'
import { http, HttpResponse, passthrough } from 'msw'
import { userInformationMock } from '@/mocks/data/user-information'

const getUserInformation = http.get(`${API_BASE_URL}/users/me`, () => {
  const randomIndex = Math.floor(Math.random() * 3)
  return HttpResponse.json(userInformationMock[randomIndex])
})

const passthroughPiscumPhotos = http.get(
  `https://picsum.photos/id/:rest*`,
  () => {
    return passthrough()
  }
)

export const userInformationHandlers = [
  getUserInformation,
  passthroughPiscumPhotos,
]
