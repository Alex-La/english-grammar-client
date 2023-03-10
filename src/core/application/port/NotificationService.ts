export interface NotificationService {
  showToast(message: string, variant: 'success' | 'error'): void
}
