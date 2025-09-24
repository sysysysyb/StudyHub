export interface UserInformation {
  id: number
  email: string
  nickname: string
  name: string
  phoneNumber: string
  birthday: string
  gender: 'male' | 'female'
  profileImageUrl?: string
  createdAt: Date
}
