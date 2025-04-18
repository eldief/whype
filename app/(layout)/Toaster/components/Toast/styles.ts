import { css } from '@/styled-system/css'

export const toastWrapper = css({
  position: 'relative',
  margin: '0.5rem 0 0',
  padding: '0.5rem',
  background: 'primary.dark-background',
  rounded: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid token(colors.primary.light-background)',
  overflow: 'hidden',
  textWrap: 'nowrap',
  textOverflow: 'ellipsis',
})

export const progressBar = css({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '4px',
  backgroundColor: 'primary.mint-green-lighter',
  width: '100%',
  animation: 'countdown 5s linear forwards',
})

export const defaultToast = css({
  color: 'text.main',
})

export const successToast = css({
  color: 'primary.mint-green',
})

export const errorToast = css({
  color: 'primary.error',
})

export const toastMessage = css({
  display: 'block',
  paddingBottom: '4px',
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
