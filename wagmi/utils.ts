import { ToastMessage } from '@/app/(layout)/Toaster/types'

export const hasShortMessage = (err: unknown): err is { shortMessage: string } => {
  return (
    typeof err === 'object' &&
    err !== null &&
    'shortMessage' in err &&
    typeof (err as Record<string, unknown>).shortMessage === 'string'
  )
}

export const manageError = (err: unknown, addToast: (toast: Omit<ToastMessage, 'id'>) => void) => {
  if (hasShortMessage(err)) {
    addToast({
      message: err.shortMessage,
      type: 'error',
    })
  } else if (err instanceof Error) {
    addToast({
      message: err.message,
      type: 'error',
    })
  } else {
    addToast({
      message: 'Unexpected error.',
      type: 'error',
    })
  }
  console.error(err)
}
