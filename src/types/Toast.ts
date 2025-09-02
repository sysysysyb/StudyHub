export interface Toast {
  id?: number
  type: 'success' | 'warning' | 'error'
  content: string
}
