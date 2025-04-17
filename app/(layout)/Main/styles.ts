import { css } from '@/styled-system/css'

export const main = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4rem',

  width: '100%',
  minHeight: 'calc(100dvh - 64px)',
  borderRadius: '0.25rem',
  border: '3px solid token(colors.primary.background)',
  borderTop: '1.5px solid token(colors.primary.background)!',
})
