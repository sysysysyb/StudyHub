import { http, HttpResponse } from 'msw'

const getTestMSW = http.get('https://api.example.com/', () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [getTestMSW]
