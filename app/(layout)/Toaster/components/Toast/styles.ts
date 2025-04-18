import { css } from '@/styled-system/css'

export const toastWrapper = css({
  position: 'relative',

  margin: '0.5rem 0 0',
  padding: '0.5rem',

  background: 'primary.dark-background',
  rounded: '0.75rem',
  display: 'flex',
  justifyContent: 'center',
})

export const defaultToast = css({
  borderColor: 'primary.light-background',
  borderWidth: '1px',
  borderStyle: 'solid',
})

export const successToast = css({
  borderColor: 'primary.mint-green',
  borderWidth: '1px',
  borderStyle: 'solid',
})

export const errorToast = css({
  borderColor: 'primary.error',
  borderWidth: '1px',
  borderStyle: 'solid',
})

export const toastMessage = css({
  display: 'block',
  overflow: 'hidden',
  whiteSpace: 'no-wrap',
  textOverflow: 'ellipsis',
})

export const toastIn = css({
  animation: `slide-in-right 0.3s ease-out forwards`,
})

export const toastOut = css({
  animation: `slide-out-right 0.3s ease-in forwards`,
})
