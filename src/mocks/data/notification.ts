import type { NotificationList } from '@/types/api-response-types/notification-response-types'

export const mockNotificationList: NotificationList = {
  results: [
    // STUDY_JOIN
    {
      notification_id: 1,
      user_id: 100,
      content: '스터디에 새로운 멤버가 가입했습니다.',
      type: 'STUDY_JOIN',
      is_read: true,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-09-12T17:59:29.371936'),
    },
    {
      notification_id: 2,
      user_id: 100,
      content: '스터디에 새로운 멤버가 가입했습니다.',
      type: 'STUDY_JOIN',
      is_read: false,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-08-19T03:38:38.371963'),
    },

    // STUDY_NOTE_CREATE
    {
      notification_id: 3,
      user_id: 100,
      content: '새로운 스터디 노트가 작성되었습니다.',
      type: 'STUDY_NOTE_CREATE',
      is_read: true,
      redirect_url: '/study-group/1111',
      created_at: new Date('2025-08-22T21:23:54.371974'),
    },
    {
      notification_id: 4,
      user_id: 100,
      content: '새로운 스터디 노트가 작성되었습니다.',
      type: 'STUDY_NOTE_CREATE',
      is_read: false,
      redirect_url: '/study-group/1111',
      created_at: new Date('2025-09-12T07:03:50.371983'),
    },

    // STUDY_REVIEW_REQUEST
    {
      notification_id: 5,
      user_id: 100,
      content: '스터디 리뷰 작성 요청이 도착했습니다.',
      type: 'STUDY_REVIEW_REQUEST',
      is_read: true,
      redirect_url: '/my-page/completed-study',
      created_at: new Date('2025-09-15T23:17:58.371992'),
    },
    {
      notification_id: 6,
      user_id: 100,
      content: '스터디 리뷰 작성 요청이 도착했습니다.',
      type: 'STUDY_REVIEW_REQUEST',
      is_read: false,
      redirect_url: '/my-page/completed-study',
      created_at: new Date('2025-09-13T11:38:09.371998'),
    },

    // APPLICATION_ACCEPT
    {
      notification_id: 7,
      user_id: 100,
      content: '스터디 지원이 승인되었습니다.',
      type: 'APPLICATION_ACCEPT',
      is_read: true,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-09-01T02:02:27.372002'),
    },
    {
      notification_id: 8,
      user_id: 100,
      content: '스터디 지원이 승인되었습니다.',
      type: 'APPLICATION_ACCEPT',
      is_read: false,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-09-03T02:10:27.372007'),
    },

    // APPLICATION_REJECT
    {
      notification_id: 9,
      user_id: 100,
      content: '스터디 지원이 거절되었습니다.',
      type: 'APPLICATION_REJECT',
      is_read: true,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-08-21T05:22:59.372013'),
    },
    {
      notification_id: 10,
      user_id: 100,
      content: '스터디 지원이 거절되었습니다.',
      type: 'APPLICATION_REJECT',
      is_read: false,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-08-24T10:30:02.372017'),
    },

    // ADD_APPLICATION
    {
      notification_id: 11,
      user_id: 100,
      content: '새로운 지원서가 추가되었습니다.',
      type: 'ADD_APPLICATION',
      is_read: true,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-09-12T02:57:39.372021'),
    },
    {
      notification_id: 12,
      user_id: 100,
      content: '새로운 지원서가 추가되었습니다.',
      type: 'ADD_APPLICATION',
      is_read: false,
      redirect_url: '/my-page/applied-study',
      created_at: new Date('2025-09-12T10:53:23.372025'),
    },

    // TODAY_SCHEDULE
    {
      notification_id: 13,
      user_id: 100,
      content: '오늘 예정된 스케줄이 있습니다.',
      type: 'TODAY_SCHEDULE',
      is_read: true,
      redirect_url: '/study-group/1111',
      created_at: new Date('2025-09-09T17:27:18.372029'),
    },
    {
      notification_id: 14,
      user_id: 100,
      content: '오늘 예정된 스케줄이 있습니다.',
      type: 'TODAY_SCHEDULE',
      is_read: false,
      redirect_url: '/study-group/1111',
      created_at: new Date('2025-08-19T07:10:17.372032'),
    },

    // UPCOMIG_SCHEDULE
    {
      notification_id: 15,
      user_id: 100,
      content: '다가오는 스케줄이 있습니다.',
      type: 'UPCOMIG_SCHEDULE',
      is_read: true,
      redirect_url: '/study-group/1111',
      created_at: new Date('2025-09-08T03:04:27.372036'),
    },
    {
      notification_id: 16,
      user_id: 100,
      content: '다가오는 스케줄이 있습니다.',
      type: 'UPCOMIG_SCHEDULE',
      is_read: false,
      redirect_url: '/study-group/1111',
      created_at: new Date('2025-08-29T17:10:45.372041'),
    },
  ],
  next: '',
  previous: '',
}
