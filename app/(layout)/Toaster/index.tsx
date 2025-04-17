'use client'

import Toast from './components/Toast'
import { useToast } from './context/ToastContext'
import { list } from './styles'

const Toaster = () => {
  const { toasts } = useToast()

  return (
    <ul className={list}>
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ul>
  )
}

export default Toaster
