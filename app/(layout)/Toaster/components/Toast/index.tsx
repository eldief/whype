import { useEffect, useState } from 'react'
import { cx } from '@/styled-system/css'
import {
  toastMessage,
  defaultToast,
  errorToast,
  successToast,
  toastWrapper,
  toastIn,
  toastOut,
  progressBar,
} from './styles'
import { useToast } from '../../context/ToastContext'
import type { ToastMessage } from '../../types'

const Toast = ({ toast }: { toast: ToastMessage }) => {
  const { removeToast } = useToast()
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => removeToast(toast.id), 300)
    }, 5000)

    return () => clearTimeout(autoCloseTimer)
  }, [toast.id, removeToast])

  const toastType =
    toast.type === 'error' ? errorToast : toast.type === 'success' ? successToast : defaultToast

  return (
    <li className={cx(toastWrapper, toastType, isExiting ? toastOut : toastIn)}>
      {toast.message && <p className={toastMessage}>{toast.message}</p>}
      <div className={progressBar} />
    </li>
  )
}

export default Toast
