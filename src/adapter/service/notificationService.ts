import {toast} from 'react-hot-toast'
import {NotificationService} from '~core'

export const showToast: NotificationService['showToast'] = (message, variant) => {
  switch (variant) {
    case 'error':
      return toast.error(message)
    case 'success':
      return toast.success(message)
  }
}
