import type {
  ChatRoomMessages,
  Sender,
} from '@/schemas/api-response-schemas/chat-response.schema'

const senders: Sender[] = [
  {
    user_uuid: 'user-uuid-1',
    nickname: 'Alice',
    profile_img_url: 'https://placehold.co/48x48?text=A',
  },
  {
    user_uuid: 'user-uuid-2',
    nickname: 'Bob',
    profile_img_url: 'https://placehold.co/48x48?text=B',
  },
  {
    user_uuid: 'user-uuid-3',
    nickname: 'Charlie',
    profile_img_url: 'https://placehold.co/48x48?text=C',
  },
]

export const chatRoomMessages: ChatRoomMessages = {
  next_cursor: 'cursor-21',
  results: Array.from({ length: 20 }, (_, i) => {
    const sender = senders[i % senders.length]
    return {
      message_id: i + 1,
      sender,
      content: [
        '안녕하세요!',
        '오늘 날씨 좋다',
        '점심 뭐 먹지?',
        '고마워요!',
        '지금 어디야?',
        '곧 도착해요',
        '회의 준비 완료',
        '사진 보낼게요',
        '재밌겠다!',
        '조심히 와요',
        '좋은 하루!',
        '프로젝트 진행중',
        '테스트 완료',
        '연락 주세요',
        '다음에 보자',
        '시간 괜찮아?',
        '좋습니다',
        '확인했어요',
        '내일 봐요',
        '좋은 밤 되세요',
      ][i],
      created_at: new Date(Date.now() - i * 1000 * 60),
    }
  }),
}
