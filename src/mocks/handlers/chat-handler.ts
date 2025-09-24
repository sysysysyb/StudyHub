import { MSW_BASE_URL } from '@/constants/url-constants'
import { http, HttpResponse, ws } from 'msw'
import { chatRoomMessages } from '@/mocks/data/chat-room-data'

const getChatMessages = http.get<{ study_group_uuid: string }>(
  `${MSW_BASE_URL}/chat/rooms/:study_group_uuid/messages`,
  () => {
    return HttpResponse.json(chatRoomMessages)
  }
)

const chat = ws.link('ws://example/ws/chat/')

const chatConnection = chat.addEventListener('connection', ({ client }) => {
  console.log('WebSocket client connecting...', client)

  // 3초마다 랜덤 메시지 전송
  const intervalId = setInterval(() => {
    // chatRoomMessages.results에서 랜덤 메시지 선택
    const randomIndex = Math.floor(
      Math.random() * chatRoomMessages.results.length
    )
    const randomMessage = chatRoomMessages.results[randomIndex]

    client.send(
      JSON.stringify({
        type: 'chat_message',
        data: randomMessage,
      })
    )
  }, 5000)

  // ✅ 클라이언트에서 보낸 메시지 수신 처리
  client.addEventListener('message', async (event) => {
    try {
      let raw = event.data

      // Blob일 경우 문자열로 변환
      if (raw instanceof Blob) {
        raw = await raw.text()
      }

      // ArrayBuffer일 경우 문자열로 변환
      if (raw instanceof ArrayBuffer) {
        raw = new TextDecoder().decode(raw)
      }

      const payload = JSON.parse(raw as string)

      if (payload.type === 'send_message') {
        const userMessage = {
          message_id: Date.now(), // 임시 ID
          sender: {
            user_uuid: 'client-uuid-1234',
            nickname: '사용자',
            profile_img_url: '/default.png',
          },
          content: payload.data.content,
          created_at: new Date().toISOString(),
        }

        // 클라이언트에게 다시 전송 (에코처럼 동작)
        client.send(
          JSON.stringify({
            type: 'chat_message',
            data: userMessage,
          })
        )
      }
    } catch (err) {
      console.error('❌ 클라이언트 메시지 파싱 실패:', err)
    }
  })

  // 클라이언트가 연결을 끊으면 interval 제거
  client.addEventListener('close', () => {
    clearInterval(intervalId)
  })
})

export const chatHandlers = [getChatMessages, chatConnection]
