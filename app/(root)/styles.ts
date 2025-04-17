import { css } from '@/styled-system/css'

export const main = css({
  marginX: 'auto',
  width: '100%',
  maxWidth: '420px',
  display: 'flex',
  flexDirection: 'column',
  // background: 'primary.dark-blue',
  borderRadius: '0.25rem',
  // border: '3px solid token(colors.primary.background)',
  padding: '0.5rem',
  gap: '1rem',
})

export const balanceRow = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
