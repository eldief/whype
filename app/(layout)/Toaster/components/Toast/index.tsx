import type { ToastMessage } from '../../types'
import { useEffect } from 'react'
import { cx } from '@/styled-system/css'

import { toastMessage, defaultToast, errorToast, successToast, toastWrapper } from './styles'
import { useToast } from '../../context/ToastContext'

const Toast = ({ toast }: { toast: ToastMessage }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const autoCloseTimer = setTimeout(() => removeToast(toast.id), 7_000)
    return () => {
      clearTimeout(autoCloseTimer)
    }
  }, [toast.id, removeToast])

  const toastType =
    toast.type === 'error' ? errorToast : toast.type === 'success' ? successToast : defaultToast

  return (
    <li className={cx(toastWrapper, toastType)}>
      {toast.message && <p className={toastMessage}>{toast.message}</p>}
    </li>
  )
}

export default Toast
