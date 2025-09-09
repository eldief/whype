import { useEffect, useState } from 'react'
import { cx } from '@/styled-system/css'
import {
  toastMessage,
  defaultToast,
  errorToast,
  successToast,
  toastWrapper,
  progressBar,
} from './styles'
import { useToast } from '../../context/ToastContext'
import type { ToastMessage } from '../../types'
import { AnimatePresence, motion } from 'framer-motion'
import { progressBarAnimation, toastAnimation } from '@/app/animations'

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
    <AnimatePresence mode='wait' initial={true}>
      {!isExiting && (
        <motion.li
          key={toast.id + '-toast'}
          className={cx(toastWrapper, toastType)}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={toastAnimation}
        >
          {toast.message && <p className={toastMessage}>{toast.message}</p>}
          <motion.div
            key={toast.id + '-progressbar'}
            className={progressBar}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={progressBarAnimation}
          />
        </motion.li>
      )}
    </AnimatePresence>
  )
}

export default Toast
