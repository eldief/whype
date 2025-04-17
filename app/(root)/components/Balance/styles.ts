import { css } from '@/styled-system/css'

export const balance = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // background: 'primary.dark-background',
  // border: '1px solid token(colors.primary.light-background)',
  borderRadius: '0.25rem',
  // padding: '0.75rem',
})

export const balanceWrapper = css({
  color: 'text.subtle',
})

export const rounded = css({
  borderRadius: '100%',
})

export const balanceRow = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '10px',
})

export const balanceCol = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  lineHeight: '1.1rem',
})
