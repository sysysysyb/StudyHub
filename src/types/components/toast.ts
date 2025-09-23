export interface Toast {
  id: number
  type: 'success' | 'warning' | 'error'
  title?: string
  content: string
}
